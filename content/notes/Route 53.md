---
tags:
  - docs
  - docs
up:
  - "[[AWS Network & Content Delivery]]"
related:
  - "[[Infrastructure Security]]"
---
## Overview

- Global Domain Name System (DNS)
- Provides different [[Routing Policies]]
- Allows you to register your own domain name
- Transfer a domain from another domain registrar
- Create health checks
- Route traffic flows
- Configure DNS resolvers

>[!info]
>A DNS is a system that routes a domain name to a particular IP adress.

Route 53 also allows you to route your domain name to your Elastic IP addresses, EC2 instances, static S3 websites ([[Amazon S3#Website Hosting]], [[Elastic Load Balancer (ELB)]], [[Amazon CloudFront]] distributions, etc.

Once you set up the domain name in Route 53 is to set up a hosted zone for your domain. 

>[!info]
>A [[Hosted Zone]] is essentially a container for your DNS records and subdomains. The name of your hosted zone is similar to its corresponding web domains. You can multiple subdomains within your hosted zone.



>[!important]
>**[[Public Hosted Zone]]**
Contains DNS records that specify how you want to route traffic on the public internet. Whenever you delete the hosted zone and create a new one, remember to update the name servers. [Here's a link](https://stackoverflow.com/questions/43660375/deleted-route-53-hosted-zone-cant-correctly-create-it-again) that explains it.
>
>**[[Private Hosted Zone]]**
Contains DNS records that specify how you want to route traffic in an [[Amazon VPC]]

- Amazon Route 53 automatically creates an Name Server (NS) record and an Start of Authority (SOA) record
- You can create different types of DNS records for your workloads. 
- You can also enable query logging to store the information about the queries that Route 53 receives. It tracks the domain or subdomain request, the date and time of the query, and even the DNS record type for the request.


>[!important]
>**Alias Record**
>- Lets you route traffic to selected AWS resources
>- Works like CNAME (Canonical Name) Record
>- Not visible to DNS resolvers
>- Points to a specific AWS resource
>
**Non-Alias Record**
>- Just allows you to specify the IP addresses or the custom domain names of your servers or resources.
>- Visible to DNS resolvers
>- Points to a particular IP address


## Health Checks

You can configure a health check that monitors an endpoint that you specify either by IP address or by domain name. At regular intervals that you specify, Route 53 submits automated requests over the Internet to your application, server, or other resource to verify that it’s reachable, available, and functional. Optionally, you can configure the health check to make requests similar to those that your users make, such as requesting a web page from a specific URL.

Route checks will allow for periodic health checks on the servers. If one of the servers has a bug, this will be removed from the list.

If the bug gets fixed, the health check will pass and the server will be added back into a healthy state.

Health checks are separate from, but are used by records inside R53. You don't create health checks inside records themselves.

These are performed by a fleet of global health checkers. If you think they are bots and block them, this could cause alarms.

Checks occur every 30 seconds by default. This can be increased to 10 seconds for additional costs. These checks are per health checker. Since there are many you will automatically get one every few seconds. The 10 second option will complete multiple checks per second.

There could be one of three checks

-   TCP checks: R53 tries to establish TCP with end point within 10 (fast) or 30 seconds (standard).
-   HTTP/HTTPS: Same as TCP but within 4 seconds. The end point must respond with a 200 or 300 status code within 3 seconds of checking.
-   HTTP/HTTPS String matching: Same as above, the body must have a string within the first 5120 bytes. This is chosen by the user.

It will be deemed healthy or unhealthy.

There are three types of checks.

-   Endpoint checks
-   CloudWatch alarms
-   Checks of checks (calculated)

## DNS Security Extensions (DNSSEC)

- A protocol for securing DNS traffic, verifies DNS data integrity and origin
- Works only with [[Public Hosted Zone]]
- Route 53 supports both DNSSEC for Domain Registration and Signing
- DNSSEC Signing
	- Validate that a DNS response came from Route 53 and has not been tampered with
	- Route 53 cryptographically signs each record in the Hosted Zone
	- Two keys:
		- Managed by you: Key-signing Key (KSK) - based on asymmetric CMK in [[AWS Key Management Service (KMS)]]
		- Managed by AWS: Zone-signing key (ZSK)
- When enabled, Route 53 enforces a TTL of one week for all records in the Hosted Zone (records that have TTL less than one week are not affected)

### Enable DNSSEC on a hosted zone

- Step 1 – Prepare for DNSSEC signing  
	- Monitor zone availability (through customer feedback)
	- Lower TTL for records (recommended 1 hour) • Lower SOA minimum for 5 minutes

- Step 2 – Enable DNSSEC signing and create a KSK  
	- Enable DNSSEC in Route 53 for your hosted zone (Console or CLI)  
	- Make Route 53 create a KSK in the console and link it to a Customer managed CMK

- Step 3 – Establish chain of trust  
	- Create a chain of trust between the hosted zone and the parent hosted zone • By creating a Delegation Signer (DS) record in the parent zone  
	- It contains a hash of the public key used to sign DNS records  
	- Your registrar can be Route 53 or a 3rd party registrar

- Step 4 – (good to have) Monitor for errors using CloudWatch Alarms
	- Create CloudWatch alarms for `DNSSECInternalFailure` and `DNSSECKevSigningKeysNeedingAction`

![[Pasted image 20231102213143.png]]

