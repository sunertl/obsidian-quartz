---
tags:
  - docs
up:
  - "[[Amazon VPC]]"
related:
  - "[[Infrastructure Security]]"
---
## Overview
---
>[!summary] Summary
> A VPC Endpoint enables private connections between your VPC and supported AWS services and VPC endpoint services powered by [[AWS PrivateLink]].


> [!Important] Important
> Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.

A VPC endpoint does not require an [[Internet Gateway]], virtual private gateway, [[NAT Devices]], VPN connections or [[AWS Direct Connect]] connection.

## Interface Endpoints
---
- An interface endpoint is an **elastic network interface with a private IP address from the IP address range of your subnet**.
- It **serves as an entry point for traffic destined to a supported AWS service or a VPC endpoint service**.
- Interface endpoints are **powered by [[AWS PrivateLink]]**.
- Provide private access to AWS Public Services.
    - Anything EXCEPT S3 and DynamoDB
- These are not HA by default and are added to specific subnets.
    - For HA, add one endpoint, to one subnet, per AZ used in the VPC
    - Must add one endpoint for one subnet per AZ
- Network access controlled via security groups.
- You can use Endpoint policies to restrict what can be accessed with the endpoint.
- ONLY TCP and IPv4 at the moment.
- Behind the scenes, it uses _**PrivateLink**_.
    -   PrivateLink allows external services to be injected into your VPC either from AWS or $3^{rd}$ parties.
- Endpoint provides a **NEW** service endpoint DNS
    -   e.g. `vpce-123-xyz.sns.us-east-1.vpce.amazonaws.com`
- **Regional DNS** is one single DNS name that works whatever AZ you're using to access the interface endpoint. Good for simplicity and HA.
- **Zonal DNS** resolved to that one specific interface in that one specific AZ.
- Either of those two points of endpoints can be used by applications to directly and immediately utilize interface endpoints.
- PrivateDNS associates R53 private hosted zone with your VPC. This private hosted zone carries a replacement DNS record for the default service endpoint DNS name. It overrides the default service DNS with a new version that points at your interface endpoint. Enabled by default.

## Gateway Endpoints
---
- A gateway endpoint is **for supported for AWS services only**.
- You specify a gateway endpoint as a route table target for traffic destined to the following AWS services:
	- [[Amazon S3]]
	- [[Amazon DynamoDB]]

- Provide _private_ access to S3 and DynamoDB
	- Allow a private only resource inside a VPC or any resource inside a private-only VPC access to S3 and DynamoDB. (Remember that both S3 and DynamoDB are public services)

Normally when you want to access a public service through a VPC, you need infrastructure. You would create an IGW and attach it to the VPC. Resources inside need to be granted IP address or implement one or more NAT gateways which allow instances with private IP addresses to access these public services.

- When you allocate a gateway endpoint to a subnet, a _**prefix list**_ is added to the route table. The target is the gateway endpoint. Any traffic destined for S3, goes via the gateway endpoint. The gateway endpoint is highly available for all AZs in a region by default.
- With a gateway endpoint you set which subnet will be used with it and it will configure automatically. A gateway endpoint is a VPC gateway object. 
	- Endpoint policy controls what things can be connected to by that endpoint.
- Gateway endpoints can only be used to access services in the same region. Can't access cross-region services. You cannot, for instance, access an S3 bucket located in the `ap-southeast-2` region from a gateway endpoint in the `us-east-1` region. 
- Prevent Leaky Buckets: S3 buckets can be set to private only by allowing access ONLY from a gateway endpoint. For anything else, the _implicit deny_ will apply.

A limitation is that they are only accessible from inside that specific VPC.


## Gateway Endpoints vs Interface Endpoints
---
**Gateway endpoints** work using prefix lists and route tables so they do not need changes to the applications. The application thinks it's communicating directly with S3 or DynamoDB and all we're doing by using a gateway endpoint is influencing the route that the traffic flow uses. Instead of using IGW, it goes via gateway endpoint and can use private IP addressing. Gateway endpoints because they are VPC gateway logical object; they are **highly available by design**

**Interface Endpoints** uses DNS and a private IP address for the interface endpoint. You can either use the endpoint specific DNS names or you can enable PrivateDNS which overrides the default and allows unmodified applications to access the services using the interface endpoint. This doesn't use routing and only DNS. Interface endpoints because they use normal VPC network interfaces are **not highly available**. Interface can be accessed from [[AWS Direct Connect]] and [[AWS Site-to-Site VPN]]


> [!Important] Important
Make sure as a Solutions Architect when you are designing an architecture if you are utilizing multiple AZs then you need to put interface endpoints in every AZ that you use inside that VPC.

## Endpoint Policy
---
>[!summary] Summary
> Controls which AWS principals (AWS accounts, IAM users, IAM Roles) can use the VPC Endpoint to access AWS services

- Can be attached to both Interface Endpoint and Gateway Endpoint
- Can restrict specific API calls on specific resources
- Doesn’t override or replace Identity-based Policies or service-specific policies (e.g., S3 bucket policy)
- Note: can use aws:PrincipalOrgId to restrict access only within the Organization

![[Pasted image 20231031205258.png]]