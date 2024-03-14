---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Systems Manager]]"
related:
  - "[[Security Logging and Monitoring]]"
---
- allows you to start a secure shell on your EC2 and on prem
- access through AWS console, CLI or session manager SDK
- Does not need SSH access, bastion hosts, or SSH keys
- supports Linux, macOS and Windows
- log connections to your instances and executed commands
- session log data can be sent to S3 or CloudWatch logs
- CloudTrail can intercept StartSession events

- IAM Permissions
	- Control which users/groups can access Session Manager and which instances
	- Use tags to restrict access to only specific EC2 instances
	- Access SSM + write to S3 + write to CloudWatch
- Optionally, you can restrict commands a user can run in a session


## SSH vs. SSM Session Manager


![[Pasted image 20231019173153.png]]
