---
tags:
  - docs
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Infrastructure Security]]"
---
## Overview


> [!Definition] Definition
> AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. AWS Shield provides always-on detection and automatic inline mitigations that minimize application downtime and latency, so there is no need to engage AWS Support to benefit from DDoS protection. There are two tiers of AWS Shield - Standard and Advanced.

## Standard 

- Free with Route53 and CloudFront as default
- Provides layer 3 and layer 4 protection against DDoS attacks.

## Advanced

- $3000 per month
- Protect against more sophisticated attack on [[Amazon EC2|EC2]], [[Elastic Load Balancer (ELB)]], [[Amazon CloudFront|CloudFront]], [[AWS Global Accelerator|Global Accelerator]] and [[Route 53]]
- Provides access to DDoS advanced response team and financial insurance against increased costs.

