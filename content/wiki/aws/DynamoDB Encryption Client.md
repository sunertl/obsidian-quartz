---
tags:
  - aws/security
up:
  - "[[Amazon DynamoDB]]"
related:
  - "[[Data Protection]]"
  - "[[Encryption]]"
---
## Overview

>[!Definition] Definition
>The Amazon DynamoDB Encryption Client is a software library that helps you protect your table data before you send it to Amazon DynamoDB. Encrypting your sensitive data in transit and at rest helps ensure that your plaintext data isn’t available to any third party, including AWS.

The DynamoDB Encryption Client supports _client-side encryption_, where you encrypt your table data before you send it to DynamoDB. However, DynamoDB provides a server-side _encryption at rest_ feature that transparently encrypts your table when it is persisted to disk and decrypts it when you access the table.

The tools that you choose depend on the sensitivity of your data and the security requirements of your application. You can use both the DynamoDB Encryption Client and encryption at rest. When you send encrypted and signed items to DynamoDB, DynamoDB doesn’t recognize the items as being protected. It just detects typical table items with binary attribute values.

DynamoDB creates and manages the cryptographic keys. The unique key for each table is protected by an [[AWS Key Management Service (KMS)]] key that never leaves AWS KMS unencrypted. By default, DynamoDB uses an AWS owned key in the DynamoDB service account, but you can elect to use an AWS managed key in your account for some or all of your tables.

KMS keys are keys in your AWS account that you create, own, and manage. You have full control over these keys, including establishing and maintaining their key policies, IAM policies, and grants, enabling and disabling them, rotating their cryptographic material, adding tags, creating aliases that refer to the key, and scheduling the keys for deletion.