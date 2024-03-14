---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Management & Governance]]"
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Security Logging and Monitoring]]"
---
To help with compliance requirements, AWS provides many service-specific security and audit logs:
- [[AWS CloudTrail]] trails - trace all API calls
- [[AWS Config]] rules - for config & compliance over time
- [[Amazon CloudWatch#CloudWatch Logs|CloudWatch Logs]] - for full data retention
- [[VPC Flow Logs]] - IP traffic within your VPC
- [[Elastic Load Balancer (ELB)#Logging & Monitoring|ELB Access Logs]] - metadata of requests made to your load balancers
- [[Amazon CloudFront]] logs - web distribution access logs
- [[AWS Web Application Firewall (WAF)]] logs - full logging of all requests analyzed by the service

- Logs can be analyzed using [[Amazon Athena]] if they're stored in S3
- Logs should be encrypted in S3 - using [[IAM Policy|IAM]] & [[Bucket Policy|bucket policies]], MFA
- Move logs to [[Amazon S3#Storage Classes|Glacier]] for cost savings

