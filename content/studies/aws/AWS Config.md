---
tags:
  - CS/cloud/aws/security
up:
  - "[[AWS Management & Governance]]"
related:
  - "[[Management and Security Governance]]"
  - "[[Threat Detection and Incident Response]]"
---
# Overview

>[!Definition]
>**AWS Config** is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.


With Config, you can review changes in configurations and relationships between AWS resources, dive into detailed resource configuration histories, and determine your overall compliance against the configurations specified in your internal guidelines. This enables you to simplify compliance auditing, security analysis, change management, and operational troubleshooting.

You can use AWS Config to evaluate the configuration settings of your AWS resources. By creating an AWS Config rule, you can enforce your ideal configuration in your AWS account. It also checks if the applied configuration in your resources violates any of the conditions in your rules. The AWS Config dashboard shows the compliance status of your rules and resources. You can verify if your resources comply with your desired configurations and learn which specific resources are noncompliant.

AWS Config can take remediation actions against non-compliant resources using [[SSM Automation|Systems Manager automation documents]]. You can use one of the prebuilt automation documents provided by AWS Config or write your own. An SSM automation document can be associated with a Config rule to take corrective actions automatically when a resource is evaluated as non-compliant. However, you may run the SSM automation document manually as well.

## Config Rules

### AWS Managed Rules

These are rules that are defined and maintained by AWS. They require minimal to no configuration. You can use this to evaluate common security concerns such as:

- Do all of my security groups in use allow unrestricted incoming SSH traﬃc?
- Is the account password policy for IAM users secure enough to meet the specified requirements?
- Are all EBS volumes that are in an attached state encrypted?


> [!Important] Important
> You can configure AWS Config Multi-Account Multi-Region Data Aggregator to review configurations of your secrets across all accounts and regions in your organization, and then review your secret configurations and compare to secrets management best practices. You must enable AWS Config and the AWS Config managed rules specific to secrets across all accounts and regions before you create an aggregator

### Custom Rules

If you want to check compliance against your company’s internal security rules that are not readily defined in AWS, you can use Custom Rules. Custom rules are [[AWS Lambda#Lambda Functions|Lambda functions]] that you create and maintain yourself. The Lambda function should contain the logic that will determine whether a resource is compliant or non-compliant.

