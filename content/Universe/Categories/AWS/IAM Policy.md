---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Identity & Access Management (IAM)]]"
related:
  - "[[Identity and Access Management]]"
  - "[[IAM Policy Types]]"
---
## Overview

- Policy contains list of permissions to allow an entity to perform tasks - this is called an IAM policy document
	- it consists of one or more statements
	- inside of curly braces
- are attached to entities
- Can attach policy to [[Identity]] Group for easier management  -> don't need to manually assign individual permissions to users. Can also configure role to AWS resources
- contains permissions that explicitly allow or deny access to certain AWS services
- provides fine-grained access control to specific API actions
- you can also set up IP or MFA conditions
- available in an [[JSON]] or visual editor
- standalone policy: remains unchanged even if you delete the associated [[Identity]] Policy
- inline policy: will be automatically deleted if you delete the associated identity

>[!important] Important
>Explicit `Deny` is the first priority when policies are evaluated. `Deny` rules overrule all other rules first. Explicit `Deny` always take priority. Explicit `Allow` is the second priority. If there are no explicit `Deny` or `Allow` rules, then the default `Deny` takes effect (implicit `Deny`). The flow is `Deny`, `Allow`, `Deny`

## Syntax

### Statement
- First part of a statement is `"Sid"`  ("Statement ID")
	- optional field
	- let's you identify a statement and what it does

### Effect
- Can be `Allow` or `Deny`. By default, users don't have permission to use resources and API actions, so all requests are denied. An explicit allow overrides the default. An explicit deny overrides any allows.

### Action
- Specific API action for which you are granting or denying permission.

### Resource
- Resource that is affected by the action. Some Amazon EC2 API actions allow you to include specific resources in your policy that can be created or modified by the action. You specify a resource using an ARN or using the wildcard (`*`) to indicate that the statement applies to all resources.

### Condition
- Optional
- Can be used to control when your policy is in effect.

### Principal
- Defines which principals are affected by the policy (which identity/principal)
- This is not there in an [[Identity-Based Policy|identity policy]] because it is implied
- If a principal component is in a policy, it is most likely a [[Resource-Based Policy|resource policy]]


## Policy Interpretation

### Step 1 - Number of Statements
How many statements are in the policy, indicated by the `[` at the beginning and `]` at the end of the statement block. Within the statement block, the number of **individual** statements are indicated by `{` at the beginning and `}` at the end. 

![[Screenshot 2023-11-11 at 1.11.00 PM.png]]

### Step 2 - Identify Statement Purpose
What is the effect of each identified statement? Either `Allow` or `Deny` 

### Step 3 - Evaluate Statements
Evaluate exactly what each statement does and identify any overlap 

>[!note] Note
>Usually, you don't find a IAM policy with a single statement only with a `Deny` effect being used in isolation because they will have no effect. If you find a policy like that, it is often used in conjunction with another policy.


## Evaluation Logic

>[!important] Important
>The policy evaluation process in a single AWS account is:
>Explicit Deny - SCPs - Resource Policies - Permission Boundaries - Session Policies - Identity Policies.


![[Screenshot 2023-11-11 at 3.15.44 PM.png]]


