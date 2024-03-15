---
tags:
  - CS/cloud/aws/security
up:
  - "[[AWS Key Management Service (KMS)]]"
related:
  - "[[Key Policy]]"
  - "[[Data Protection]]"
---
## Overview

A grant is a policy instrument that allows [[Principal|AWS principals]] to use AWS KMS keys in cryptographic operations. It also can let them view a [[KMS Keys|KMS key]] (`DescribeKey`) and create and manage grants. When authorizing access to a [[KMS Keys|KMS key]], grants are considered along with [[Key Policy|key policies]] and [[IAM Policy|IAM policies]]. Grants are often used for temporary permissions because you can create one, use its permissions, and delete it without changing your key policies or IAM policies. Because grants can be very specific, and are easy to create and revoke, they are often used to provide temporary permissions or more granular permissions.

You can also use key policies to allow other principals to access a CMK, but key policies work best for relatively static permission assignments. Also, key policies use the standard permissions model for AWS policies in which users either have or do not have permission to perform an action with a resource. For example, users with the `kms:PutKeyPolicy` permission for a CMK can completely replace the key policy for a CMK with a different key policy of their choice. To enable more granular permissions management, use grants.

You can specify conditions in the key policies and AWS Identity and Access Management policies ([[IAM Policy|IAM policies]]) that control access to AWS KMS resources. The policy statement is effective only when the conditions are true. For example, you might want a policy statement to take effect only after a specific date. Or, you might want a policy statement to control access only when a specific value appears in an API request.