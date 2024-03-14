---
category:
  - "[[Places]]"
type:
  - "[[Cities]]"
tags:
  - places
  - cities
loc:
  - "[[Italy]]"
rating: 7
created: 2023-11-22
last: 2024-01-03
location:
  - "45.46694"
  - "9.19000"
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
coordinates: [[Milan]]
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

