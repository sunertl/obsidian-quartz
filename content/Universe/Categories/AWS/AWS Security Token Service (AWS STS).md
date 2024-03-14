---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Identity & Access Management (IAM)]]"
related:
  - "[[Identity and Access Management]]"
  - "[[Identity]]"
---
## Overview
- service that you can use to create and provide trusted users with temporary security credentials that can control access to your AWS resources
- Work almost identically to long-term access key credentials

![[Pasted image 20220307153905 1.png]]

1. Alice in Dev account assumes an IAM role (WriteAccess) in the Prod Account by calling `sts:AssumeRole`
2. STS returns a set of temporary security credentials
3. Alice uses the temporary security credentials to access services and resources in the Prod account. Alice could e.g. make calls to Amazon S3 and Amazon EC2 which are granted by the WriteAccess role.

