---
tags:
  - CS/cloud/aws/database
---
>[!definition]
>Amazon Relational Database Service is a distributed relational database service by Amazon Web Services. It is a web service running "in the cloud" designed to simplify the setup, operation, and scaling of a relational database for use in applications.

# Overview
*For more information on what a relational database is: [[Relational (SQL)]]*

RDS allows you to create databases in the cloud that are managed by AWS. It is actually *[[Database]] Server-as-a-Service*. It is also a [[managed database]] instance for one or more databases.
You don't need to manage the hardware or servers, eliminating the time-consuming tasks of [[hardware provisioning]], [[patching]], [[backups]], and maintenance for your database.

The following database enginges can be run on RDS:
- [[SQL Server]]
- [[MySQL]]
- [[MariaDB]]
- [[PostgreSQL]]
- [[Oracle]]
- [[Amazon Aurora]]

RDS can be deployed using
- [[AWS CloudFormation]]
- [[AWS Management Console]]
- [[AWS CLI]]
- [[Amazon RDS API]]


## Important Concepts

-  Multi-AZ feature is not free tier, extra infrastructure for standby.
    - Generally two times the price.
- The standby replica cannot be accessed directly unless a fail occurs.
    - Can't be used for scaling. It's an availability improvement not performance one.
- Failover is highly available, not fault tolerant.
- Offers only high availability and minimizes disruptions associated with software updates, backups, and instance type changes not performance improvement or scalability. (Don't for exam questions that try to trick you into choosing options that say Multi-AZ can improve performance.)
- Same region only (others AZ in the VPC).
- Backups are taken from standby which removes performance impacts.
- Failover can happen for a number of reasons.
    - Full AZ outage
    - Primary RDS failure
    - Manual failover for testing
    - If you change the type of a RDS instance, it will failover as part of changing that type.


- Concepts of [[RDS Backup & Restore]]
- You can configure the underlying [[Amazon RDS Instance Type]]  your Amazon RDS database such as its size, instance type & storage
- Purchase a [[Reserved Instances]] (for databases) to lower down your RDS costs
- Allows you to choose the [[Availability Zone]] where your database will be hosted, including its associated [[Security Groups]]
- You can deploy the RDS database in two ways:
	- [[Amazon RDS Single-AZ Deployment]]
		- one primary instance in a single AZ
	- [[Amazon RDS Multi-AZ Deployment]]
- Amazon RDS databases are suitable for applications that read or write constantly changing data, such as Online Transaction Processing (OLTP) applications (i.e. e-commerce website)
	- ACID compliant - ensures that every transaction is Atomic, Consistent, Isolated and Durable
- [[Amazon RDS Proxy]]
- [[Amazon RDS Event Notification]]
- [[Amazon RDS Read Replica]]

# Advantages over using RDS vs deploying DB on EC2

- RDS is a managed service:
	- Automated provisioning, OS patching
	- continuous backups and restore to specific timestamp (Point in Time restore -> [[RPO - Recovery Point Objective 1]])
	- Monitoring dashboards
	- Read replicas for improved read performance
	- Multi AZ setup for disaster recovery
	- Maintenance windows for upgrades
	- Scaling capability ([[Vertical Scaling]] & [[Horizontal Scaling]])
	- Storage backed by [[Elastic Block Store (EBS)]] (gp2 or io1)
	- You cannot SSH into your instance

# RDS Storage Auto Scaling

- Helps you increase storage on your RDS DB instance dynamically
- When RDS detects you are running out of free DB storage, it scales automatically
- Avoid manually scaling your database storage
- You have to set **Maximum Storage Threshold**
- Automatically modify storage if:
	- Free storage is less than 10% of allocated storage
	- Low-storage lasts at least 5 minutes
	- 6 hours have passed since last modification
- Useful for applications with unpredictable workloads
- Supports all RDS database engines

# Self-Hosted Database vs Amazon RDS Database

You can choose to self-host a database in AWS but it requires a lot of maintenance work

| Self-Hosted Database                                                                     | Amazon RDS Database                                                                                |
|:---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Can be directly accessed via SSH, RDP or other connections                               | The underlying EC2 instance CANNOT be directly accessed via SSH or RDP                             |
| Allows direct access and modification of your database configuration files               | Modify the database configuration via [[Parameter Group]] or [[Options Group]]                     |
| You have full access to the virtual machine and the underlying database                  | You can choose the actual time when Amazon RDS will apply the DB patches in its maintenance window |
| You are responsible for making your database highly available, fault tolerant and secure | Database maintenance tasks are handled automatically                                               |
| You have to apply the OS patches as well as the Database Engine patches regularly        |                                                                                                    |
| You will handle all of the database administrative tasks                                                                                         |                                                                                                    |


# RDS Security
## Encryption

[[RDS Encryption]]

## Network & IAM
- Network Security
	- RDS databases are usually deployed within a private subnet, not in a public one
	- RDS security works by leveraging security groups (the same concept as for EC2 instances) - it controls which IP / security group can communicate with RDS
- Access Management
	- [[Identity-Based Policy]] helps control who can manage AWS RDS (through the RDS API)
	- Traditional Username and Password can be used to log into the database
	- IAM-based authentication can be used to login into RDS MySQL & PostgreSQL

## IAM Authentication
- IAM database authentication works with MySQL and PostgreSQL
- You don't need a password, just an authentication token obtained through IAM & RDS API calls
- Auth token has a lifetime of 15 minutes
- Benefits
	- Network in/out must be encrypted using SSL
	- IAM to centrally manage users instead of DB
	- Can leverage IAM roles and EC2 instance profiles for easy integration
