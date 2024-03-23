---
tags:
  - docs
up:
  - "[[KMS Keys]]"
  - "[[AWS Key Management Service (KMS)]]"
related:
  - "[[Data Protection]]"
---
## Overview

When automatic key rotation for a [[KMS Keys|KMS key]] is enabled, [[AWS Key Management Service (KMS)|KMS]] generates new cryptographic material for the [[KMS Keys|KMS key]] every year. [[AWS Key Management Service (KMS)|KMS]] saves all previous versions of the cryptographic material in perpetuity so you can decrypt any data encrypted with that [[KMS Keys|KMS key]]. AWS KMS does not delete any rotated key material until you delete the [[KMS Keys|KMS key]]. The rotation of key material for the KMS keys can be tracked in [[Amazon CloudWatch|CloudWatch]] and [[AWS CloudTrail|CloudTrail]].

When you use a rotated [[KMS Keys|KMS key]] to encrypt data, AWS KMS uses the current key material. When you use the rotated [[KMS Keys|KMS key]] to decrypt ciphertext, AWS KMS uses the version of the key material that was used to encrypt it. You cannot request a particular version of the key material. Because AWS KMS transparently decrypts with the appropriate key material, you can safely use a rotated KMS key in applications and AWS services without code changes.

However, automatic key rotation has no effect on the data that the [[KMS Keys|KMS key]] protects. It does not rotate the data keys that the KMS key generated or re-encrypt any data protected by the KMS key, and it will not mitigate the effect of a compromised data key.

AWS KMS supports automatic key rotation only for symmetric encryption [[KMS Keys|KMS key]] with key material that AWS KMS creates. Automatic rotation is optional for customer managed [[KMS Keys|KMS key]] AWS KMS always rotates the key material for AWS managed KMS keys every year. Rotation of AWS owned [[KMS Keys|KMS key]] varies.

Key rotation changes only the key material, which is the cryptographic secret that is used in encryption operations. The KMS key is the same logical resource, regardless of whether or how many times its key material changes. The properties of the KMS key do not change, as shown in the following image.


## Manual Key Rotation

You might decide to create a new KMS key and use it in place of the original KMS key. This has the same effect as rotating the key material in an existing KMS key, so it’s often thought of as manually rotating the key. Manual rotation is a good choice when you want to control the key rotation schedule. It also provides a way to rotate KMS keys that are not eligible for automatic key rotation, including asymmetric KMS keys, KMS keys in custom key stores, and KMS keys with key material from an imported key.

Because the new KMS key is a different resource from the current KMS key, it has a different key ID and ARN. When you change KMS keys, you need to update references to the KMS key ID or ARN in your applications. Aliases, which associate a friendly name with a KMS key, make this process easier. Use an alias to refer to a KMS key in your applications. Then, when you want to change the KMS key that the application uses, change the target KMS key of the alias.

The alias ARN is the Amazon Resource Name (ARN) of an AWS KMS alias. It is a unique, fully qualified identifier for the alias and the KMS key it represents. At any given time, an alias ARN identifies one particular KMS key. However, because you can change the KMS key associated with the alias, the alias ARN can identify different KMS keys at different times

## Benefits of Automatic Key Rotation

- The properties of the KMS key, including its key ID, key ARN, region, policies, and permissions, do not change when the key is rotated.
- You do not need to change applications or aliases that refer to the key ID or key ARN of the KMS key.
- Rotating key material does not affect the use of the KMS key in any AWS service.
- After you enable key rotation, AWS KMS rotates the KMS key automatically every year. You don't need to remember or schedule the update.

## Why Rotate KMS keys?

Cryptographic best practices discourage extensive reuse of keys that encrypt data directly, such as the data keys that AWS KMS generates. When 256-bit data keys encrypt millions of messages they can become exhausted and begin to produce ciphertext with subtle patterns that clever actors can exploit to discover the bits in the key. To avoid this key exhaustion, it's best to use data keys once, or just a few times, which effectively rotates the key material.

