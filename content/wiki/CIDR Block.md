[[Amazon VPC]]
#aws/network 

# Overview
Classless inter-domain routing (CIDR) is a method for allocating IP addresses and IP routing. A collection of Internet Protocol (IP) standards is used to create unique identifiers for networks and individual devices. The IP addresses allow the transmission of unique packets of information to specific computers.

When choosing to create a VPC, you must choose a CIDR block. It allows you to specify the size of your network, measured in netmask (tells you the total number of available hosts for your network). You can create thousands of different IP addresses for your EC2 instances.

>[!Important]
>The first four IP addresses and the last IP address in each subnet CIDR block are reserved - cannot be assigned to an instance!

# Reserved IP Addresses
For example, in a **subnet with CIDR block 10.0.0.0/24**, the following five IP addresses are reserved:
- **10.0.0.0 = Network address**.
- **10.0.0.1 = For the VPC router**.
- **10.0.0.2 = Reserved for DNS Server**.
- **10.0.0.3 = For future use**.
- **10.0.0.255 = Network broadcast address**; AWS do not support broadcast in a VPC, so they reserve this address.

VPC supports IPv4 and IPv6


>[!Important]
>The /32 denotes one IP address and the /0 refers to the entire network.

___
# Reference
[[Amazon EC2]]