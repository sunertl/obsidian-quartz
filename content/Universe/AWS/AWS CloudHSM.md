---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Data Protection]]"
  - "[[AWS Key Management Service (KMS)]]"
---
# Overview

>[!Defintion] Defintion
>**AWS CloudHSM** is a cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on the AWS Cloud. With CloudHSM, you can manage your own encryption keys using FIPS 140-2 Level 3 validated HSMs. CloudHSM offers you the flexibility to integrate with your applications using industry-standard APIs, such as PKCS#11, Java Cryptography Extensions (JCE), and Microsoft CryptoNG (CNG) libraries.

CloudHSM is standards-compliant and enables you to export all of your keys to most other commercially-available HSMs, subject to your configurations. It is a fully-managed service that automates time-consuming administrative tasks for you, such as hardware provisioning, software patching, high availability, and backups. CloudHSM also enables you to scale quickly by adding and removing HSM capacity on-demand, with no up-front costs.

[[AWS Key Management Service (KMS)]] is the key management service within AWS. It is used for encryption within AWS and it integrates with other AWS products. Can generate keys, manage keys, and can integrate for encryption. **The problem is this is a shared service.** You're using a service which other accounts within AWS also use. Although the permissions are strict, AWS still does manage the hardware for KMS. KMS is a **Hardware Security Module** or HSM. These are industry standard pieces of hardware which are designed to manage keys and perform cryptographic operations.

You can run your own HSM on premise. **Cloud HSM is a true "single tenant" hardware security module (HSM)** that's hosted within the AWS cloud. AWS provisions the HW, but it is impossible for them to help. There is no way to recover data from them if access is lost.

>[!Important] Important
>[[AWS Key Management Service (KMS)]] is a shared service. CloudHSM is a true single tenant hardware security module.

Fully FIPS 140-2 Level 3 (KMS is L2 overall, but some is L3) IF you require level 3 overall, you MUST use CloudHSM.

KSM all actions are performed with AWS CLI and IAM roles.

HSM will not integrate with AWS by design and uses industry standard APIs.

-   **PKCS#11**
-   **Java Cryptography Extensions (JCE)**
-   **Microsoft CryptoNG (CNG) libraries**

KMS can use CloudHSM as a **custom key store**, CloudHSM integrates with KMS.

HSM is not highly available and runs within one AZ. To be HA, you need at least two HSM devices and one in each AZ you use. Once HSM is in a cluster, they replicate all policies in sync automatically.

HSM needs an endpoint in the subnet of the VPC to allow resources access to the cluster.

AWS has no access to the HSM appliances which store the keys.

# Use Cases

- No native AWS integration with AWS products. You can't use S3 SSE with CloudHSM.
- Can offload the SSL/TLS processing from web servers. CloudHSM is much more efficient to do these encryption processes.
- Oracle Databases can use CloudHSM to enable **transparent data encryption (TDE)**
- Can protect the private keys an issuing certificate authority.
- Anything that needs to interact with non AWS products.
