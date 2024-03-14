---
tags:
  - compsci/cloud/aws/security
up:
  - "[[Amazon VPC]]"
related:
  - "[[Infrastructure Security]]"
---
## Overview
---
VPC Peering is a service that lets you create a private and encrypted network link between _**two and only two VPCs**_.

- Peering connection can be in the same or cross region and in the same or across accounts. 
- When you create a VPC peer, you can enable an option so that public hostnames of services in the peered VPC resolve to the private internal IPs. You can use the same DNS names if its in peered VPCs or not. If you attempt to resolve the public DNS hostname of an EC2 instance, it will resolve to the private IP address of the EC2 instance. 
- VPCs in the same region can reference each other by using security group id. You can do the same efficient referencing and nesting of security groups that you can do if you're inside the same VPC. This is a feature that only works with VPC peers inside the same region.

In different regions, you can utilize [[Security Groups|security groups]], but you'll need to reference IP addresses or IP ranges. If VPC peers are in the same region, then you can do the logical referencing of an entire security group.

VPC peering connects **ONLY TWO**

VPC Peering does not support **transitive peering**. If you want to connect 3 VPCs, you need 3 connections. You can't route through interconnected VPCs.

VPC Peering Connections CANNOT be created with overlapping VPC [[CIDR Block|CIDRs]].

>[!important] Important
> You must update [[Route Table|route tables]] in each [[Subnets|VPC's subnets]] to ensure [[Amazon EC2|EC2]] instances can communicate with each other

![[Pasted image 20231102203518.png]]

## Transitive Peering
---
Instead of using VPC peering, you can **use an [[AWS Transit Gateway]] that acts as a network transit hub**, to interconnect your VPCs and on-premises networks.

You have a **VPC peering connection between VPC A and VPC B, and between VPC A and VPC C**.

There is **no VPC peering connection between VPC B and VPC C**. So, you **cannot route packets directly from VPC B to VPC C through VPC A**.


