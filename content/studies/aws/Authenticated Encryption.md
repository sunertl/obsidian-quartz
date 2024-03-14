---
created: 2023-12-28
tags:
  - permanent
---
Authenticated encryption uses [[Additional Authenticated Data (AAD)]] to provide confidentiality, data integrity, and authenticity assurances on encrypted data.

For example, the [[AWS Key Management Service (KMS)]] `Encrypt` API and the encryption methods in the AWS Encryption SDK take an [[Encryption Context|encryption context]]that represents additional authenticated data (AAD). The encryption context is cryptographically bound to the encrypted data so that the same encryption context is required to decrypt the data.