---
tags:
  - CS/cloud/aws/security
up: "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Threat Detection and Incident Response]]"
---
# Overview

> [!Important] Important
> Central security tool to manage security across several AWS accounts and automate security checks

- Integrated dashboards showing current security and compliance status to quickly take actions
- Automatically aggregates alerts in predefined or personal findings formats from various AWS services & AWS partner tools:
	- [[AWS Config]]
	- [[Amazon GuardDuty]]
	- [[AWS Inspector]]
	- [[Amazon Macie]]
	- [[IAM Access Analyzer]]
	- [[AWS Systems Manager]]
	- [[AWS Firewall Manager]]
	- [[AWS Health]]
	- [[AWS Partner Network Solutions]]
- Must first enable [[AWS Config]]
- You can generate an [[Amazon EventBridge]] event to notify people downstream
- Automated checks are enabled in Security Hub Findings
- You can investigate potential issues and findings in [[Amazon Detective]]

![[Pasted image 20230928174047.png]]


# Main Features

- Cross-Region Aggregation - aggregate findings, insights, and security scores from multiple Regions to a single aggregation Region
- [[AWS Organizations]] integration
	- Manage all accounts in the organization
	- Security Hub automatically detects new accounts
	- By default, organization management account is the Security Hub administrator
	- Ability to have a designated Security Hub administrator from member accounts
- AWS Config must be enabled
	- Security Hub uses [[AWS Config]] to perform its security checks
	- Must be enabled on all accounts (Security Hub does NOT manage AWS Config)

# Security Standards

- Security Hub generates findings and continuous checks against the rules in a set of supported security standards
- Security Hub supports the following standards: CIS AWS Foundations, PCI DSS, AWS Foundational Security Best Practices

# Integration with [[Amazon GuardDuty]]

- Automatically enabled when Security Hub is enabled (can be disabled)
- GuardDuty will send findings to Security Hub
- Findings are sent in AWS Security Finding Format (ASFF)
- Findings are usually sent within 5 minutes
- Archiving a GuardDuty finding will NOT update the finding in Security Hub

![[Pasted image 20230928180703.png]]
# Findings

 - Security Hub consumes findings using AWS Security Finding Format (ASFF) format
 - Security Hub automatically updates and deletes findings
 - Findings past 90 days are automatically deleted
 - Filter by Region, Integration, Security Standard, Insights

# Insights

- Collection of related findings that identifies a security area that requires attention and intervention
- Example: Insight points out EC2 instances that are subject of findings that detect poor security practices
- Brings findings from across finding providers
- Each Insight defined by a Group By statement and optional Filters
- **Built-In Managed Insights** – return results only if you enabled related product integration or security standard (can not edit or delete)
- **Custom Insights** – Track issues specific to your environment
	- Example: Custom Insight to track critical findings affecting member accounts

# Custom Actions

- Helps you automate Security Hub with [[Amazon EventBridge]]
- Allows you to create actions for response and remediation to selected findings within the Security Hub Console
- EventBridge event type is Security Hub Findings - Custom Action

![[Pasted image 20230928181259.png]]


![[Pasted image 20230928181320.png]]


