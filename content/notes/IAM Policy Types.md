---
tags:
  - aws/security
up:
  - "[[AWS Identity & Access Management (IAM)]]"
related:
  - "[[Identity and Access Management]]"
  - "[[IAM Policy]]"
---
## Overview

- [[Identity-Based Policy]]
	- policy that is attached to an IAM identity
	- consists of managed policy or inline policy
- [[Resource-Based Policy]]
	- attaches an inline policy to an AWS resource
- [[Permissions Boundary]]
	- defines max. permissions that an identity-based policy can grant to an IAM identity
- [[Service Control Policy (SCP)]] 
	- primarily used in AWS organizations
	- defines the max. permissions for account members of an organization/organizational unit
- [[Access Control List (ACL)]]
	- primarily used in S3 buckets
	- controls which principals in other AWS accounts can access a particular bucket
	- cross-account permission policies 
- [[Session Policy]]
	- sets a limit of what kind of permissions a session has (similar to permission boundaries)