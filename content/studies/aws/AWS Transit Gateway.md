---
tags:
  - compsci/cloud/aws/security
  - compsci/cloud/aws/network
up:
  - "[[Amazon VPC]]"
related:
  - "[[Infrastructure Security]]"
---
## Overview
---
>[!summary] Summary
> A transit gateway is a **network transit hub that you can use to interconnect your [[Amazon VPC]] and on-premises networks** through a central hub. It acts as a cloud router that allows you to integrate multiple networks.

- Regional resource, can work cross-region
- Share cross-account using [[Resource Access Manager (RAM)]]
- You can peer Transit Gateway across regions
- [[Route Table]]: limit which VPC can talk with other VPC
- Works with [[AWS Direct Connect|Direct Connect Gateway]], VPN connections
- Supports IP Mulitcast (not supported by any other AWS service)

![[Pasted image 20231102204733.png]]

## Site-to-Site VPN ECMP
---
- ECMP = Equal-cost multi-path routing
- Routing strategy to allow to forward a packet over multiple best path
- Use case: create multiple [[AWS Site-to-Site VPN|site-to-site VPN]] connections to increase the bandwidth of your connection to AWS

![[Pasted image 20231102204921.png]]
