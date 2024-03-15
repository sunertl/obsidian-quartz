---
tags:
  - CS/cloud/aws/security
up:
  - "[[AWS Systems Manager]]"
related:
  - "[[Security Logging and Monitoring]]"
---
## Overview


> [!Defintion] Definition
> **AWS Systems Manager Parameter Store** provides secure, hierarchical storage for configuration data management and secrets management. You can store data such as passwords, database strings, and license codes as parameter values. You can store values as plain text or encrypted data. You can then reference values by using the unique name that you specified when you created the parameter. Highly scalable, available, and durable, Parameter Store is backed by the AWS Cloud.

- secure storage for configuration and secrets
- optional seamless encryption using [[AWS Key Management Service (KMS)]]
	- Use `SecureString` parameter to restrict users altering or referencing sensitive data in plain text
	- Use `kms:Decrypt` to decrypt the password in the parameter store
- serverless, scalable, durable, easy SDK
- version tracking of configurations / secrets
- security through [[AWS Identity & Access Management (IAM)|IAM]]
- notifications with [[Amazon EventBridge]]
- integration with [[AWS CloudFormation]]


Parameter Store uses AWS KMS customer master keys (CMKs) to encrypt the parameter values of secure string parameters when you create or change them. It also uses CMKs to decrypt the parameter values when you access them. You can use the AWS managed CMK that Parameter Store creates for your account or specify your own customer-managed CMK. 


> [!Important] Important
> Parameter Store supports only symmetric CMKs. You cannot use an asymmetric CMK to encrypt your parameters.

To perform any operation on a secure string parameter, Parameter Store must be able to use the AWS KMS CMK that you specify for your intended operation. Most of the Parameter Store failures related to CMKs are caused by the following problems:

- **The credentials that an application is using do not have permission to perform the specified action on the CMK**
	- To fix this error, run the application with different credentials or revise the IAM or key policy that is preventing the operation.
- **The CMK is not found**
	- This typically happens when you use an incorrect identifier for the CMK. Find the correct identifiers for the CMK and try the command again.
- **The CMK is not enabled**
	- When this occurs, Parameter Store returns an InvalidKeyId exception with a detailed error message from AWS KMS. If the CMK state is Disabled, enable it. If it is Pending Import, complete the import procedure. If the key state is Pending Deletion, cancel the key deletion, or use a different CMK.

To use a customer-managed CMK instead of the AWS-managed CMK assigned to your account, you must specify the key by using the `--key-id` parameter.

## Benefits and Features

- Use a secure, scalable, hosted secrets management service with no servers to manage.
- Improve your security posture by separating your data from your code.
- Store configuration data and encrypted strings in hierarchies and track versions.
- Control and audit access at granular levels.
- Configure change notifications and trigger automated actions for both parameters and parameter policies.
- Tag parameters individually, and then secure access from different levels, including operational, parameter, Amazon EC2 tag, and path levels.
- Reference AWS Secrets Manager secrets by using Parameter Store parameters.
- Use Parameter Store parameters with other Systems Manager capabilities and AWS services to retrieve secrets and configuration data from a central store.

## Store Hierarchy

![[Pasted image 20231019165925.png]]

## Standard and Advanced Parameter Tiers

![[Pasted image 20231019165948.png]]

## Parameter Policies

- Allow to assign a TTL to a parameter (expiration date) to force updating or deleting sensitive data such as passwords
- can assign multiple policies at a time
