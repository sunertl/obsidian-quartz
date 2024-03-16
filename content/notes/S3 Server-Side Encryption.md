---
tags:
  - aws/security
up:
  - "[[Amazon S3]]"
related:
  - "[[Data Protection]]"
  - "[[Encryption]]"
---
## Overview

Although data is [[Encryption in Transit|encryption in transit]] using HTTPs, the [[S3 Object|object]] is not initially encrypted, meaning that inside the tunnel the data is in its original form. Data reaches S3 servers i.e. in plain text form.

Once data hits [[Amazon S3]] it's encrypted - which means that you allow S3 to handle some or all of the encryption processes. ^f0f930

With [[S3 Client-Side Encryption]] you control everything and you own the risk.

There are three server-side encryption methods for S3 objects available: 

## Server-Side Encryption with Customer-Provided Keys (SSE-C)

- Customer is responsible for the keys themselves.
- S3 services manages the actual encryption and decryption
    - Offloads CPU requirements for encryption.
- Customer still needs to generate and manage the key.
- S3 will see the unencrypted object throughout this process.

### SSE-C Encryption Steps

1.  When placing an object in S3, you provide encryption key and plaintext object
2.  Once the key and object arrive, it is encrypted.
3.  A hash of the key is taken and attached to the object. The hash can identify if the specific key was used to encrypt the object.
4.  The key is then discarded after the hash is taken.
5.  The encrypted and one-way hash are stored persistently on storage.

To decrypt the object, you must tell S3 which object to decrypt and provide it with the key used to encrypt it. If the key that you supply is correct, the proper hash, S3 will decrypt the object, discard the key, and return the plaintext version of the object.

## Server-Side Encryption with Amazon S3 Managed Keys (SSE-S3 AE256)

WS handles both the encryption and decryption process as well as the key generation and management. This provides very little control over how the keys are used, but has little admin overhead.

### SSE-S3 Encryption Steps

1.  When putting data into S3, only need to provide plaintext.
2.  S3 generates fully managed and rotated **master key** automatically.
3.  Object generates a key specific for each object that is uploaded.
4.  The master key is used to encrypt the specific object key, and the unencrypted version of that key is discarded.
5.  The encrypted file and encrypted key are stored side by side in S3.

### Problems

-   Not good for regulatory environment where keys and access must be controlled.
-   No way to control key material rotation.
-   No role separation. A full S3 admin can decrypt data and open objects.

## Server-Side Encryption with KMS Keys stored in AWS KMS

Much like SSE-S3, where AWS handles both the keys and encryption process. [[AWS Key Management Service (KMS)]] handles the master key and not S3. The first time an object is uploaded, S3 works with KMS to create an [[KMS Keys|KMS key]]. This is the default key which gets used in the future.

Every time an object is uploaded, S3 uses a dedicated key to encrypt that object and that key is a data encryption key which KMS generates using the [[KMS Keys|KMS key]]. The key does not need to be managed by AWS and can be a [[KMS Keys|KMS key]].

[[S3 Bucket Keys]]
### Server-Side Encryption with AWS KMS-managed keys (SSE-KMS) for CloudTrail Logs

By default, the log files delivered by [[AWS CloudTrail]] to your bucket are encrypted by Amazon server-side encryption with Amazon S3-managed encryption keys (SSE-S3). To provide a security layer that is directly manageable, you can instead use server-side encryption with AWS KMS–managed keys (SSE-KMS) for your CloudTrail log files. Take note that enabling server-side encryption encrypts the log files but not the digest files with SSE-KMS. Digest files are encrypted with Amazon S3-managed encryption keys (SSE-S3).

To use SSE-KMS with CloudTrail, you create and manage a KMS key, also known as a customer master key (CMK). You attach a policy to the key that determines which users can use the key for encrypting and decrypting CloudTrail log files. The decryption is seamless through S3. When authorized users of the key read CloudTrail log files, S3 manages the decryption, and the authorized users are able to read log files in unencrypted form.

### Advantages

- You can create and manage the CMK encryption keys yourself.
- You can use a single CMK to encrypt and decrypt log files for multiple accounts across all regions.
- You have control over who can use your key for encrypting and decrypting CloudTrail log files. You can assign permissions for the key to the users in your organization according to your requirements.
- You have enhanced security. With this feature, in order to read log files, the following permissions are required:
	- A user must have S3 read permissions for the bucket that contains the log files.
	- A user must also have a policy or role applied that allows decrypt permissions by the CMK policy.
	- Because S3 automatically decrypts the log files for requests from users authorized to use the CMK, SSE-KMS encryption for CloudTrail log files is backward-compatible with applications that read CloudTrail log data.

The CMK that you choose must be created in the same AWS Region as the Amazon S3 bucket that receives your log files. For example, if the log files will be stored in a bucket in the US East (Ohio) Region, you must create or choose a CMK that was created in that Region. To verify the Region for an Amazon S3 bucket, inspect its properties in the Amazon S3 console.