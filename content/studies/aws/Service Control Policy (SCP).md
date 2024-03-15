---
tags:
  - CS/cloud/aws/security
up:
  - "[[AWS Organizations]]"
  - "[[AWS Identity & Access Management (IAM)]]"
related:
  - "[[IAM Policy]]"
  - "[[IAM Policy Types]]"
  - "[[Management and Security Governance]]"
---
# Service Control Policies

>[!defintion]
>Service control policies (SCPs) are a type of organization policy that you can use to manage permissions in your organization. SCPs offer central control over the maximum available permissions for all accounts in your organization. SCPs help you to ensure your accounts stay within your organization’s access control guidelines.


- SCPs alone are not sufficient to granting permissions to the accounts in your organization. 
- No permissions are granted by an SCP. An SCP defines a guardrail, or sets limits, on the actions that the account's administrator can delegate to the IAM users and roles in the affected accounts. 
- The administrator must still attach identity-based or resource-based policies to IAM users or roles, or to the resources in your accounts to actually grant permissions. 
- The effective permissions are the logical intersection between what is allowed by the SCP and what is allowed by the IAM and resource-based policies.

>[!important]
>SCPs don't affect users or roles in the management account. They affect only the member accounts in your organization.

