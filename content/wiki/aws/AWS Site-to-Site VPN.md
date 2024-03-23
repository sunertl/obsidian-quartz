---
tags:
  - docs
up:
  - "[[AWS Virtual Private Network (VPN)]]"
related:
  - "[[Infrastructure Security]]"
  - "[[Amazon VPC]]"
---
## Overview
---
### Virtual Private Gateway (VGW)
- VPN concentrator on the AWS side of the VPN connection
- VGW is created and attached to the [[Amazon VPC|VPC]] from which you want to create the Site-to-Site VPN connection
- Possibility to customize the ASN (Autonomous System Number)

### Customer Gateway (CGW)
- Software application or physical device on customer side of the VPN connection

## Site-to-Site VPN Connection
---
- Customer Gateway Device (on prem)
	- What IP address to use?
		- Public Internet-routable IP address for your Customer Gateway device
		- If it’s behind a NAT device that’s enabled for NAT traversal (NAT-T), use the public IP address of the NAT device

> [!important] Important
> Enable Route Propagation for theVirtual Private Gateway in the route table that is associated with your subnets

- If you need to ping your [[EC2 Instance Types|EC2 instances]] from on-premises, make sure you add the ICMP protocol on the inbound of your security groups