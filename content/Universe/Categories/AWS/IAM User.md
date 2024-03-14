---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[AWS Identity & Access Management (IAM)]]"
  - "[[Identity]]"
  - "[[Identity and Access Management]]"
---
## Overview

- Identity used for anything requiring long-term AWS access e.g. Humans, Applications or service accounts
- A user starts with a principal - an entity trying to access an AWS account
	- a principal (person or application) makes requests to IAM to interact with resources
	- to be able to interact with resources, it needs to authenticate against an identity within IAM
	- an IAM user is an identity which can be used in this way
	- Authentication is a process where a principal proves to IAM that it is an identity that it claims to be
	- Authentication is done by either using username and password or access keys
	- Once authenticated, the principal is now known as an authenticated identity
	- Authenticated identity has been proven to AWS that it is indeed the identity that it claims to be
- can attach existing permissions via policy (i.e. AWS managed policy or customer-managed policy)

