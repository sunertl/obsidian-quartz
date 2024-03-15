---
tags:
  - aws/storage
up:
  - "[[Elastic Block Store (EBS)]]"
related:
  - "[[Amazon EC2]]"
---
## Overview

- An incremental backup that internally uses [[Amazon S3]] to persist your data
- It only saves the data blocks that have changed after your most recent snapshot
- Allows you to restore the state of your EBS volume in the event of data loss
- Enables you to copy your EBS volume to another AWS Region for your data migration, disaster recovery activities
- Can be used to encrypt an unencrypted Amazon EBS volume.
- Automate the creation, retention, and deletion of your EBS snapshots and EBS-backed AMIs using the **Amazon Data Lifecycle Manager (Amazon DLM) service**

> [!important]
> Combined with the monitoring features of [[Amazon CloudWatch]] Events and [[AWS CloudTrail]], Amazon DLM provides a complete backup solution for EBS volumes at no additional cost.



## Snapshot & Volume Performance

-   When creating a new EBS volume without a snapshot, the performance is available immediately.
-   When restoring from S3, performs **Lazy Restore**
    -   If you restore a volume, it will transfer it slowly in the background.
    -   If you attempt to read data that hasn't been restored yet, it will immediately pull it from S3, but this will achieve lower levels of performance than reading from EBS directly.
    -   You can force a read of every block all data immediately using DD.

Fast Snapshot Restore (FSR) allows for immediate restoration. You can create 50 of these FSRs per region. When you enable it on a snapshot, you pick the snapshot specifically and the AZ that you want to be able to do instant restores to. Each combination of Snapshot and AZ counts as one FSR set. You can have 50 FSR sets per region. FSR is not free and can get expensive with lost of different snapshots.

## Snapshot Consumption & Billing

Billed using a GB/month metric. 20 GB stored for half a month, represents 10 GB-month.

This is used data, not allocated data. If you have a 40 GB volume but only use 10 GB, you will only be charged for the allocated data. This is not how EBS itself works.

The data is incrementally stored which means doing a snapshot every 5 minutes will not necessarily increase the charge as opposed to doing one every hour.


## Sharing Snapshots

With Amazon EBS, you can create point-in-time snapshots of volumes, which are stored in [[Amazon S3]]. See here for sharing encrypted EBS snapshots: [[Sharing Encrypted EBS Snapshots]]

