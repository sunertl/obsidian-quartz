---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Security Logging and Monitoring]]"
---
## Overview

>[!definition]
>**Amazon Macie** is an ML-powered security service that helps you prevent data loss by automatically discovering, classifying, and protecting sensitive data stored in [[Amazon S3]]. Amazon Macie uses machine learning to recognize sensitive data such as personally identifiable information (PII) or intellectual property, assigns a business value, and provides visibility into where this data is stored and how it is being used in your organization.

## Data Identifiers

- Used to analyze and identify sensitive data in your [[S3 Bucket|S3 buckets]]
- Managed Data Identifier
	- A set of built-in criteria that are designed to detect specific type of sensitive data

> [!Example] Examples
> - Credit cards numbers, AWS credentials, bank accounts

- Custom Data Identifier
	- A set of criteria that you define to detect sensitive data
	- Regular expression, keywords, proximity rule

> [!Example] Examples
> - employee IDs, customer account numbers

- You can use `Allow Lists` to define a text pattern to ignore (e.g., public phone numbers)

## Findings

- A report of a potential issue or sensitive data that Macie found
- Each finding has a severity rating, affected resource, date, time, etc.
- Sensitive Data Discovery Result
	- A record that logs details about the analysis of an [[Amazon S3#Objects|S3 object]]
	- Configure Macie to store the results in [[Amazon S3|S3]], then query using [[Amazon Athena|Athena]]
- Suppression rules - set of attribute-based filter criteria to archive findings automatically
- Findings are stored for 90 days
- Review findings using AWS console, [[Amazon EventBridge|EventBridge]], [[AWS Security Hub|Security Hub]]

### Finding Types

#### Policy Findings
- A detailed report of policy violation or issue with the security of [[S3 Bucket]]
- Examples: default encryption is disabled, bucket is public, etc.
- Policy: IAMUser/S3BucketEncryptionDisabled, Policy:IAMUser/S3BucketPublic
- Detect changes only after you enable Macie

#### Sensitive Data Findings
- A detailed report of sensitive data that's found in [[S3 Bucket|S3 buckets]]
- Examples: credentials (private keys), financial (CC numbers), etc.
- SensitiveData:S3Object/Credentials, SensitiveData:S3Object/Financial
- For Custom Data Identifier SensitiveData:S3Object/CustomIdentifier

## Multi-Account Strategy

- You can manage multiple accounts in Macie
- Associate the member accounts with the administrator account
	- Through an [[AWS Organizations|AWS organization]]
	- Sending invitation through Macie
	- Supports Delegated Administrator in an [[AWS Organizations|AWS organization]]
- Administrator account can:
	- Add and remove member accounts
	- Have access to all [[Amazon S3|S3]] sensitive data and settings for all accounts
	- Manage Automated Sensitive Data Discovery and run Data Discovery jobs
	- Manage Data Identifiers and Findings