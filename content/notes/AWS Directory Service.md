---
tags:
  - docs
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Identity and Access Management]]"
  - "[[AD Connector]]"
---
## Overview

>[!definition] Defintion
>Used for AD authentication/authorization of products and services within AWS

- Built using Microsoft Active Directory 2012 R2
- Managed using Standard Active Directory tools
- Supports Group Policy and SSO
- Supports Schema extension - MS AD Aware Apps
- SharePoint, SQL, Distributed File System (DFS)
- Two sizes - Standard (30,000) & Enterprise (500,000)
- Highly available by default (2 AZ's +)
- Includes monitoring, recovery, replication, snapshots and maintenance
- Supports one-way and two-way external and forest trusts with on-premises active directory

>[!important] Important
>Can operate through a network link failure to any connected on-premises systems.

- Supports RADIUS-based MFA

>[!important] Important
>Best choice for more than 5,000 users and if you need trust relationships between AWS and your on-premises directories.


## Architecture

![[Screenshot 2023-11-11 at 5.19.56 PM.png]]


