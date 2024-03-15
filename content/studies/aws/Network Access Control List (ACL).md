---
tags:
  - CS/cloud/aws/security
up:
  - "[[Amazon VPC]]"
related:
  - "[[Infrastructure Security]]"
  - "[[Security Groups]]"
  - "[[Security Groups & Network ACL]]"
---
## Overview
---
- at the subnet level
- security feature to protect subnet of your [[Amazon VPC]] from unauthorized traffic
- NACLs are attached to [[Subnets]] and only filter data as it crosses the subnet boundary. Two EC2 instances in the same subnet will not check against the NACLs when moving data.
- controls the traffic for the entire subnet (which means that multiple EC2 instances or other AWS resources (databases, etc.) are going to be affected too!)
- one VPC can have multiple subnets, each subnet needs to have one NACL associated with it
	- each subnet resides entirely within one AZ (two or more data centers located in the same geographic area) -> EC2 instances that are running on the same subnet are also in the same AZ
- You can configure Inbound Rules and Outbound Rules
	- When a specific rule set has been called, the one with the lowest rule number first. As soon as one rule is matched, the processing stops for that particular piece of traffic.
- Can explicitly allow and deny traffic. If you need to block one particular thing, you need to use NACLs.
- Each NACL also includes a non modifiable and non removable rule whose rule number is an asterisk. This rule ensures that if a packet doesn't match any of the other numbered rules, it's denied.
- **Stateless = doesn't track the connection state of the requests**
- They purely filter based upon the content of the packet. That is their job.
- In general, the recommendation is to leave NACLs at their default settings
- They only see IPs, ports, protocols, and other network connections. No logical resources can be changed with them.
- NACL uses [[Ephemeral Ports]] to deliver the outgoing request out of subnet
- NACLs cannot be assigned to specific AWS resources.
- NACLs can be used with [[Security Groups]] to add explicit deny (Bad IPs/nets)
 
## NACL Settings
---
To enable the connection to a service running on an instance, the associated network ACL must allow both inbound traffic on the port that the service is listening on as well as allow outbound traffic from ephemeral ports. When a client connects to a server, a random port from the ephemeral port range (1024-65535) becomes the client’s source port.

The designated ephemeral port then becomes the destination port for return traffic from the service, so outbound traffic from the ephemeral port must be allowed in the network ACL. By default, network ACLs allow all inbound and outbound traffic. If your network ACL is more restrictive, then you need to explicitly allow traffic from the ephemeral port range.

## Default NACL
---
- Already exist by default (whenever you launch a new VPC instance)
- can be modified
- **Allows** all inbound and outbound traffic by default

## Custom NACL
---
- You manually have to create
- can be modified
- **Denies** all inbound and outbound traffic by default

### [[Security Groups & Network ACL]] - differences between the two
