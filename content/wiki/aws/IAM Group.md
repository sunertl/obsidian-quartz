---
tags:
  - docs
up:
  - "[[AWS Identity & Access Management (IAM)]]"
related:
  - "[[Identity and Access Management]]"
  - "[[IAM User]]"
  - "[[Identity]]"
---
## Overview

>[!Definition]
>An IAM group is a container of users which makes it easiert to organize a large set of IAM users.

>[!Important]
>You cannot log in to an IAM Group

- group of IAM users / group of related users e.g. development team, finance or HR
- single IAM user can belong to multiple IAM groups
- cannot be nested (can only contain IAM users and not other groups!)
- no default IAM user group
- Groups are not a true identity. They can't be referenced as a principal in a policy.
	- A resource policy cannot grant access to an IAM Group
	- You can grant access to IAM Users, and those users can be in groups, but a resource policy cannot grant access to an IAM Group
	- You cannot have a resource policy on an S3 bucket and grant access to the Developers group and then expect all of the developers to access it
	- Groups are just there to group up IAM Users and allow permissions to be assigned to those groups which the IAM users inherit
- can assign IAM policy to IAM group
