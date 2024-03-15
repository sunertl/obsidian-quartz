---
tags:
  - CS/cloud/aws/security
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Threat Detection and Incident Response]]"
---
# Permitted Services

AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for 8 services:

- Amazon EC2 instances, NAT Gateways, and Elastic Load Balancers
- Amazon RDS
- Amazon CloudFront  
- Amazon Aurora
- Amazon API Gateways
- AWS Lambda and Lambda Edge functions
- Amazon Lightsail resources
- Amazon Elastic Beanstalk environments

# Prohibited Activities

- DNS zone walking via Amazon Route 53 Hosted Zones
- Denial of Service (DoS), Distributed Denial of Service (DDoS), Simulated DoS, Simulated DDoS
- Port flooding
- Protocol flooding
- Request flooding (login request flooding, API request flooding)

# DDoS Simulation Testing on AWS

- Controlled DDoS attack which enables you to evaluate the resiliency of your applications and to practice event response
- Must be performed by an approved AWS DDoS Test Par tner
- The target can be either Protected Resources or Edge-Optimized API
- Gateway that is subscribed to Shield Advanced
- Attack must NOT be originated from AWS resources
- Attack must NOT exceed 20 Gigabits/second
- Attack must NOT exceed 5 million packets/second for CloudFront and 50,000 packets/second for any other service

