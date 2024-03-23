---
tags:
  - docs
---


# Overview
- For load balancing TCP, UDP, and TLS traffic
- Can handle millions of requests per second
- Routes the traffic while maintaining ultra-low latencies
- Works on the Layer 4 (Transport Layer) of the OSI Model
	- only understand TCP and UDP.
- Uses the flow hash routing algorithm
- Can be directly associated with an Elastic IP address
- Supports direct integration with: AWS Global Accelerator, [[AWS Config]], [[VPC Endpoints]] Services and Traffic Mirroring
- Can't interpret HTTP or HTTPs, but this makes it much faster in latency. 
	- **[EXAM HINT]** => If you see anything about latency and HTTP and HTTPS are not involved, this should default to a NLB.
- Rapid Scaling: There is nothing stopping NLB from load balancing on HTTP just by routing data. They would do this really fast and can deliver millions of requests per second.
- Only member of the load balancing family that can be provided a static IP. There is 1 interface per AZ. Can also use Elastic IPs (whitelisting on firewalls) and should be used for this purpose.
- Can perform SSL pass through.
- NLB can load balance non-HTTP/S applications, doesn't care about anything above TCP/UDP. This means it can handle load balancing for FTP or things that aren't HTTP or HTTPS.

# Notable features
- [[Connection Draining]]
- Cross-zone Load Balancing
- Preserving Source IP address
- WebSockets support
- Long-lived TCP connection

# Has different security features such as:
- SSL Offloading
- Server Name Indication (SNI)
- Back-end Server Encryption
- Application-Layer Protocol Negotiation (ALPN)
- Integration with AWS Global Accelerator

# Notable diﬀerences between ALB and NLB
- Does not have a selection of rule condition types unlike ALB
- Uses the TCP and UDP transport protocols not HTTP and HTTPS
- Suitable for various networking use cases, or for real-time multiplayer games that uses UDP
- Can support millions of requests per second while maintaining ultra-low latencies unlike ALB
- Can be directly integrated with an Elastic IP address, unlike ALB


___
tags:: [[AWS/efficency]] [[network]]  