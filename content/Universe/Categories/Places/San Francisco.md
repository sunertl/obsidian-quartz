---
category:
  - "[[Places]]"
type:
  - "[[Cities]]"
tags:
  - places
  - cities
loc:
  - "[[USA]]"
rating: 10
created: 2023-11-22
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

