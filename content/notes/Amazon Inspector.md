---
tags:
  - docs
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Security Logging and Monitoring]]"
---

> [!Important] Definition
> Amazon Inspector is an automated vulnerability management service that continually scans AWS workloads for software vulnerabilities and unintended network exposure

## Only for

- **For EC2 instances**
	- Leveraging the AWS System Manager (SSM) agent
	- Analyze against unintended network accessibility
	- Analyze the running OS against known vulnerabilities

- **For container images push to Amazon ECR**
	- Assessment of container images as they are pushed

- **For Lambda functions**
	- Identifies software vulnerabilities in function code and package dependencies
	- Assessment of functions as they are deployed

Reporting & integration with [[AWS Security Hub]]
Send findings to [[Amazon EventBridge]]