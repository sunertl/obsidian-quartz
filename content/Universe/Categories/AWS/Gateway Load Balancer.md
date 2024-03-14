# Overview
- Primarily used for running third-party virtual appliances
- Suitable for custom firewalls, deep packet inspection systems, intrusion detection & prevention systems and many other virtual appliances
- Uses the Internet Protocol (IP) to pass the OSI Layer 3 traffic to its registered targets
- Works on both Layer 3 (Network Layer) and Layer 4 (Transport Layer) of the OSI Model
- Uses the Generic Network Virtualization Encapsulation (GENEVE) protocol to exchange application traffic
- You can use GWLB endpoints to exchange traffic across different VPC boundaries
- The access is configured using the route tables of your VPC, instead of virtual IP addresses

____
tags:: [[AWS/efficency]]  