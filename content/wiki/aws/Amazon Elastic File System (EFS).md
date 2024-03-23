---
tags:
  - docs
up:
  - "[[Amazon EC2]]"
---
# Overview

>[!definition]
>**Amazon EFS** is a fully-managed service that makes it easy to set up and scale **file storage** in the Amazon Cloud. With a few clicks in the AWS Management Console, you can create file systems that are accessible to Amazon EC2 instances via a file system interface (using standard operating system file I/O APIs) and supports full file system access semantics (such as strong consistency and file locking).

Amazon EFS file systems can automatically scale from gigabytes to petabytes of data without needing to provision storage. Tens, hundreds, or even thousands of Amazon EC2 instances can access an Amazon EFS file system at the same time, and Amazon EFS provides consistent performance to each Amazomen EC2 instance. Amazon EFS is designed to be highly durable and highly available.

# Architecture

EFS moves the instances closer to being stateless.

- EFS is an implementation of NFSv4
- EFS file systems are created and mounted in Linux.
- EFS storage exists separately from an EC2 instance like EBS does.
    - **EBS is block storage
    - **EFS is file storage**
- Media can be shared between many EC2 instances.
- EFS is a private service.
    - Isolated to the VPC its provisioned into.
    - Access is via mount targets inside the VPC.
- EFS access outside of the VPC with
    - [[VPC Peering]]
    - VPN connections
    - AWS [[AWS Direct Connect]]

EFS runs inside a VPC. Inside EFS you create file systems and these use **POSIX permissions**. EFS is made available inside a VPC via mount targets. Mount targets have IP addresses taken from the IP address range of the subnet they're inside. For HA, you need to make sure that you put mount targets in each AZ the system runs in.

You can use hybrid networking to connect to the same mount targets.

[[Amazon DynamoDB]] cannot access EFS

# Important Concepts

-   EFS is Linux Only
-   Two performance modes:
    -   **General purpose** is good for _latency sensitive_ use cases.
        -   General purpose should be default for 99.9% of uses.
    -   **Max I/O performance** mode can scale to higher levels of aggregate t-put and IOPS but it does have increased latencies.
-   Two throughput modes:
    -   Bursting works like GP2 volumes inside EBS with a burst pool. The more data you store in the FS, the better performance you get.
    -   Provisioned t-put modes can specify t-put requirements separately from size.
-   Two storage classes available:
    -   Standard
    -   Infrequent access
    -   Can use lifecycle policies to move data between classes.
