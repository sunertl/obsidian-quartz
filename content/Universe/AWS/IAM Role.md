---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Identity & Access Management (IAM)]]"
related:
  - "[[Identity and Access Management]]"
  - "[[Identity]]"
  - "[[IAM Role Use Cases]]"
---
## Overview

- One type of identity which exists inside an AWS account (the other type - [[IAM User]])
- Best used for multiple [[Principal|principals]] (multiple AWS users inside the same AWS account, humans, applications or services inside our outside of an AWS account who make use of that role)
- If you cannot identify the number of principals which use an identity, then it could be a candidate for an IAM role
	- limit on IAM users is 5,000 - if you have more than that, could be a candidate for IAM role as well
- IAM role is generally used on a temporary basis

>[!important] Important
> A role doesn't represent you, but is something which represents a level of access inside an AWS account.

>[!important] Important
>If you're an external identity and you assume a role inside an AWS account, then you become that role and you gain access to any access rights that that role has for a short time. You essentially become an identity in the account for a short period of time. 

- what an AWS resource can assume, i.e. an EC2 instance and AWS lambda function can both assume an IAM role
- cross account role: grants access to services in one account to a trusted principal in a different AWS account
- AWS service role: assumed by an AWS service, limited within your AWS account only
- AWS service linked role: directly linked to an AWS service, are predefined by the service

## Managing Access to IAM Roles
### Trust Policy
The [[Trust Policy|trust policy]] defines which principals can assume the role, and under which conditions. A trust policy is a specific type of [[Resource-Based Policy]] for IAM roles.

### [[Identity-Based Policy]] (inline and managed)
These policies define the permissions that the user of the role is able to perform (or is denied from performing), and on which resources.

### Permission Boundary
A [[Permissions Boundary|permissions boundary]] is an advanced feature for using a managed policy to set the maximum permissions for a role. A principal’s permissions boundary allows it to perform only the actions that are allowed by both its identity-based permissions policies and its permissions boundaries. You can use permissions boundaries to delegate permissions management tasks, such as IAM role creation, to non-administrators so that they can create roles in self-service.

