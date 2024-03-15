---
tags:
  - CS/cloud/aws/security
up:
  - "[[AWS Systems Manager]]"
related:
  - "[[Security Logging and Monitoring]]"
---
- Automate the process of keeping your managed intances (EC2/on-prem) in a state that you define
- use cases: bootstrap instances with software, patch OS/software updates on a schedule
- State manager association:
	- defines the state that you want to maintain to your managed instances
	- example: port 22 must be closed, antivirus must be installed
	- specify a schedule when this configuration is applied
- Uses [[SSM Documents]] to create an association (e.g. SSM Document to configure CW agent)

