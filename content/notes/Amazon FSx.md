---
tags:
  - docs
---
# Overview

**Amazon FSx for Windows File Server** provides fully managed, highly reliable, and scalable file storage that is accessible over the industry-standard Service Message Block (SMB) protocol. It is built on Windows Server, delivering a wide range of administrative features such as user quotas, end-user file restore, and Microsoft Active Directory (AD) integration. Amazon FSx is accessible from Windows, Linux, and MacOS compute instances and devices. Thousands of compute instances and devices can access a file system concurrently.

Amazon FSx works with Microsoft Active Directory to integrate with your existing Microsoft Windows environments. You have two options to provide user authentication and access control for your file system: AWS Managed Microsoft Active Directory and Self-managed Microsoft Active Directory.

Take note that after you create an Active Directory configuration for a file system, you can’t change that configuration. However, you can create a new file system from a backup and change the Active Directory integration configuration for that file system. These configurations allow the users in your domain to use their existing identity to access the Amazon FSx file system and to control access to individual files and folders.


# FSx for Windows File Server

- Fully managed native windows file servers/shares
- Designed for integration with Windows environments.
    - native Windows file system, not emulated server
- Integrates with Directory Service or Self-Managed AD
- Can be used in **Single** or **Multi-AZ** within a VPC.
    - This controls the network interfaces that are available.
    - Single mode use replication in the AZ to ensure resiliency.
- Can perform full range of different backups
    - Client side and AWS side
    - Can perform automatic and on-demand backups.
- File systems can be access using VPC, Peering, VPN, Direct Connect. Native windows filesystem or Directory Services.

# FSx for Lustre
- Designed for HPC - Linux workloads Clients
- Designed for Machine Learning, Big Data, Financial Modelling
- 100 GB/s throughout & sub millisecond latencies -> **high performance!**
- Deployment types **Persistent** or **Scratch**
    - Scratch - Optimized for Short term no replication & fast ( Designed for pure performance) - NO HA, NO REPLICATION
    - Persistent - longer term, HA ( IN ONE AZ), self-healing
- Accessible over VPN or Direct Connect
- Can be backed up to S3 ( Manual or Automatic 0-35 days retention)

# Important Concepts
- VSS: User Driven Restores
- Native File System (NFS) accessible over SMB
- Windows permissions model
- Product supports Distribute File Systems (DFS), scale out file share.
- Managed service, no file server admin
- Integrates with DS and your own directory.