However, KMS keys are most often used as wrapping keys, also known as key-encryption keys. Instead of encrypting data, wrapping keys encrypt the data keys that encrypt your data. As such, they are used far less often than data keys, and are almost never reused enough to risk key exhaustion.

Despite this very low exhaustion risk, you might be required to rotate your KMS keys due to business or contract rules or government regulations. When you are compelled to rotate KMS keys, we recommend that you use automatic key rotation where it is supported, and manual key rotation when automatic key rotation is not supported.

## How automatic key rotation works

Key rotation in AWS KMS is a designed to be transparent and easy to use. AWS KMS supports optional automatic key rotation only for [[Customer Managed Keys|customer managed keys]].

### Managing key material

AWS KMS retains all key material for a KMS key, even if key rotation is disabled. AWS KMS deletes key material only when you delete the KMS key.

### Using key material

When you use a rotated KMS key to encrypt data, AWS KMS uses the current key material. When you use the rotated KMS key to decrypt ciphertext, AWS KMS uses the same version of the key material that was used to encrypt it. You cannot request a particular version of the key material.

### Rotation date

AWS KMS rotates key material one year (approximately 365 days) after rotation is enabled, and then every year (approximately 365 days) thereafter.

### Customer managed keys

Because automatic key rotation is optional on [[Customer Managed Keys|customer managed keys]] and can be enabled and disabled at any time, the rotation date depends on the date that rotation was most recently enabled. That date can change many times over the life of the key.

For example, if you create a customer managed key on January 1, 2022, and enable automatic key rotation on March 15, 2022, AWS KMS rotates the key material on March 15, 2023, March 15, 2024, and every 365 days thereafter.

The following are special cases:

- Disable key rotation — If you disable automatic key rotation at any point, the KMS key continues to use the version of the key material it was using when rotation was disabled. If you enable automatic key rotation again, AWS KMS rotates the key material one year after the new rotation-enable date and every year (approximately 365 days) thereafter.
- Disabled KMS keys — While a KMS key is disabled, AWS KMS does not rotate it. However, the key rotation status does not change, and you cannot change it while the KMS key is disabled. When the KMS key is re-enabled, if the key material is more than one year old, AWS KMS rotates it immediately and every year thereafter. If the key material is less than one year old, AWS KMS resumes the original key rotation schedule.
- KMS keys pending deletion — While a KMS key is pending deletion, AWS KMS does not rotate it. The key rotation status is set to `false` and you cannot change it while deletion is pending. If deletion is canceled, the previous key rotation status is restored. If the key material is more than one year old, AWS KMS rotates it immediately and every year (approximately 365 days from the last rotation) thereafter. If the key material is less than one year old, AWS KMS resumes the original key rotation schedule.

### AWS managed keys

AWS KMS automatically rotates AWS managed keys every year (approximately 365 days). You cannot enable or disable key rotation for [[AWS Managed Keys|AWS managed keys]]

The key material for an AWS managed key is first rotated one year after its creation date, and every year (approximately 365 days from the last rotation) thereafter.


### AWS owned keys

You cannot enable or disable key rotation for AWS owned keys. The key rotation strategy for an AWS owned key is determined by the AWS service that creates and manages the key. For details, see the _Encryption at Rest_ topic in the user guide or developer guide for the service.


### Supported KMS Key Types

Automatic key rotation is supported only on [[Symmetric Encryption KMS Keys|symmetric encryption KMS keys]] with key material that AWS KMS generates (Origin = AWS_KMS).


>[!Important] Important
> Automatic key rotation is not supported on the following types of KMS keys, but you can rotate these keys manually. 
> 1. [[Asymmetric KMS Keys|Asymmetric KMS keys]]
> 2. HMAC KMS keys
> 3. KMS keys in custom key stores  
> 4. KMS keys that have imported key material