---
category:
  - "[[Places]]"
type:
  - "[[Cities]]"
tags:
  - places
  - cities
loc: 
rating: 
created: {{date}}
last: 
location:
  - "35.021041"
  - "135.7556075"
---
## Trips

```dataview
table without id
	file.link as Trip,
	start as Start,
	end as End
where
	contains(category, [[Trips]]) and
	contains(loc, this.file.link)
sort file.name desc
```

## Map

```leaflet
id: file.name
height: 500px
minZoom: 1
maxZoom: 20
defaultZoom: 11
coordinates: [[ ]]
unit: miles
scale: 1
nearby: 10 mi
darkMode: true
```

## Places

```dataview
table without id
	file.link as Place,
	rating as Rating,
	type as Type
where
	contains(category, [[Places]]) and
	contains(loc, this.file.link)
sort rating desc
```