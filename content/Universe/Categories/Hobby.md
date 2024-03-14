---
tags:
  - categories
---

```dataview
table 
	type as Type
where
	contains(category,[[Hobby]]) and
	!contains(file.name,"Template")
sort year desc
```

