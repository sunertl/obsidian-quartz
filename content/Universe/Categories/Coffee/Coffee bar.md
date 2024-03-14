---
tags:
  - categories
---



```dataview
table without id
	file.link as Coffee,
	distributor as Distributor,
	country as Country,	
	region as Region,
	process as Process,
	rating as Rating,
	last as "Tasted Last"
where 
	contains(category,this.file.link) and
	!contains(file.name,"Template") and
	!contains(type, "Variety")
sort rating desc
limit 100
```


