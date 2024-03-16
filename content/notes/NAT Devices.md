---
tags:
  - aws/network
up:
  - "[[Amazon VPC]]"
related:
---
You can use NAT devices to allow resources in [[Subnets#Private Subnet|private subnets]] to connect to the internet, other VPCs, or on-premises networks. These instances can communicate with services outside the VPC, but they cannot receive unsolicited connection requests.

The NAT device replaces the source IPv4 address of the instances with the address of the NAT device. When sending response traffic to the instances, the NAT device translates the addresses back to the original source IPv4 addresses.

You can use a managed NAT device offered by AWS, called a NAT Gateway or you can create your own NAT device on an EC2 instance, called a NAT Instance. 


> [!Important] Important
> AWS recommends that you use NAT Gateways because they provide better availability and bandwidth and require less effort on your part to administer.

# NAT Instance

- A virtualized NAT device running in an EC2 instance within your VPC
- Managed by the customer (you)
- Not highly available nor scalable
- give you more administrative control over your NAT workloads. They are EC2 instances that use a pre-configured AMI. NAT instances can be much cheaper i f you do not totally need the benefits of a NAT Gateway.

# NAT Gateway

>[!Definition]
A **NAT Gateway** is a highly available, managed Network Address Translation (NAT) service for your resources in a **private subnet** to access the Internet. NAT gateway is created in a specific Availability Zone and implemented with redundancy in that zone.


A NAT Gateway is similar to an [[Internet Gateway]] but with two major differences:

1. It allows resources in a private subnet to access the internet (think yum updates, external database connections, wget calls, OS patch, etc).
2. It only works one way. The internet at large cannot get through your NAT to your private resources unless you explicitly allow it.

It has the **same purpose as a NAT Instance** but instead, this has much **less configuration, higher bandwidth and better availability**. You are **charged for creating and using a NAT gateway** in your account. Each NAT gateway is **created in a specific Availability Zone and implemented with redundancy in that zone**.

- If you have resources in multiple Availability Zones and they share one NAT gateway, and if the NAT gateway’s Availability Zone is down, resources in the other Availability Zones lose Internet access.
- You must create a NAT gateway **on a public subnet** to enable instances in a private subnet to connect to the Internet or other AWS services, but prevent the Internet from initiating a connection with those instances.
- To create an Availability Zone-independent architecture, **create a NAT gateway in each Availability Zone** and configure your routing to ensure that resources use the NAT gateway in the same Availability Zone.
- NAT Gateway is already redundant in nature, meaning, AWS already handles any failures that occur in your NAT Gateway in an availability zone.

## Benefits of using a NAT Gateway

- It is a fully-managed service — just create it and it works automatically, including fail-over.
- A NAT gateway supports 5 Gbps of bandwidth and automatically scales up to 45 Gbps. (a NAT Instance is limited to the bandwidth associated with the EC2 instance type).

# Differences between NAT Instance & NAT Gateway

![[Pasted image 20220311193829.png]]