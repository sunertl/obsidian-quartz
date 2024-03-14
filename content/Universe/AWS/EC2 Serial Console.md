---
tags:
  - compsci/cloud/aws/security
up: "[[Amazon EC2]]"
related:
  - "[[Threat Detection and Incident Response]]"
  - "[[AWS Security, Identity & Compliance]]"
---
- Use cases: troubleshoot boot, troubleshoot network configuration, analyze reboot issues
- Directly access your EC2 instance's serial port (as if keyboard and monitor are directly attached to the EC2 instance)
- Does NOT require any network capabilities
- Use with supported Nitro-based EC2 instances
- Must setup OS user and password
- Only one active session per EC2 instance
- Disabled by default (enable at AWS account level)
