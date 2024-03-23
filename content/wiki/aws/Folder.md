---
tags:
  - docs
---
The concept of a "folder" is not hierarchical unlike Amazon EFS
	- Folder is technically a prefix that is shared by your objects 
	- If an object has a trailing forward-slash in its key name, then it's considered as a folder in S3.
	- Folder structure is more for grouping objects and not for implementing file hierarchy 
	- Example:
		-  tutorialsdojo/aws.jep - the whole statement is an object key name. 
		- 'tutorialsdojo/' - is a prefix
		- 'aws.jpeg' - is a filename

____
