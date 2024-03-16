---
tags:
  - aws/security
up:
  - "[[AWS Key Management Service (KMS)]]"
related:
  - "[[Data Protection]]"
---
## Overview


> [!Defintion] Definition
> A key policy is a resource policy for an AWS KMS key. Key policies are the primary way to control access to [[KMS Keys]].

Every KMS key must have exactly one key policy. **The statements in the key policy determine who has permission to use the KMS key and how they can use it**. You can also use [[IAM Policy|IAM policies]] and grants to control access to the KMS key, but every KMS key must have a key policy.

No [[Principal|AWS principal]], including the account root user or key creator, has any permissions to a [[KMS Keys|KMS key]] unless they are explicitly allowed, and never denied, in a key policy, [[IAM Policy]], or [[KMS Grant|grant]].

Unless the key policy explicitly allows it, you cannot use IAM policies to allow access to a KMS key. Without permission from the key policy, IAM policies that allow permissions have no effect. (You can use an IAM policy to deny a permission to a KMS key without permission from a key policy.) The default key policy enables IAM policies. To enable IAM policies in your key policy, add the policy statement described in Allows access to the AWS account and enables IAM policies.

Unlike IAM policies, which are global, key policies are Regional. A key policy controls access only to a KMS key in the same Region. It has no effect on KMS keys in other Regions.

## Example

```
{
 "Sid": "Enable IAM User Permissions",
 "Effect": "Allow",
 "Principal": {"AWS": "arn:aws:iam::111122223333:root"},
 "Action": "kms:*",
 "Resource": "*"
}
```

In this example, the Effect and Principal elements don’t refer to the AWS root user account. The Amazon Resource Names (ARN) allows permissions to the KMS key with this IAM policy. This means that any principal in the AWS account 111122223333 is eligible to manage the KMS key as long as they have the necessary KMS permissions. If an IAM user/role lacks the permission they need to access the KMS key, their request would still be denied.