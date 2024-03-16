# Overview

A subnet is a range of IP addresses for your VPC and is attached to an [[Availability Zone]]

>[!Important]
>A subnet can only span a single [[Availability Zone]] but you can have multiple subnets in the same AZ

To create a subnet, you need to specify the [[CIDR Block]] for the subnet which is a subset of the VPC CIDR block. There are five IP addresses within every VPC subnet that you cannot use ([[CIDR Block#Reserved IP Addresses]]). Whatever size of the subnet, the IP addresses are five less than you expect.  [[DHCP Options Set]] are a way how computing devices receive IP addresses automatically. There is one options set applied to a VPC at one time and this configuration flows through to subnets.

Each VPC subnet is in a different [[Availability Zone]] and together, they span across all the AZ's in the region.

# Public Subnet
**Public subnet** ideal for publicly accessible web servers and resources, has connection to the Internet Gateway of the VPC. A [[Bastion Host]] is an instance inside a VPC which is used to allow management connections. 

# Private Subnet
**Private subnet** ideal for systems like DBs or app servers that are not meant to be accessed publicly.

# Security
[[Network Access Control List (ACL)]] is a type of security filter (like firewalls) which can filter traffic as it enters or leaves a subnet.