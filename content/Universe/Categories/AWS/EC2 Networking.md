# Overview

- Instances accessible either via public internet or customer's own private network in AWS
- Performance based on the underlying instance type and configuration but also depends on the network configuration -> depends how instance can utilize the underlying physical devices

# Allocation of IP Addresses

- all networking capabilities are virtualized
- ENI - logical networking component (virtual network card) is attached to the virtual instance
- ENI can be attached to an instance - mulitple ENIs can attached to one instance to increase networking speed
- by default a IPv4 is assigned to the instance (for every EC2 instance a specific private IP address will be automatically assigned)

# Enhancement of Network Capability
## [[Enhanced Networking]]
## [[Elastic Fabric Adapter]]
## [[Amazon EC2 Network Security]]


___
tags: [[network]] [[aws/security 