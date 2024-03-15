---
tags:
  - CS/cloud/aws/logging
  - CS/cloud/aws/security
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Amazon GuardDuty]]"
  - "[[Security Logging and Monitoring]]"
---
## Overview

> [!Summary] Summary
> - CloudTrail is an AWS service that helps you enable governance, compliance, and operational and risk auditing of your AWS account.
> - Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail.
> - CloudTrail is a regional service
> - Enabled by default

You can create two types of trails for an AWS account:

1. A trail that applies to all regions
	- CloudTrail records events in each and every region and delivers the CloudTrail event log files to an S3 bucket that you specify.
2. A trail that applies to one region
	- CloudTrail records the events in that region only.

## CloudTrail Events Logs

- Logs API actions which affect AWS accounts (if you stop an instance, that's logged, etc.)
	-  logged as [[CloudTrail Events]]
- 90 days stored by default in Event History
- Enabled by default - no cost for 90 day history
- To customize the service, create 1 or more Trails
	- it's essentially how the service logs events
- Events include actions taken in the AWS Management Console, AWS Command Line Interface, and AWS SDKs and APIs.
- Optionally, you can enable CloudTrail Insights on a trail to help you identify and respond to unusual activity
- Events are logged **NOT** in real time

![[Pasted image 20231031181644.png]]

