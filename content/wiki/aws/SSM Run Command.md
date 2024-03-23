---
tags:
  - docs
up:
  - "[[AWS Systems Manager]]"
related:
  - "[[Security Logging and Monitoring]]"
---
## Overview

- Execute a document (=script) or just run a command
- Run command across multiple instances (using resource groups)
- Rate control/error control
- Integrated with [[AWS Identity & Access Management (IAM)]] & [[AWS CloudTrail]]
- No need for SSH
- Command output can be shown in the console, sent to S3 bucket or CloudWatch Logs
- Send notifications to SNS about command status (in progress, success, failed, ...)
- can be invoked using [[Amazon EventBridge]]

