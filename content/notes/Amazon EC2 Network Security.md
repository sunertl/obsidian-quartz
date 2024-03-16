# Overview

- Security features allow to set up a secure connection to the EC2 Instance
- Control incoming and outgoing traffic to your servers
- provide permissions for your instance to access other AWS services
- you can use both Security Groups and NACL together to better control the traffic of your web servers, database servers, and other AWS resource
- **LIMITATIONS**: 
	- You can't apply a security group or NACL to your Amazon S3 buckets (you can use an S3 bucket policy and S3 ACL for this specific use case)
	- Both of these features do not provide enough protection against Cross-Site Scripting or SQL Injection attacks
	- These two are also inefficient in geographic match conditions or blocking certain countries (for these cases, you have to use an [[AWS Web Application Firewall (WAF)]] instead)
	- Conflicts can also arise between the two services (use the VPC Flow Logs to pinpoint any misconfigurations)

## [[Security Groups]]

## [[Network Access Control List (ACL)]]

## [[Security Groups & Network ACL]] 

provides main differences between Sec Groups and NACLs
