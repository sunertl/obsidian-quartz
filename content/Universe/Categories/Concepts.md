



```dataview
table without id
	file.link as "List of Concepts",
	type as "Type"
from [[Concepts]]
where contains(category,[[Concepts]])
sort file.name ASC
limit 50
```



