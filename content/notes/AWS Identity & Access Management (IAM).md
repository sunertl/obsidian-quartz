---
tags:
  - aws/security
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Identity and Access Management]]"
---
## Overview

AWS Identity and Access Management (IAM) provides fine-grained access control across all of AWS. With IAM, you can specify who can access which services and resources, and under which conditions. With IAM policies, you manage permissions to your workforce and systems to ensure least-privilege permissions.

>[!Important]
>IAM is a global service.

## Identity
[[Identity]] helps to understand who are the validated users or entities in your organization. Identities can be an [[IAM User]], [[IAM Group]] or [[IAM Role]]

## Access Management
[[Access Management]]  is a set of permissions (within IAM policies) that manage the type of access you grant each IAM entity. 

>[!important]
>**Concept of least privilege** 
Best practice is to assign a user an [[IAM Group]] that has specific set of privileges. Once that user leaves the organization or changes teams, you can easily remove this person from the [[IAM Group]].

