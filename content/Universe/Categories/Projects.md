---
tags:
  - categories
---

```dataview
table 
	type as Type,
	year as Year,
	status as Status
where
	contains(category,[[Projects]]) and
	!contains(file.name,"Template")
sort year desc
```
