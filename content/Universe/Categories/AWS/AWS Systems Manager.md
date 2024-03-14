---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Management & Governance]]"
related:
  - "[[Security Logging and Monitoring]]"
---
## Overview

> [!Important] Definition
> AWS Systems Manager is a secure end-to-end management solution for resources on AWS and in multicloud and hybrid environments.

- Helps you manage your EC2 and On-Premises systems at scale
- Get operational insights about the state of your infrastructure
- Easily detect problems
- Patching automation for enhanced compliance
- Works for both Windows and Linux OS
- Integrated with [[Amazon CloudWatch]] metrics / dashboards
- Integrated with [[AWS Config]]
- Free service

## How does it work

- Need to install the SSM agent onto the system we control
- Installed by default on Amazon Linux 2 AMI & some Ubuntu AMI
- If an instance can't be controlled with SSM, it's probably an issue with the SSM agent
- Make sure the EC2 instances have a proper IAM role to allow SSM actions


## Concepts

- [[SSM Documents]]
- [[SSM Run Command]]
- [[SSM Automation]]
- [[SSM Parameter Store]]
- [[SSM Inventory]]
- [[SSM State Manager]]
- [[SSM Patch Manager]]
- [[SSM Maintenance Window]]
- [[SSM Session Manager]]
