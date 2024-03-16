---
tags:
  - docs
up:
  - "[[AWS Systems Manager]]"
related:
  - "[[Security Logging and Monitoring]]"
---
- simplifies common maintenance and deployment tasks of EC2 instances and other AWS resources
	- i.e.: restart instances, create an AMI, EBS snapshot
- Automation runbook:
	- [[SSM Documents]] of type automation
	- defines actions performed on your EC2 instances or AWS resources
	- Pre-defined run books (AWS) or create custom run books
- Can be triggered
	- manually using AWS console, CLI or SDK
	- by [[Amazon EventBridge]]
	- on a schedule using maintenance windows
	- by [[AWS Config]] for rules remediations

