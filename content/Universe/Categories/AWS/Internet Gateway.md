# Overview

An Internet Gateway (IGW) is a logical connection between an [[Amazon VPC]] and the Internet. It is _not_ a physical device. Only one can be associated with each VPC. It does _not_ limit the bandwidth of Internet connectivity. (The only limitation on bandwidth is the size of the Amazon EC2 instance, and it applies to all traffic — internal to the VPC and out to the Internet.)

If a VPC _does not_ have an Internet Gateway, then the resources in the VPC _cannot be accessed from the Internet_ (unless the traffic flows via a corporate network and VPN/Direct Connect).

An Internet Gateway allows resources within your VPC to access the internet, and vice versa. In order for this to happen, there needs to be a routing table entry allowing a subnet to access the IGW.

That is to say — an IGW allows resources within your public subnet to access the internet, and the internet to access said resources.

A subnet is deemed to be a _Public Subnet_ if it has a Route Table that directs traffic to the Internet Gateway.

An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet.

An internet gateway serves two purposes: 
- to provide a target in your VPC [[Route Table]] for internet-routable traffic
- to perform network address translation (NAT) for instances that have been assigned public IPv4 addresses. 

An internet gateway supports IPv4 and IPv6 traffic. It does not cause availability risks or bandwidth constraints on your network traffic. There's no additional charge for having an internet gateway in your account.

```ad-important

You can only have one Internet Gateway per VPC.

```

# Egress-Only Internet Gateway
-   IPv4 addresses are private or public
-   NAT allows IPv4 private IPs with a way to access public internet or public AWS services and receive responses.
-   NAT does this in a way that will not allow externally initiated connections (from the public internet) IN.
-   NAT process exists because of the limitation of IPv4; it does not work with IPv6.
-   Using IPv6, all IPs are publicly routable.
    -   Internet Gateway (IPv6) allows all IPs **in** and **out**
-   Egress-only is **outbound only** for IPv6. It is exactly the same as NAT, only outbound only.
-   To configure the Egress-only gateway, you must add default IPv6 route `::/0` added to RT with `eigw-id` as target.