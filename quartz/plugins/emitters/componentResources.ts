import { FilePath, ServerSlug } from "../../path"
import { PluginTypes, QuartzEmitterPlugin } from "../types"

// @ts-ignore
import spaRouterScript from "../../components/scripts/spa.inline"
// @ts-ignore
import plausibleScript from "../../components/scripts/plausible.inline"
// @ts-ignore
import popoverScript from "../../components/scripts/popover.inline"
import styles from "../../styles/base.scss"
import popoverStyle from "../../components/styles/popover.scss"
import { BuildCtx } from "../../ctx"
import { StaticResources } from "../../resources"
import { QuartzComponent } from "../../components/types"
import { googleFontHref, joinStyles } from "../../theme"

type ComponentResources = {
  css: string[]
  beforeDOMLoaded: string[]
  afterDOMLoaded: string[]
}

function getComponentResources(plugins: PluginTypes): ComponentResources {
  const allComponents: Set<QuartzComponent> = new Set()
  for (const emitter of plugins.emitters) {
    const components = emitter.getQuartzComponents()
    for (const component of components) {
      allComponents.add(component)
    }
  }

  const componentResources = {
    css: new Set<string>(),
    beforeDOMLoaded: new Set<string>(),
    afterDOMLoaded: new Set<string>(),
  }

  for (const component of allComponents) {
    const { css, beforeDOMLoaded, afterDOMLoaded } = component
    if (css) {
      componentResources.css.add(css)
    }
    if (beforeDOMLoaded) {
      componentResources.beforeDOMLoaded.add(beforeDOMLoaded)
    }
    if (afterDOMLoaded) {
      componentResources.afterDOMLoaded.add(afterDOMLoaded)
    }
  }

  return {
    css: [...componentResources.css],
    beforeDOMLoaded: [...componentResources.beforeDOMLoaded],
    afterDOMLoaded: [...componentResources.afterDOMLoaded],
  }
}

function joinScripts(scripts: string[]): string {
  // wrap with iife to prevent scope collision
  return scripts.map((script) => `(function () {${script}})();`).join("\n")
}

function addGlobalPageResources(
  ctx: BuildCtx,
  staticResources: StaticResources,
  componentResources: ComponentResources,
) {
  const cfg = ctx.cfg.configuration
  const reloadScript = ctx.argv.serve
  staticResources.css.push(googleFontHref(cfg.theme))

  // popovers
  if (cfg.enablePopovers) {
    componentResources.afterDOMLoaded.push(popoverScript)
    componentResources.css.push(popoverStyle)
  }

  if (cfg.analytics?.provider === "google") {
    const tagId = cfg.analytics.tagId
    staticResources.js.push({
      src: `https://www.googletagmanager.com/gtag/js?id=${tagId}`,
      contentType: "external",
      loadTime: "afterDOMReady",
    })
    componentResources.afterDOMLoaded.push(`
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag(\`js\`, new Date());
      gtag(\`config\`, \`${tagId}\`, { send_page_view: false });
  
      document.addEventListener(\`nav\`, () => {
        gtag(\`event\`, \`page_view\`, {
          page_title: document.title,
          page_location: location.href,
        });
      });`)
  } else if (cfg.analytics?.provider === "plausible") {
    componentResources.afterDOMLoaded.push(plausibleScript)
  }

  // spa
  if (cfg.enableSPA) {
    componentResources.afterDOMLoaded.push(spaRouterScript)
  } else {
    componentResources.afterDOMLoaded.push(`
        window.spaNavigate = (url, _) => window.location.assign(url)
        const event = new CustomEvent("nav", { detail: { slug: document.body.dataset.slug } })
        document.dispatchEvent(event)`)
  }

  if (reloadScript) {
    staticResources.js.push({
      loadTime: "afterDOMReady",
      contentType: "inline",
      script: `
          const socket = new WebSocket('ws://localhost:3001')
          socket.addEventListener('message', () => document.location.reload())
        `,
    })
  }
}

export const ComponentResources: QuartzEmitterPlugin = () => ({
  name: "ComponentResources",
  getQuartzComponents() {
    return []
  },
  async emit(ctx, _content, resources, emit): Promise<FilePath[]> {
    // component specific scripts and styles
    const componentResources = getComponentResources(ctx.cfg.plugins)
    // important that this goes *after* component scripts
    // as the "nav" event gets triggered here and we should make sure
    // that everyone else had the chance to register a listener for it
    addGlobalPageResources(ctx, resources, componentResources)
    const fps = await Promise.all([
      emit({
        slug: "index" as ServerSlug,
        ext: ".css",
        content: joinStyles(ctx.cfg.configuration.theme, styles, ...componentResources.css),
      }),
      emit({
        slug: "prescript" as ServerSlug,
        ext: ".js",
        content: joinScripts(componentResources.beforeDOMLoaded),
      }),
      emit({
        slug: "postscript" as ServerSlug,
        ext: ".js",
        content: joinScripts(componentResources.afterDOMLoaded),
      }),
    ])
    return fps
  },
})