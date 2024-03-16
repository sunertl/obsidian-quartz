---
tags:
  - docs
up: "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Threat Detection and Incident Response]]"
  - "[[Amazon EC2]]"
---
# Steps to address compromised instances

- Steps to address compromised instances
	- Capture the instance's metadata
	- Enable termination protection
	- Isolate the instance (replace instance's SG - no outbound traffic authorized)
	- Detach the instance from any ASG (suspend process)
	- Deregister the instance from any ELB
	- Snapshot the EBS volumes (deep analysis)
	- Tag the EC2 instance (i.e. investigation ticket)
- Offline investigation: shutdown instance
- Online investigation (e.g., snapshot memory or capture network traffic)
- Automate the isolation process: [[AWS Lambda]]
- Automate memore capture: SSM Run Command