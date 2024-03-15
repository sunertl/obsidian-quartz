---
tags:
  - CS/cloud/aws/security
up:
  - "[[AWS Identity & Access Management (IAM)]]"
related:
  - "[[Threat Detection and Incident Response]]"
  - "[[IAM Role]]"
---
- Invalidate temporary credentials by attaching and explicit deny policy to the affected IAM user with an [[AWS Security Token Service (AWS STS)|STS]] date condition 
- Revoke access for the identity to the linked AD if any
- Check [[CloudTrail Events]] for other unauthorized activity
- Review your AWS resources (e.g., delete unauthorized resources)
- Verify your AWS account information