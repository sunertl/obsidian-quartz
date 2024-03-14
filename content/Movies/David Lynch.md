---
category:
  - "[[People]]"
tags:
  - people
  - directors
created: 2023-10-29
---
## Movies

```dataview
table without id
	file.link as Movie,
	year as Year,
	rating as Rating
where
	contains(category,[[Movies]]) and
	contains(director,this.file.link)
sort rating desc
```
