---
tags:
  - CS/cloud/aws/monitoring
up:
  - "[[AWS Management & Governance]]"
related:
  - "[[Security Logging and Monitoring]]"
---
## Overview

> [!summary] Summary
> Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), IT managers, and product owners. CloudWatch provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimize resource utilization. 
> 
> CloudWatch collects monitoring and operational data in the form of logs, metrics, and events. You get a unified view of operational health and gain complete visibility of your AWS resources, applications, and services running on AWS and on-premises.
> 
> You can use CloudWatch to detect anomalous behavior in your environments, set alarms, visualize logs and metrics side by side, take automated actions, troubleshoot issues, and discover insights to keep your applications running smoothly.

**Amazon CloudWatch** has available [[Amazon EC2]] metrics for you to use for monitoring CPU utilization, Network utilization, Disk performance, and Disk Reads/Writes. In case you need to monitor the below items, you need to prepare a custom metric using a Perl or other shell script, as there are no ready to use metrics for:

1. Memory utilization
2. Disk swap utilization
3. Disk space utilization
4. Page file utilization
5. Log collection


## CloudWatch Agent

>[!important]
>Although CloudWatch is capable of capturing different types of data from your resources, but system-level metrics and logs cannot be directly monitored in CloudWatch. You need to install a CloudWatch agent into your EC2 instances. 

CloudWatch Agent is required for OS visible data. It sends this data into CW for CW to function, it needs configuration and permissions in addition to having the CW agent installed. The CW agent needs to know what information to inject into CW and CW Logs.

The agent also needs some permissions to interact with AWS. This is done with a [[IAM Role 1|role]] as best practice. The IAM role has permissions to interact with CW logs. The IAM role is attached to the instance which provides the instance and anything running on the instance, permissions to manage CW logs.

The data requested is then injected in CW logs. There is one log group for each individual log we want to capture. There is one log stream for each group for each instance that needs management.

We can use parameter store to store the configuration for the CW agent.

**Further reading**: [[Unified CloudWatch Agent]]


## CloudWatch Logs

### Overview
- Public service - usable from AWS or on-premises
- Store, monitor and access logging data
- AWS integrations - EC2, VPC Flow Logs, Lambda, CloudTrail, R53, etc.
	- individual integrations or you can use the unified CloudWatch Agent
- Can generate metrics based on logs 

**Further reading: [[Amazon CloudWatch Logs]]**


## CloudWatch Alarms

> [!summary] Summary
> Alarms are used to trigger notifications for any metric.

**Further reading: [[Amazon CloudWatch Alarms]]**
