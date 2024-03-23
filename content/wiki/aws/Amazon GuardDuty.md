---
tags:
  - docs
up: "[[AWS Security, Identity & Compliance]]"
related: "[[Threat Detection and Incident Response]]"
---
## Overview

> [!Defintion] Defintion
> Intelligent Threat discovery to protect your AWS account

- Uses [[Machine Learning]] algorithms, [[Anomaly Detection]], 3rd party data
- One click to enable (30 day trial), no need to install software
- Input data includes:
	- [[AWS CloudTrail#CloudTrail Events Logs|CloudTrail Events logs]] - unusual API calls, unauthorized deployments
		- CloudTrail Management Events - create VPC subnet, create trail, etc.
		- CloudTrail S3 Data Events - get object, list objects, delete objects, etc.
	- [[VPC Flow Logs]] - unusual internal traffic, unusual IP address
	- [[DNS Logs]] - compromised EC2 instances sending encoded data within DNS queries, only possible if VPC DNS resolver is used
	- Optional features - [[Amazon Elastic Kubernetes Service (EKS)#Audit Logs|EKS audit logs]], data events from:
		- [[Amazon RDS]]
		- [[Elastic Block Store (EBS)]]
		- [[AWS Lambda]]
		- [[Amazon S3]]
- Can setup [[Amazon EventBridge]] rules to be notified in case of findings
	- [[Amazon EventBridge|EventBridge]] rules can target [[AWS Lambda]] or [[Amazon SNS]]


> [!Important] Important
> Can protect against cryptocurrency attacks (has a dedicated "finding" for it)

## Multi-Account Strategy

- You can manage multiple accounts in GuardDuty
- Associate the member accounts with the Administrator account
	- through an [[AWS Organizations|AWS Organization]]
	- Sending invitation through GuardDuty
- Admin account can:
	- Add and remove member accounts
	- Manage GuardDuty within the associated member accounts
	- Manage findings, suppression rules, trusted IP lists, threat lists
- In an AWS organization, you can specify a member account as the Organization's delegated administrator for GuardDuty
	- a member account can become the administrator for GuardDuty

### Configuration of Users from a Master Account

- Users from the master account can configure GuardDuty as well as view and manage GuardDuty findings for their own account and all associated member accounts.
- Users from a master account can generate sample findings in their own account. Users from a master account CANNOT generate sample findings in members’ accounts.
- Users from a master account can archive findings in their own accounts and in all member accounts.
- Users from a master account can upload and further manage trusted IP lists and threat lists in their own account.

### Configuration of Users from a Member Account

- Users from member accounts can configure GuardDuty as well as view and manage GuardDuty findings in their account. Member account users can’t configure GuardDuty or view or manage findings in the master or other member accounts.
- Users from a member account can generate sample findings in their own member account. Users from a member account can’t generate sample findings in the master or other member accounts.
- Users from a member account can’t archive findings either in their own account or in their master’s account, or in other member accounts.
- Users from a member account can’t upload and further manage trusted IP lists and threat lists.
- Trusted IP lists and threat lists that are uploaded by the master account are imposed on GuardDuty functionality in its member accounts. In other words, in member accounts GuardDuty generates findings based on activity that involves known malicious IP addresses from the master’s threat lists and does not generate findings based on activity that involves IP addresses from the master’s trusted IP lists.

## Findings Automated Response

- Findings are potential security issue for malicious events happening in your AWS account
- Automate response to security issues revealed by GuardDuty findings using [[Amazon EventBridge]]
- Send alerts to SNS (email, Lambda, Slack, Chime, etc.)
- Events are published to both the administrator account and the member account that it is originated from

## Findings

- GuardDuty pulls independent streams of data directly from CloudTrail logs (management events, data events), VPC Flow Logs or EKS logs
- Each finding has a severity value between 0.1 to 8+ (High, Medium, Low)
- Finding naming convention: ThreatPurpose:ResourceTypeAffected/ThreatFamilyName.DetectionMechanism!Artifact
	- **ThreatPurpose** - primary purpose of the threat (e.g. backdoor, crypto currency)
	- **ResourceTypeAffected** - which AWS resource is the target (e.g. EC2, S3)
	- **ThreatFamilyName** - describes the potential malicious activity (e.g. NetworkPortUnusual)
	- **DetectionMechanism** - method GuardDuty detecting the finding (e.g. Tcp, Udp)
	- **Artifact** - describes a resource that is used in the malicious activity (e.g. DNS)
- You can generate sample findings in GuardDuty to test your automations

### Findings Types

- EC2 Finding Types
	- UnauthorizedAccess:EC2/SSHBruteForce,CryptoCurrency:EC2/BitcoinToo.B!DNS
- IAM Finding Types
	- Stealth:IAMUser/CloudTrailLoggingDisabled,Policy:IAMUser/RootCredentialUsage
- Kubernetes Audit Logs Finding Types
	- CredentialAccess:Kubernetes/MaliciousIPCaller
- Malware Protection Finding Types
	- Execution:EC2/SuspiciousFile,Execution:ECS/SuspiciousFile
- RDS Protection Finding Types
	- CredentialAccess:RDS/AnomalousBehavior:SuccessfulLogin
- S3 Finding Types
	- Policy:S3/AccountBlockPublicAccessDisabled,PenTest:S3/KaliLinux

## Trusted and Threat IP Lists

- Works only for public IP addresses
- Trusted IP List
	- List of IP addresses and CIDR ranges that you trust
	- GuardDuty doesn't generate findings for these trusted lists
- Threat IP List
	- List of known malicious IP addresses and CIDR ranges
	- GuardDuty generates findings based on these threat lists
	- Can be supplied by 3rd party threat intelligence or created custom for you

- In a multi-account GuardDuty setup, only the GuardDuty administrator account can manage those lists

## Supression Rules

- Set of criteria that automatically filter and archive new findings
	- low value findings, false positive findings, or threats you don't intent to act on
- Can suppress entire findings types or define more granular criteria (e.g, suppress only specific EC2 instances)
- Suppressed findings are **NOT** sent to Security Hub, S3, Detective, or EventBridge
- Suppressed findings can be still viewed in the archive

## Troubleshooting

*GuardDuty didn't generate any finding types*

**Problem:** GuardDuty is activated but it didn't generate any DNS based findings

**Reason:** GuardDuty only processes DNS logs if you use the default VPC DNS resolver: All other typers of DNS resolvers won't generate DNS based findings.

- If GuardDuty is suspended or disabled, then no finding types are generated
- Best practice to enable GuardDuty even in Regions you don't use