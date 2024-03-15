---
tags:
  - CS/cloud/aws/security
up:
  - "[[AWS Key Management Service (KMS)]]"
related:
  - "[[Data Protection]]"
---
## Overview

- Key that KMS can generate
- Generated using a KMS key using the `GenerateDataKey` operation
	- Generates a data encryption key which can be used to encrypt and decrypt data which is more than 4KB in size
- DEKs are linked to the KMS key which created them
	- KMS can tell that a specific DEK was created using a specific KMS key

>[!Important]
KMS doesn't store the data encryption key in any way!

- It provides it to you or the service using KMS and then it discards it
	- The reason why it discards it is KMS doesn't actually do the encryption or decryption of data using data encryption keys. You do or the service using KMS performs those operations

## How does this work? 

- When a DEK is generated, KMS provides you with two versions of that DEK
	1. Plaintext version of that key - something which can be used immediately to perform cryptographic operations
	2. Ciphertext / encrypted version of that same DEK - the DEK is encrypted using the KMS key that generated it. In the future, this DEK can be given back to KMS for it to be decrypted.
- The architecture is that you would generate a DEK immediately before you wanted to encrypt something.
- You would encrypt the data using the plaintext version of the DEK and once finished with that process, discard the plaintext version of that DEK.
- That would leave you with the encrypted data and you would then store the encrypted DEK along with that encrypted data.

>[!Important]
>- KMS doesn't actually do the encryption or decryption on data larger than 4KB using data encryption keys. You do or the service using KMS does.
>- KMS doesn't track the usage of data encryption keys. That's also you or the service using KMS. 

- To decrypt the data, you pass the encrypted data encryption key back to KMS and ask for it to decrypt it using the same KMS key used to generate it. 
- Then you use the decrypted data encryption key that KMS gives you back and decrypt the data with it and then you discard the decrypted data encryption key.
- Services such as [[Amazon S3|S3]] when using KMS generate a data encryption key for every single object. 
- They encrypt the object and then discard the plaintext version.