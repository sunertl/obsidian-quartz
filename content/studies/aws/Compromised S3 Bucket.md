---
tags:
  - CS/cloud/aws/security
up: "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Threat Detection and Incident Response]]"
  - "[[Amazon S3]]"
---
- Identify the compromised S3 bucket using GuardDuty
- Identify the source of the malicious activity (e.g., IAM user, role) and the API calls using CloudTrail or Amazon Detective
- Identify whether the source was authorized to make those API calls
- Secure your S3 bucket, recommended settings:
	- S3 Block Public Access Settings
	- S3 Bucket Policies and User Policies
	- VPC Endpoints for S3
	- S3 Presigned URLs
	- S3 Access Points
	- S3 ACLs