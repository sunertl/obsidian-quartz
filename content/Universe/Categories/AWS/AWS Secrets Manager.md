---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Threat Detection and Incident Response]]"
  - "[[Data Protection]]"
---
## Overview

>[!definition] Defintion
>AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets throughout their lifecycles.

- Share functionality with parameter store. Sometimes both are appropriate.
- Designed specifically for secrets, passwords, API keys.
- Usable via Console, CLI, API, or SDK (integration)
- Supports the automatic rotation of secrets using [[AWS Lambda]].
- Directly integrates with [[Amazon RDS]] and a limited set of AWS products. If lambda is invoked and changes a secret, the password can automatically change in RDS.
- Secrets are encrypted at rest.
- Integrates with [[AWS Identity & Access Management (IAM)]], can use IAM permissions to control access to secrets. 

Secrets Manager enables you to replace hardcoded credentials in your code, with an API call to Secrets Manager to retrieve the secret programmatically. This helps ensure that the secret will not be compromised by someone examining your code, because the secret simply isn’t there. Also, you can configure Secrets Manager to automatically rotate the secret for you according to a schedule that you specify. This enables you to replace long-term secrets with short-term ones, which helps to significantly reduce the risk of compromise.

## Examples

1.  The Secrets Manager SDK retrieves database credentials.
2.  SDK uses IAM credentials to retrieve the secrets.
3.  Application uses the secrets to access the database.
4.  Periodically, a lambda function is invoked to rotate the secrets.
5.  Lambda uses an execution role to get permissions.

Secrets are secured using [[AWS Key Management Service (KMS)]] so you never risk any leakage via physical access to the AWS hardware and KMS ensures role separation.

You can enable rotation for a secret with credentials for a supported [[Amazon RDS]] database by using the AWS Secrets Manager console, the AWS CLI, or one of the AWS SDKs. Secrets Manager encrypts the protected text of a secret by using the [[AWS Key Management Service (KMS)]].

> [!Important] Important
> Enabling rotation causes the secret to rotate once immediately when you save the secret. Before you enable rotation, be sure you update all of your applications using this secret credentials to retrieve the secret from Secrets Manager. The original credentials might not be usable after the initial rotation. Any applications that you fail to update break as soon as the old credentials become invalid.

