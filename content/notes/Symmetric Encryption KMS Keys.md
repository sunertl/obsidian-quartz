---
tags:
  - aws/security
up:
  - "[[AWS Key Management Service (KMS)]]"
related:
  - "[[Asymmetric KMS Keys]]"
  - "[[KMS Keys]]"
  - "[[Symmetric Encryption]]"
---
## Overview

When you create an AWS KMS key, by default, you get a KMS key for symmetric encryption. This is the basic and most commonly used type of KMS key.

In AWS KMS, a symmetric encryption KMS key represents a 256-bit AES-GCM encryption key, except in China Regions, where it represents a 128-bit SM4 encryption key. Symmetric key material never leaves AWS KMS unencrypted. To use a symmetric encryption KMS key, you must call AWS KMS. Symmetric encryption keys are used in symmetric encryption, where the same key is used for encryption and decryption. Unless your task explicitly requires asymmetric encryption, symmetric encryption KMS keys, which never leave AWS KMS unencrypted, are a good choice.

AWS services that are integrated with AWS KMS use only symmetric encryption KMS keys to encrypt your data. These services do not support encryption with asymmetric KMS keys. For help determining whether a KMS key is symmetric or asymmetric.

Technically, the key spec for a symmetric key is `SYMMETRIC_DEFAULT`, the key usage is `ENCRYPT_DECRYPT`, and the encryption algorithm is `SYMMETRIC_DEFAULT`. 

You can use a symmetric encryption KMS key in AWS KMS to encrypt, decrypt, and re-encrypt data, and generate data keys and data key pairs. You can create multi-Region symmetric encryption KMS keys, import your own key material into a symmetric encryption KMS key, and create symmetric encryption KMS keys in custom key stores. 
