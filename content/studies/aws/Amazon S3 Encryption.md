---
tags:
  - CS/cloud/aws/security
up:
  - "[[Amazon S3]]"
related:
  - "[[Data Protection]]"
---
## Overview

For encryption, S3 uses [[AWS Key Management Service (KMS)]] to encrypt S3 objects. 

>[!IMPORTANT]
>Only objects are encrypted, not buckets.

Multiple objects in a bucket can use a different encryption method. S3 is capable of supporting [[S3 Client-Side Encryption|client-side encryption]] and [[S3 Server-Side Encryption|server-side encryption]] - both of these refer to [[Encryption at Rest|encryption at rest]]. 

- They use [[Encryption in Transit|encryption in transit]] when transferring data from the user/application to the S3 Endpoint. **This comes standard with S3!**

## AWS KMS Encrypt and Decrypt

To perform a multipart upload with encryption using an [[AWS Key Management Service (KMS)]], the requester must have permission to the `kms:Decrypt` and `kms:GenerateDataKey` actions on the key. 

>[!Important] Important
>These permissions are required because Amazon S3 must decrypt and read data from the encrypted file parts before it completes the multipart upload.

If your IAM user or role is in the same AWS account as the KMS key, then you must have these permissions on the key policy. If your IAM user or role belongs to a different account than the KMS key, then you must have the permissions on both the key policy and your IAM user or role.