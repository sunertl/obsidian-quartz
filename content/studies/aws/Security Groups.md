---
tags:
  - CS/cloud/aws/security
  - CS/cloud/aws/network
up:
  - "[[Amazon VPC]]"
related:
  - "[[Infrastructure Security]]"
  - "[[Security Groups & Network ACL]]"
  - "[[Network Access Control List (ACL)]]"
---
## Overview

- at the instance level
- are attached to ENI (network interfaces)
- acts as a virtual firewall that controls the incoming and outgoing traffic of one or more EC2 instances
- 1 EC2 instance can have one or more security groups
- Cannot have an explicit DENY rule (unlike NACL)
- Aside from EC2 instances, it can also be attached to Amazon RDS, Amazon ElastiCache and other AWS resource.
- Inbound Rules allow incoming traffic, can't explicitly DENY traffic and is not affected by outbound rules
- Outbound rules allow outgoing traffic, control traffic originated from the EC2 instance itself, do not affect the outgoing response traffic (i.e. EC2-initiated API call, scheduled OS patches)
- Unlike Network ACL, Security Groups are stateful = aware of the state of each incoming request
	- If one incoming request has already been allowed to access the instance, its response traffic will also be allowed to flow automatically regardless of your outbound rules
- Security Group not only applicable to EC2 but also to other AWS services connected to your [[Amazon VPC]].

## Default Security Group

- already exists on default VPC
- has one inbound rule and one outbound rule by default
- will be attached to your EC2 instance if you didn't specify a particular security group
- automatically allows incoming traffic from any resource that also uses the default security group
- allows all outgoing traffic that originated from the instance itself

## Custom Security Group

- have to be manually created
- has a default outbound rule that allows all traffic
- doesn't have a default inbound rule
- denies all inbound and outbound traffic by default

# [[Security Groups & Network ACL]]
