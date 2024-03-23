---
tags:
  - docs
---

# Overview

- you can attach multiple EBS volumes to an EC2 instance, under the condition that at least one volume is a Root EBS Volume.
- The root volume contains the system image used to boot the instance while the rest of the EBS volume stores your data
- You can mix the type of EBS volumes attached to the EC2 instance to meet the requirements

# Solid State Drive (SSD)
- Suitable for transactional workloads 
- For various types of applications and systems with frequent read/write operations with small I/O sizes
- Performance attributes: IOPS

## General Purpose SSD
- Provides a balance of price and performance for your workloads
- Recommended for most workloads
- Also suitable for apps with unpredictable or unknown access patterns
- Provides a configurable and consistent IOPS to allow you to accomodate the changes in your data storage requirements
- Suitable for low-latency interactive apps in production as well as your development and test environments
- For your infrequently accessed applications or systems that:
	- only peaks during certain times of the day
	- Has a varying Disk I/O operations
- Provides ample IOPS for your applications but not on par with what a Provisioned IOPS type can give
- **The most cost-effective storage option that does not sacrifice performance**

## Provisioned IOPS SSD
- Primarily used for mission-critical, low-latency, or high-throughput workloads
- Provides sub-millisecond latency and consistent IOPS performance
- Allows you to set the amount of available IOPS of your EBS volume
- For hosting data to your applications that makes small reads and writes to a small file system
- For applications that require a number of high read and write IOPS performance
- For fixing latency issues
- For scenarios where your database storage performance is the bottleneck
- For storage systems that require a configurable and consistent IOPS

# Hard Disk Drives (HDD)
- Optimized for large streaming workloads
- For various types of applications and systems with large, sequential I/O operations
- Performance attribute: throughput (mb/s)

## Througput Optimized HDD
- A low-cost HDD designed for frequently accessed, throughput-intensive workloads
- Can be used for your Big data applications, Data Warehouses, and Log Processing
- Cannot be used as your boot (root device) volume

## Cold HDD
- Lowest-cost HDD storage type
- Meant for storing less frequently accessed workloads
- The most cost-effective storage EBS type option for data archiving only since its throughput performance is substantially low
- Suitable for throughput-oriented storage for data that is infrequently accessed
- Perfect for scenarios where the lowest storage cost is of the utmost importance

# Other Considerations

- If you just need a temporary storage for your data, use EC2 Instance Store instead
- If you have to store your application or system data in a POSIX-compliant hierarchical directory structure (use Amazon EFS instead)
- If you have multiple applications that are concurrently accessing the same files at the same time, it is better to use the Amazon EFS or Amazon FSx service instead
- If you need to store your static data in the most cost-effective way, it’s more appropriate and cheaper to store them in Amazon S3


![[Pasted image 20220212175442.png]]

___
tags:: [[AWS Storage]]  