
>[!important]
>An EC2 instance starts with at least one ENI - elastic network interface. An instance may have ENIs in separate subnets, but everything must be within one AZ.

When you launch an instance with [[Security Groups]], they are on the network interface and not the instance.


# Overview

-   MAC address
-   Primary IPv4 private address
    -   From the range of the subnet the ENI is within.
    -   Will be static and not change for the lifetime of the instance
        -   `10.16.0.10`
    -   Given a DNS name that is associated with the address.
        -   `ip-10-16-0-10.ec2.internal`
        -   Only resolvable inside the VPC and always points at private IP address
-   0 or more secondary private IP addresses
-   0 or 1 public IPv4 address
    -   The instance must manually be set to receive an IPv4 address or spun into a subnet which automatically allocates an IPv4. This is a dynamic IP that is not fixed. If you stop an instance the address is removed. When you start up again, it is given a brand new IPv4 address. Restarting the instance will not change the IP address. Changing between EC2 hosts will change the address. This will be allocated a public DNS name. The Public DNS name will resolve to the primary private IPv4 address of the instance. Outside of the VPC, the DNS will resolve to the public IP address. This allows one single DNS name for an instance, and allows traffic to resolve to an internal address inside the VPC and the public will resolve to a public IP address.
-   1 elastic IP per private IPv4 address
    -   Can have 1 public elastic interface per private IP address on this interface. This is allocated to your AWS account. Can associate with a private IP on the primary interface or secondary interface. If you are using a public IPv4 and assign an elastic IP, the original IPv4 address will be lost. There is no way to recover the original address.
-   0 or more IPv6 address on the interface
    -   These are by default public addresses.
-   Security groups
    -   Applied to network interfaces.
    -   Will impact all IP addresses on that interface.
    -   If you need different IP addresses impacted by different security groups, then you need to make multiple interfaces and apply different security groups to those interfaces.
-   Source / destination checks
    -   If traffic is on the interface, it will be discarded if it is not from going to or coming from one of the IP addresses

Secondary interfaces function in all the same ways as primary interfaces except you can detach interfaces and move them to other EC2 instances.

# Important Concepts

-   Legacy software is licensed using a mac address.
    -   If you provision a secondary ENI to a specific license, you can move around the license to different EC2 instances.
-   Multi homed (subnets) management and data.
-   Different security groups are attached to different interfaces.
-   The OS doesn't see the IPv4 public address.
-   You always configure the private IPv4 private address on the interface.
-   Never configure an OS with a public IPv4 address.
-   IPv4 Public IPs are Dynamic, starting and stopping will kill it.

Public DNS for a given instance will resolve to the primary private IP address in a VPC. If you have instance to instance communication within the VPC, it will never leave the VPC. It does not need to touch the internet gateway.


___
[[network]] 