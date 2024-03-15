---
tags:
  - CS/cloud/aws/security
up:
  - "[[AWS Key Management Service (KMS)]]"
related:
  - "[[Authenticated Encryption]]"
---
## Overview

All AWS KMS cryptographic operations with symmetric encryption KMS keys accept an encryption context, an optional set of non-secret key–value pairs that can contain additional contextual information about the data. AWS KMS uses the encryption context as additional authenticated data (AAD) to support [[Authenticated Encryption|authenticated encryption]].

When you include an encryption context in an encryption request, it is cryptographically bound to the ciphertext such that the same encryption context is required to decrypt (or decrypt and re-encrypt) the data. If the encryption context provided in the decryption request is not an exact, case-sensitive match, the decrypt request fails. Only the order of the key-value pairs in the encryption context can vary.


> [!Note] Note
> You cannot specify an encryption context in a cryptographic operation with an asymmetric KMS key or an HMAC KMS key. Asymmetric algorithms and MAC algorithms do not support an encryption context.

The encryption context is not secret and not encrypted. It appears in plaintext in [[AWS CloudTrail#CloudTrail Events Logs|CloudTrail Logs]] so you can use it to identify and categorize your cryptographic operations. Your encryption context should not include sensitive information. We recommend that your encryption context describe the data being encrypted or decrypted. For example, when you encrypt a file, you might use part of the file path as encryption context.

```
"encryptionContext": {
    "department": "10103.0"
}    
```

For example, when encrypting volumes and snapshots created with the [[Elastic Block Store (EBS)]] `CreateSnapshot` operation, Amazon EBS uses the volume ID as encryption context value.

```
"encryptionContext": {
  "aws:ebs:id": "vol-abcde12345abc1234"
}
```

You can also use the encryption context to refine or limit access to AWS KMS keys in your account. You can use the encryption context as a constraint in [[KMS Grant|grants]] and as a condition in policy statements.