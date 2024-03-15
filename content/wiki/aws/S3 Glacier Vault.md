---
tags:
  - aws/security
up:
  - "[[S3 Glacier Flexible Retrieval]]"
related:
  - "[[Data Protection]]"
---
## Overview

- A vault is a container for storing your data archives
- Base unit of storage in S3 Glacier, containing a unique ID and an optional description
- Can only be created in the Amazon S3 Glacier console
- You must provide the vault name and its corresponding AWS Region
- Use a Vault Lock to ensure data integrity and access control to your Amazon S3 Glacier Vaults
- A Vault Lock is an access policy that helps you enforce regulatory and compliance requirements
- You can specify a “Write Once Read Many” (WORM) control to lock your Glacier vault policy from future edits
- A Glacier vault access policy can no longer be changed when the vault lock process has been completed after 24 hours

## Vault Lock Policy

>[!Definition] Definition
>S3 Glacier Vault Lock helps you to easily deploy and enforce compliance controls for individual S3 Glacier vaults with a Vault Lock policy. You can specify controls such as "write once read many" (WORM) in a Vault Lock policy and lock the policy from future edits.

>[!important] Important
>After a Vault Lock policy is locked, the policy can no longer be changed or deleted.


S3 Glacier enforces the controls set in the Vault Lock policy to help achieve your compliance objectives. For example, you can use Vault Lock policies to enforce data retention. You can deploy a variety of compliance controls in a Vault Lock policy by using the AWS Identity and Access Management (IAM) policy language. For more information about Vault Lock policies, see Vault Lock Policies.

A Vault Lock policy is different from a vault access policy. Both policies govern access controls to your vault. However, a Vault Lock policy can be locked to prevent future changes, which provides strong enforcement for your compliance controls. You can use the Vault Lock policy to deploy regulatory and compliance controls, which typically require tight controls on data access. 

>[!important] Important
>We recommend that you first create a vault, complete a Vault Lock policy, and then upload your archives to the vault so that the policy will be applied to them.

In contrast, you use a vault access policy to implement access controls that are not compliance related, temporary, and subject to frequent modification. You can use Vault lock and vault access policies together. For example, you can implement time-based data-retention rules in the Vault Lock policy (deny deletes), and grant read access to designated third parties or your business partners (allow reads) in your vault access policy.

## Locking a Vault

1. Initiate the lock by attaching a Vault Lock policy to your vault, which sets the lock to an in-progress state and returns a lock ID. While the policy is in the in-progress state, you have 24 hours to validate your Vault Lock policy before the lock ID expires. To prevent your vault from exiting the in-progress state, you must complete the Vault Lock process within these 24 hours. Otherwise, your Vault Lock policy will be deleted.
2. Use the lock ID to complete the lock process. If the Vault Lock policy doesn't work as expected, you can stop the Vault Lock process and restart from the beginning. 
	1. Use the `abort-vault-lock` operation, fix the policy and call the `initiate-vault-lock` operation again when it's within the 24hrs.

