---
tags:
  - aws/security
  - aws/storage
up:
  - "[[EBS Snapshots]]"
related:
  - "[[Elastic Block Store (EBS)]]"
  - "[[AWS Key Management Service (KMS)]]"
  - "[[Data Protection]]"
---
## Overview

You can modify the permissions of a snapshot if you want to share it with other AWS accounts. You can share snapshots publicly with all other AWS accounts, or you can share them privately with individual AWS accounts that you specify. Users that you have authorized can use the snapshots that you share to create their own EBS volumes, while your original snapshot remains unaffected.

The following considerations apply to sharing snapshots:

- Snapshots are constrained to the Region in which they were created. To share a snapshot with another Region, copy the snapshot to that Region and then share the copy.
- You can’t share snapshots that are encrypted with the default AWS managed key. You can only share snapshots that are encrypted with a customer managed key.
- You can share only unencrypted snapshots publicly.
- When you share an encrypted snapshot, you must also share the customer managed key used to encrypt the snapshot.

Since you cannot share a snapshot that are encrypted with the default AWS managed key. You can copy the snapshot first. When you copy a snapshot, you can encrypt the copy or you can specify a KMS key that is different than the original, and the resulting copied snapshot uses the new KMS key.

When you share an encrypted snapshot, you must also share the customer managed key used to encrypt the snapshot. You can apply cross-account permissions to a customer managed key either when it is created or at a later time.