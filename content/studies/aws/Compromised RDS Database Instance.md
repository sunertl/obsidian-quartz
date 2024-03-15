---
tags:
  - CS/cloud/aws/security
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Threat Detection and Incident Response]]"
  - "[[Amazon RDS]]"
---
- Identify the affected DB instance and DB user [[Amazon GuardDuty]]
- If it is NOT legitimate behavior:
	- restrict network access ([[Security Groups & Network ACL]])
	- restrict DB access for the suspected DB user
- Rotate the suspected DB user's passwords
- Review the DB audit logs to identify key leaked data
- Secure the RDS DB instance, recommended settings:
	- use [[AWS Secrets Manager]] to rotate the DB password
	- Use [[IAM DB Authentication]] to manage DB user's access without passwords