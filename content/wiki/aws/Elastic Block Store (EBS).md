---
tags:
  - docs
---

# Overview

>[!INFO]
>An Amazon EBS volume is a durable, block-level storage device that you can attach to a single EC2 instance. You can use EBS volumes as primary storage for data that requires frequent updates, such as the system drive for an instance or storage for a database application. You can also use them for throughput-intensive applications that perform continuous disk scans. EBS volumes persist independently from the running life of an EC2 instance.

  
- EBS stands for Elastic Block Store
- Mainly operates on the hardware level
- Allocate block storage **volumes** to instances.
- A type of a block storage like the [[EC2 Instance Store]]
- Volumes are isolated to one AZ.
    - The data is highly available and resilient for that AZ.
    - All of the data is replicated within that AZ. The entire AZ must have a major fault to go down.
    - Can be attached to any EC2 instances in the same Availability Zone only
- Generally one volume to one instance, except **io1** with multi-attach
- Its data is more persistent and will not get lost even if the EC2 instance was stopped, restarted, or terminated
- Can be encrypted at rest using [[AWS Key Management Service (KMS)]]
- You can attach one or more Amazon EBS volumes in a single EC2 instance
- Has a GB/m fee regardless of instance state.
- EBS maxes at 80k IOPS per instance and 64k vol (io1)
- Max 2375 MB/s per instance, 1000 MiB/s (vol) (io1)

# Important Concepts

- When you create an EBS volume in an Availability Zone, it is automatically replicated within that zone to prevent data loss due to a failure of any single hardware component.
- After you create a volume, you can attach it to any EC2 instance in the same Availability Zone
- Amazon EBS Multi-Attach enables you to attach a single Provisioned IOPS SSD (io1) volume to multiple Nitro-based instances that are in the same Availability Zone. However, other EBS types are not supported.
- An EBS volume is off-instance storage that can persist independently from the life of an instance. You can specify not to terminate the EBS volume when you terminate the EC2 instance during instance creation.
- EBS volumes support live configuration changes while in production which means that you can modify the volume type, volume size, and IOPS capacity without service interruptions.
- Amazon EBS encryption uses 256-bit Advanced Encryption Standard algorithms (AES-256)
- EBS Volumes offer 99.999% SLA.

# Use Cases & Availability

- Suitable for a variety of workloads such as databases, enterprise applications, big data analytics engines, file systems, media workflows, and others
- Allows you to store and retrieve your data with high throughput and low latency
- The instance and its attached EBS volumes are logically attached together and are both located within a single Availability Zone, which significantly reduces latency
- Since the underlying physical resources that power your instance and EBS volumes are located within the same city or geographic area, Amazon EBS is capable of providing low latency read or write access to your data
- There are differences between EBS and [[EC2 Instance Store]] - see here: [[EC2 vs Instance Store]]

# EBS Options

- Two physical storage types available (SSD/HDD)
- Varying level of performance (IOPS, T-put)
- Billed as GB/month.
    - If you provision a 1TB for an entire month, you're billed as such.
    - If you have half of the data, you are billed for half of the month.
-  Four [[EBS Types]], each with a dominant performance attribute.
    - [[EBS Types#General Purpose SSD]]
    - [[EBS Types#Provisioned IOPS SSD]]
        -  maximum IOPS such as databases
    -   [[EBS Types#Througput Optimized HDD]]
        -   maximum t-put for logs or media storage
    - [[EBS Types#Cold HDD]]

![](https://udemy-images.s3.amazonaws.com/redactor/raw/2019-01-19_22-34-15-d1fd30e8eaa8701ddd964e5878e78242.png)


![](https://udemy-images.s3.amazonaws.com/redactor/raw/2019-01-19_05-52-53-2f6fe79f1600d1f1c4eaab87872423d7.png)

# EBS Backup

>[!IMPORTANT]
>- Efficient way to backup EBS volumes to S3.
>- The data becomes region resilient.
>- Can be used to migrate data between hosts.


[[EBS Snapshots]] are incremental volume copies to S3. The first is a **full copy** of `data` on the volume. This can take some time. EBS won't be impacted, but will take time in the background. Future snaps are incremental, consume less space and are quicker to perform.

# EBS Encryption
[[EBS Encryption]] provides [[Encryption at Rest]] for block volumes and snapshots.



___
tags:: [[Minimum Storage Duration]]
