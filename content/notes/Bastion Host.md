---
tags:
  - aws/infrastructure
up:
  - "[[Amazon EC2]]"
related:
  - "[[Infrastructure Security]]"
---
## Overview
___
- We can use a Bastion Host to SSH into our private [[EC2 Instance Types|EC2 instances]]
- The bastion is in the [[Subnets#Public Subnet|public subnet]] which is then connected to all other private subnets
- Bastion Host [[Security Groups|security group]] must allow inbound from the internet on port 22 from restricted [[CIDR Block|CIDR]] (e.g., public [[CIDR Block|CIDR]] of your corporation)
- [[Security Groups|Security group]] of the [[EC2 Instance Types|EC2 instances]] must allow the security group of the bastion host, or the private IP of the bastion host.

![[Pasted image 20231031200406.png]]