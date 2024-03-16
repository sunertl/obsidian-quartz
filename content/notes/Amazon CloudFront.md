---
tags:
  - docs
up:
  - "[[AWS Network & Content Delivery]]"
related:
  - "[[Infrastructure Security]]"
  - "[[CloudFront Content Delivery]]"
created: 2023-12-12
---
## Overview

>[!definition]
>A web service that speeds up distribution of your static and dynamic web content to your users. A Content Delivery Network (CDN) service.

- It delivers your content through a worldwide network of data centers called [[Edge Locations]]. When a user requests content that you’re serving with CloudFront, the user is routed to the edge location that provides the lowest [[Latency|latency]], so that content is delivered with the best possible performance.
    - If the content is already in the edge location with the lowest [[Latency|latency]], CloudFront delivers it immediately.
    - If the content is not in that edge location, CloudFront retrieves it from an origin that you’ve defined

## Content Delivery

More details: [[CloudFront Content Delivery]]

## Performance and Availability

- CloudFront also allows you to set up multiple origins to enable redundancy with **Origin Failover**. To set up origin failover, you must have a distribution with at least two origins. Next, you create an origin group for your distribution that includes the two origins, setting one as the primary. Finally, you define a cache behavior in which you specify the origin group as your origin.
	- The two origins in the origin group can be any combination of the following: AWS origins, like Amazon S3 buckets or Amazon EC2 instances, or custom origins, like your own HTTP web server.
	- When you create the origin group, you configure CloudFront to failover to the second origin for GET, HEAD, and OPTIONS HTTP methods when the primary origin returns specific status codes that you configure.
- CloudFront is optimized for both dynamic and static content, providing extensive flexibility for optimizing cache behavior, coupled with network-layer optimizations for [[Latency|latency]] and [[Throughput|throughput]].

## Security

- CloudFront, [[AWS Shield]], [[AWS Web Application Firewall (WAF)]], and [[Route 53]] work seamlessly together to create a flexible, layered security perimeter against multiple types of attacks including network and application layer DDoS attacks.
- You can deliver your content, APIs or applications via SSL/TLS, and advanced SSL features are enabled automatically.
- Through geo-restriction capability, you can prevent users in specific geographic locations from accessing content that you’re distributing through CloudFront.
- With **[[Origin Access Identity (OAI)]]** feature, you can restrict access to an S3 bucket to only be accessible from CloudFront.
- **Field-Level Encryption** is a feature of CloudFront that allows you to securely upload user-submitted data such as credit card numbers to your origin servers.


> [!Important] Important
> If you want to require HTTPS between viewers and CloudFront, you must change the AWS region to US East (N. Virginia) in the [[AWS Certificate Manager]] console before you request or import a certificate.
> 
> If you want to require HTTPS between CloudFront and your origin, install an SSL certificate on your origin server. For example, if your origin is an [[Application Load Balancer]], you can request a certificate from [[AWS Certificate Manager]] in the region where the ALB is hosted.

## Price Classes

- You can reduce the number of [[Edge Locations]] for cost reduction
- Three price classes:
	- Price Class All: all regions - best performance
	- Price Class 200: most regions, but excludes the most expensive regions
	- Price Class 100: only the least expensive regions
