---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Identity & Access Management (IAM)]]"
related:
  - "[[IAM Role]]"
  - "[[IAM User]]"
---
## Overview
An entity in AWS that can perform actions and access resources. A principal can be an AWS account root user, an [[IAM User]], or a [[IAM Role|role]]. You can grant permissions to access a resource in one of two ways:

- You can attach a permissions policy to a [[IAM User|user]] (directly, or indirectly through a group) or to a [[IAM Role|role]].

- For those services that support [[Resource-Based Policy|resource-based policies]], you can identify the principal in the Principal element of a policy attached to the resource.

If you reference an [[AWS Account|AWS account]] as principal, it generally means any principal defined within that account.