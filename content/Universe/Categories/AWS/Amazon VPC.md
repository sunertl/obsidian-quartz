---
tags:
  - compsci/cloud/aws/network
up:
  - "[[AWS Network & Content Delivery]]"
related:
  - "[[Amazon EC2]]"
---
## Overview
___
>[!summary] Summary
>A Virtual Private Cloud (VPC) is a logically isolated virtual network which means that servers are virtually connected to each other to form a single network. It is a [[Regional Service]]. It can leverage the global infrastructure of AWS for a fraction of cost and can span across multiple AZs within a single AWS region. It can only be in one region.

Since a VPC is private, you can only have the following IP addresses:
- 10.0.0.0 to 10.255.255.255 
- 172.16.0.0 to 172.31.255.255 
- 192.168.0.0 to 192.168.255.255

## Components

When you create a VPC, you must choose a [[CIDR Block]]. You can subdivide your VPC into two or more [[Subnets]]. A subnet can consist of a [[Subnets#Public Subnet]] or [[Subnets#Private Subnet]]. 

For **connectivity**, a [[Route Table|route table]] contains a set of rules (routes) that are used to determine where network traffic from your subnet or gateway is directed. An [[Internet Gateway]] is a horizontally scaled, redundant and highly available VPC component that allows communication between your VPC and the internet. You can use [[NAT Devices]] to allow resources in private subnets to connect to the internet, other VPCs, or on-premises networks, however AWS recommends using [[NAT Devices#NAT Gateway|NAT Gateway]] because they provide better availability, bandwidth and require less admin effort. [[VPC Peering]] is a way to connect two VPCs that enables you to route traffic between them using IPv4 or IPv6 addresses.

For **connectivity to other AWS services**, choose [[VPC Endpoints]] to enable a private connection. 

For **security**, a [[Network Access Control List (ACL)]] is a type of security filter (like firewalls) which can filter traffic as it enters or leaves [[Subnets]]. [[Security Groups]] are boundaries which can filter traffic too but are attached to a resource and not to a subnet. [[Security Groups & Network ACL]] are stateful and stateless respectively. 

For **monitoring**, [[VPC Flow Logs]] helps you to capture information about the IP traffic going to and from network interfaces in your VPC.

## Default vs Custom VPC

- Regions can only have 1 default VPC and many custom VPCs
- Custom VPCs allow flexible network configuration, the default VPC has a fixed scheme
- Some services behave oddly without default VPC
- Default VPC can be easily recreated

## Non-VPC Services

Not all compute, storage, and database services need to run in a VPC. It is important that you know these services so you can easily spot them out in the exam.

Services that do not require a VPC:

- [[Amazon S3]]
- [[Amazon DynamoDB]]
- [[AWS Lambda ]](although you can configure Lambda to connect to a VPC to access resources in the VPC)

