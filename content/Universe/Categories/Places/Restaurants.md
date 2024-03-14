---
tags:
  - food
---
```dataview
table without id
	file.link as "List of Restaurants",
	loc as "Location",
	rating as "Rating"
	from -"Meta/Templates"
where contains(type, [[Restaurants]])
sort file.name ASC
limit 50
```

