---
tags:
  - docs
up:
  - "[[AWS Network & Content Delivery]]"
related:
  - "[[Infrastructure Security]]"
---
## Overview

>[!summary] Summary
>AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits and bots that may affect availability, compromise security, or consume excessive resources. 

AWS WAF gives you control over how traffic reaches your applications by enabling you to create security rules that control bot traffic and block common attack patterns, such as SQL injection or cross-site scripting. You can also customize rules that filter out specific traffic patterns. You can get started quickly using Managed Rules for AWS WAF, a pre-configured set of rules managed by AWS or AWS Marketplace Sellers to address issues like the OWASP Top 10 security risks and automated bots that consume excess resources, skew metrics, or can cause downtime. These rules are regularly updated as new issues emerge. AWS WAF includes a full-featured API that you can use to automate the creation, deployment, and maintenance of security rules.

## Behaviors

## Allow all requests except the ones that you specify
This is useful when you want CloudFront or an Application Load Balancer to serve content for a public website, but you also want to block requests from attackers.

## Block all requests except the ones that you specify
This is useful when you want to serve content for a restricted website whose users are readily identifiable by properties in web requests, such as the IP addresses that they use to browse to the website.

## Count the requests that match the properties that you specify
When you want to allow or block requests based on new properties in web requests, you first can configure AWS WAF to count the requests that match those properties without allowing or blocking those requests. This lets you confirm that you didn’t accidentally configure AWS WAF to block all the traffic to your website. When you’re confident that you specified the correct properties, you can change the behavior to allow or block requests.

## Use Cases

You can deploy AWS WAF on [[Amazon CloudFront]] as part of your CDN solution, the [[Application Load Balancer]] that fronts your web servers or origin servers running on [[Amazon EC2]], [[Amazon API Gateway]] for your REST APIs, or AWS AppSync for your GraphQL APIs. With AWS WAF, you pay only for what you use and the pricing is based on how many rules you deploy and how many web requests your application receives.

When you use AWS WAF on a [[Regional Service]], such as [[Application Load Balancer]], [[Amazon API Gateway]], and [[AWS AppSync]], your rules run in the region and can be used to protect Internet-facing resources as well as internal resources. This means security doesn’t come at the expense of performance. Blocked requests are stopped before they reach your web servers.

## Rules

### Rate-Based Rules 

A rate-based rule tracks the rate of requests for each originating IP address and triggers the rule action on IPs with rates that go over a limit. You set the limit as the number of requests per 5-minute time span. You can use this type of rule to put a temporary block on requests from an IP address that’s sending excessive requests.

### Managed Rules
- Library of over 190 managed rules
- Ready to use rules that are managed by AWS and AWS marketplace sellers


## Web ACL - Logging

- You can send your logs to an:
	- [[Amazon CloudWatch Logs#Log groups|CloudWatch Logs log group]] - 5 MB per second
	- [[S3 Bucket|S3 bucket]] - 5 minutes interval
	- [[Amazon Kinesis Data Firehose|Kinesis Data Firehose]] - limited by Firehose quotas

![[Pasted image 20231102210324.png]]

