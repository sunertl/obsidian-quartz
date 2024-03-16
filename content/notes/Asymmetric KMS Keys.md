---
tags:
  - docs
up:
  - "[[AWS Key Management Service (KMS)]]"
  - "[[KMS Keys]]"
related:
  - "[[Data Protection]]"
  - "[[Asymmetric Encryption]]"
---
## Overview

You can create asymmetric KMS keys in AWS KMS. An asymmetric KMS key represents a mathematically related public key and private key pair. The private key never leaves AWS KMS unencrypted. To use the private key, you must call AWS KMS. You can use the public key within AWS KMS by calling the AWS KMS API operations, or you can download the public key and use it outside of AWS KMS. You can also create multi-Region asymmetric KMS keys.

You can create asymmetric KMS keys that represent RSA key pairs or SM2 key pairs (China Regions only) for public key encryption or signing and verification, or elliptic curve key pairs for signing and verification. 