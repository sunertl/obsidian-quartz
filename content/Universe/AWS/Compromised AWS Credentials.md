---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Threat Detection and Incident Response]]"
  - "[[AWS Identity & Access Management (IAM)]]"
---
- Identify the affected [[IAM User]] using [[Amazon GuardDuty]]
- Rotate the exposed AWS credentials
- Invalidate temporary credentials by attaching and explicit deny policy to the affected IAM user with an [[AWS Security Token Service (AWS STS)|STS]] date condition 
- Check [[CloudTrail Events]] for other unauthorized activity
- Review your AWS resources (e.g. delete unauthorized resources)
- Verify your AWS account information