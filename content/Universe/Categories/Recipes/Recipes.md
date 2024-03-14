---
tags:
  - categories
---
https://imgur.com/gallery/Cey1Ud1


```dataview
table without id
	file.link as Recipe, cuisine as Cuisine, type as Type, rating as Rating 
	from -"Meta/Templates"
where
	contains(category,this.file.link) and
	!contains(file.name,"Template")
sort rating desc
```


