---
tags:
  - docs
---

# Overview

-   Local **block storage** attached to an instance.
-   Physically connected to one EC2 host.
    -   They are isolated to that one specific host.
    -   Instances on that host can access them.
-   Highest storage performance in AWS.
-   Included in instance price, use it or lose it.
-   Can be attached ONLY at launch. Cannot be attached later.

Each instance has a collection of volumes that are locked to that specific host. If the instance moves, the data doesn't.

Instances can move between hosts for many reasons:

-   If an instance is stopped and started, that migrates hosts.
-   If a host undergoes AWS maintenance, it will be wiped.
-   If you change the type of an instance, these will be lost.
-   If a physical hardware fails, then the data is gone.

The number, size, and performance of instance store volumes vary based on the type of instance used. Some instances do not have any instance store volumes at all. There differences between [[Elastic Block Store (EBS)]] and Instance Store - see here: [[EC2 vs Instance Store]]

# Important Concepts

-   Instance store volumes are local to EC2 host.
-   Can only be added at launch time. Cannot be added later.
-   Any data on instance store data is lost if it gets moved, or resized.
-   Highest data performance in all of AWS.
-   You pay for it anyway, it's included in the price.
-   TEMPORARY