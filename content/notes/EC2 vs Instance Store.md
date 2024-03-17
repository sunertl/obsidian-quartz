---
tags:
  - docs
---

If the read/write can be handled by EBS, that should be default.

When to use [[Elastic Block Store (EBS)]]

-   Highly available and reliable in an AZ. Can self correct against HW issues.
-   Persist independently from EC2 instances.
    -   Can be removed or reattached.
    -   You can terminated instance and keep the data.
-   Multi-attach feature of **io1**
    -   Can create a multi shared volume.
-   Region resilient backups.
-   Require up to 64,000 IOPS and 1,000 MiB/s per volume
-   Require up to 80,000 IOPS and 2,375 MB/s per instance

When to use [[EC2 Instance Store]]

-   Great value, they're included in the cost of an instance.
-   More than 80,000 IOPS and 2,375 MB/s
-   If you need temporary storage, or can handle volatility.
-   Stateless services, where the server holds nothing of value.
-   Rigid lifecycle link between storage and the instance.
    -   This ensures the data is erased when the instance goes down.