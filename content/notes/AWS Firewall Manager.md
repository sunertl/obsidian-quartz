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
> **AWS Firewall Manager** simplifies your AWS WAF, AWS Shield Advanced, and Amazon VPC security groups administration and maintenance tasks across multiple accounts and resources. With Firewall Manager, you set up your AWS WAF firewall rules, Shield Advanced protections, and Amazon VPC security groups just once. The service automatically applies the rules and protections across your accounts and resources, even as you add new resources.

- Manage rules in all accounts of an AWS Organization
- Security policy: common set of security rules  
	- WAF rules (Application Load Balancer, API Gateways, CloudFront)  
	- AWS Shield Advanced (ALB, CLB, NLB, Elastic IP, CloudFront)  
	- Security Groups for EC2, Application Load Balancer and ENI resources in VPC
	- AWS Network Firewall (VPC Level)  
	- Amazon Route 53 Resolver DNS Firewall  
	- Policies are created at the region level
- Rules are applied to new resources as they are created (good for compliance) across all and future accounts in your Organization



> [!Important] Important
> Firewall Manager is particularly useful when you want to protect your entire organization rather than a small number of specific accounts and resources, or if you frequently add new resources that you want to protect. Firewall Manager also provides centralized monitoring of DDoS attacks across your organization.


