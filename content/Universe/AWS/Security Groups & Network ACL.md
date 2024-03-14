---
tags:
  - compsci/cloud/aws/security
up:
  - "[[Amazon VPC]]"
related:
  - "[[Amazon EC2]]"
---
# Overview

- Created by default when you launch a new VPC and on your default VPC
- Both of them act as a virtual firewall that protects your AWS resources from unauthorized traffic
- These two have inbound and outbound rules that can be set to have one IP address or a CIDR range as a source
- Allows you to control the incoming and outgoing traffic to and from your network


![[Pasted image 20220302154356.png]]

- Network ACLs are at the subnet level while Security Groups operate at the instance level only
- Since the subnet level is higher than the instance level, the rules in Network ACL are the first ones to be evaluated before going to the rules of the Security Group
- A Security Group can cover multiple resources in various subnets or Availability Zones
- A Network ACL covers the entire subnet where your AWS resources are hosted
- A NACL can have both ALLOW or DENY rules
-  A Security Group supports ALLOW rules only

# Stateless vs Stateful

## [[Network Access Control List (ACL)]] - Stateless

- Does not track the status of the request
- The inbound traffic that has already been permitted before is still subject to the rules for the unbound traffic and vice versa
- Provides a more fine-grained control to configure both the inbound and outbound rules of your NACL

## [[Security Groups]] - Stateful

- Tracks all the status of the incoming requests
- If a traffic is a response to a particular request, then it will be allowed automatically regardless of any rules in your Outbound Rules
- It is aware if the outgoing traffic is:
	- Initated from the EC2 instance itself
	- A response to the request that was initiated externally
- Its Outbound Rule can filter:
	- An API call initiated by an application hosted in the EC2 instance
	- A scheduled OS patch that is initiated by the EC2 instance which automatically fetches updates from a desginated respository



![[Pasted image 20220125195636.png]]
