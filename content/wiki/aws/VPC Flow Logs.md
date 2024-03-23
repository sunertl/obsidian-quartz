---
tags:
  - docs
up:
  - "[[Amazon VPC]]"
related:
  - "[[Security Logging and Monitoring]]"
---
## Overview

>[!summary] Summary
> VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC.

Flow log data can be published to [[Amazon CloudWatch]] Logs (query it using CloudWatch Logs Insights) or [[Amazon S3]] (query it using [[Amazon Athena]])**.

Flow logs can help you with a number of tasks, such as:
- **Diagnosing overly restrictive security group** rules
- **Monitoring the traffic** that is reaching your instance
- **Determining the direction of the traffic** to and from the network interfaces

Flow log data is **collected outside of the path of your network traffic**, and therefore **does not affect network throughput or latency**.

-   Capture packet metadata, not packet contents. For packet contents you need a packet sniffer. Flow logs only capture things like:
    -   Source IP
    -   Destination IP
    -   Packet size
    -   Anything which could be observed from the outside of the packet.
-   Capture data at various different monitoring points.
    -   VPC: all interfaces in that VPC
    -   Subnets: interfaces in that subnet
    -   Interface directly
-   VPC flow logs are **NOT** realtime
-   Destination can be [[Amazon S3|S3]] or [[Amazon CloudWatch Logs|CloudWatch logs]]
-   Flow log inheritance is downwards starting at the VPC.
-   RDS can use VPC flow logs
-   The packet will always have source, then destination, then response.
-   ICMP protocol number is 1; TCP is 6; UDP is 17.
-   The following are excluded from VPC Flow Logs:
    -   [[EC2 Instance Metadata]]: http://169.254.169.254/latest/metadata
    -   AWS Time Synchronization Server: [http://169.254.169.123](http://169.254.169.123)
    -   Amazon DNS Server
    -   Amazon Windows Licensing Server

## Syntax

![[Pasted image 20231031194347.png]]

- srcaddr & dstaddr – help identify problematic IP
- srcport & dstport – help identity problematic ports
- Action – success or failure of the request due to Security Group / NACL
- Can be used for analytics on usage patterns, or malicious behavior
- Quer y VPC flow logs using Athena on S3 or CloudWatch Logs Insights
- Flow Logs examples: https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs- records-examples.html

## Troubleshoot SG & NACL issues

> [!hint] Hint
> Look at the "ACTION" field

Incoming Requests

- Inbound REJECT => NACL or SG
- Inbound ACCEPT, Outbound REJECT => NACL
![[Pasted image 20231031194730.png]]

Outgoing Requests

- Outbound REJECT => NACL or SG
- Outbound ACCEPT, Inbound REJECT => NACL

![[Pasted image 20231031194810.png]]
## Traffic Not Captured

- Traffic to Amazon DNS server (custom DNS server traffic is logged)
- Traffic for Amazon Windows license activation
- Traffic to and from 169.254.169.254 for EC2 instance metadata
- Traffic to and from 169.254.169.123 for Amazon Time Sync service
- DHCP traffic
- Mirrored traffic
- Traffic to the VPC router reser ved IP address (e.g., 10.0.0.1)
- Traffic between [[VPC Endpoints]] ENI and [[Network Load Balancer]]ENI 

## Traffic Mirroring

- Allows you to capture and inspect network traffic in your VPC
- Route the traffic to security appliances that you manage
- Capture the traffic
	- From (Source) – ENIs
	- To (Targets) – an ENI or a Network Load Balancer
- Capture all packets or capture the packets of your interest (optionally, truncate packets)
- Source and Target can be in the same [[Amazon VPC|VPC]] or different VPCs ([[VPC Peering]])
- Use cases: content inspection, threat monitoring, troubleshooting, ...

### Traffic Mirroring - Architecture
___
![[Pasted image 20231031195117.png]]

![[Pasted image 20231031195127.png]]
