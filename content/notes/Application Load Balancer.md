---
tags:
  - docs
---
# Overview

All AWS load balancers are scalable and highly available. Capacity that you have as part of an ALB increases automatically based on the load which passes through that ALB. This is made of multiple ALB nodes each running in different AZs. This makes them scalable and highly available.

- Primarily used for load balancing HTTP and HTTPS traffic
- Suitable for web applications
- Works on the Layer 7 (Application Layer) of the OSI model
	- which is the HTTP layer
- Supports Round Robin (default) and Least Outstanding Requests (LOR) routing algorithms
- Target types: Amazon EC2 Instance, Amazon Lambda Function, IP address
	- ALB can target multiple services
	- Health checks on the target group level
- Supported Protocol listeners: HTTP, HTTPS, and gRPC
- Also supports WebSockets and HTTP2
- Can be integrated with AWS Global Accelerator, AWS Config, AWS WAF and other features

Your **Application Load Balancer** periodically sends requests to its registered targets to test their status. These tests are called _health checks_. Each load balancer node routes requests only to the healthy targets in the enabled Availability Zones for the load balancer. Each load balancer node checks the health of each target, using the health check settings for the target group with which the target is registered. After your target is registered, it must pass one health check to be considered healthy. After each health check is completed, the load balancer node closes the connection that was established for the health check.


# Notable Features

- Advanced routing via listener rule condition types
- [[Connection Draining]]
- Idle connection timeout
- Cross-zone Load Balancing
- Preserving Source IP address
- Slow Start

## Has different security features such as:

- SSL Offloading
- Server Name Indication (SNI)
- Back-end Server Encryption
- User Authentication
- Application-Layer Protocol Negotiation (ALPN)
- Integration with [[Security Groups]] and [[AWS Web Application Firewall (WAF)]]

# Important Concepts

- Application Load Balancers support path-based routing, host-based routing, and support for containerized applications (support EC2, EKS, Lambda, HTTPS, HTTP/2 and websockets.)
- Targets are one single compute resource that connections are directed towards. Targets represents Lambda functions, EC2 instances, ECS containers.
- Target groups are groups of targets which are addressed using rules.
- Rules are:
    - path-based `/cat` or `/dog`
        - (example.com/users & example.com/posts)
    - host-based if you want to use different DNS names.
        - i.e. one.example.com & other.example.com
    - based on query string, headers
        - example.com/users?id=123&order=false)
-   ALB can use Server Name Indication (SNI) multiple SSL certs attached to that LB.
    - LB can direct individual domain names using SSL certs at different target groups.
- AWS does not suggest using Classic Load Balancer (CLB), these are legacy.
    - This can only use one SSL certificate.
- ALB are a great fit for microservices & container-based applications
- Has a port mapping feature to redirect to a dynamic port in ECS