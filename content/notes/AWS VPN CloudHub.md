---
tags:
  - docs
  - docs
up:
  - "[[AWS Virtual Private Network (VPN)]]"
related:
  - "[[Infrastructure Security]]"
  - "[[Amazon VPC]]"
---
## Overview
___
>[!summary] Summary
>Provide secure communication between multiple sites, if you have multiple VPN connections. Low-cost hub-and-spoke model for primary or secondary network connectivity between different locations (VPN only)

- It's a VPN connection so it goes over the public internet
- To set it up, connect multiple VPN connections on the same [[AWS Site-to-Site VPN#Virtual Private Gateway (VGW)|Virtual Private Gateway (VGW)]], setup dynamic routing and configure [[Route Table|route tables]]

![[Pasted image 20231102190355.png]]

