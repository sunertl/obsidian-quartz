---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Encryption]]"
  - "[[Data Protection]]"
---
## Overview

>[!Definition] Definition
>AWS Key Management Service (AWS KMS) makes it easy for you to create and manage [[Cryptographic Keys]] and control their use across a wide range of AWS services and in your applications (encryption and decryption, i.e.). AWS KMS is a secure and resilient service that uses hardware security modules that have been validated under FIPS 140-2 (L2), or are in the process of being validated, to protect your keys.


>[!Important]
>[[Cryptographic Keys]] never leave the product. KMS is designed to securely store the keys.

- [[Regional Service]]
	- KMS is isolated in a region
- Public service
	- KMS is occupying the AWS public zones

## Key Concepts

- [[KMS Keys]] are stored within the KMS service in that specific region.
	- They never leave the region and they never leave the KMS service
	- You cannot extract a KMS key
	- Any interaction with a KMS key are done using the APIs available from KMS
- KMS supports multi-region keys where keys are replicated to other AWS regions
- Within KMS, keys are either AWS owned or customer owned (we are mostly dealing with customer owned keys)
	- AWS owned keys are a collection of KMS keys that an AWS service owns and manages for use in multiple AWS accounts.
	- When dealing with customer owned keys, there are two types: AWS managed and customer managed
		- AWS managed keys are automatically created by AWS when you use a service such as [[Amazon S3|S3]] which integrates with KMS.
		- Customer managed keys are created explicitly by the customer to use directly in an application or within an AWS service.
			- Customer managed keys are more configurable (i.e., you can edit the key policy -> allows cross-account access for example)
		- Both type of keys support [[KMS Key Rotation|rotation]]
			- With AWS managed keys, this can't be disabled. It's set to rotate ~once per year
			- With customer managed keys, rotation is optional, it's enabled by default and happens ~once per year
- KMS key contains the backing key, the physical key material and all previous backing keys caused by rotation. As a key is rotated, data encrypted with old versions can still be decrypted. 
- [[Envelope Encryption|Envelope encryption]]
- [[Encryption Context]]

## Key Policies and Security

- The starting point for KMS security is the [[Key Policy|key policy]]
	- Type of [[Resource-Based Policy|resource policy]] - like a [[Bucket Policy|bucket policy]], only on a key
	- Every KMS key has one, and for customer managed keys, you can change it
	- The reason the key policy is so important is that unlike other AWS services, KMS has to explicitly be told that keys trust the AWS account that they're contained within
	- Need to update key policy if you want to be able to grant access to a key using [[Identity-Based Policy|identity policies]]
		- Without it, the key doesn't trust the AWS account 
- KMS is managed using this combination of key policies, trusting the account, and then using [[Identity-Based Policy|identity policies]] to let [[IAM User|IAM users]] interact with the key.
	- In high security environments, you might want to remove this account trust and insist on any key permissions being added inside the key policy


## Key Material Origin

>[!Definition] Definition
>Key material origin is a KMS key property that identifies the source of its key material. You choose the key material origin when you create a KMS key, and you cannot change it.

