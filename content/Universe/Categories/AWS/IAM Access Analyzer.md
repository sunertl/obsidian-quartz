---
tags:
  - compsci/cloud/aws/security
up: "[[AWS Identity & Access Management (IAM)]]"
related:
  - "[[Threat Detection and Incident Response]]"
---
- Find out which resources are shared externally
	- S3 buckets
	- IAM roles
	- KMS keys
	- Lambda functions and layers
	- SQS queues
	- Secrets Manager secrets
- Define Zone of Trust = AWS account or AWS organization
- Access outside zone of trusts => findings

### IAM Access Analyzer Policy Validation

- validates your policy against IAM policy grammar and best practices
- general warnings, security warnings, errors, suggestions
- provides actionable recommendations

### IAM Access Analyzer Policy Generation

- generates IAM policy based on access activity
- CloudTrail logs is reviewed to generate the policy with the fine-grained permissions and the appropriate actions and services
- Reviews CloudTrail logs for up to 90 days