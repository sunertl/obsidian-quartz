---
tags:
  - docs
---

## Overview

- This paradigm spreads out your resources by putting them side by side rather than stacking your things on top of each other. 
- Refers to the process of adding or reducing the number of your servers or resources.
- This usually involves multiple additional resources, unlike [[Vertical Scaling]].
- The attributes of each instance can be uniform or varied based on your workloads.
- In horizontal scaling, you either 'scale out' or 'scale in' your application.
- This is perfect for distributed applications that are hosted in multiple EC2 instances

## Related Examples

- Scaling out means that you add more EC2 instances to serve the increasing request of your customers
	- you can scale out application from 2 EC2 instances to 10 instances or more to handle the additional load. You can use an Amazon Machine Image (AMI) to ensure that these instances contain the same application and system configuration. 
- Reversely, scaling in means reducing the number of EC2 instances to handle your steady-state load. The process is to just simply reduce the number of EC2 instances in the event that the surge of requests subside. -> avoiding idle resources 

## Ultimate Goal

Ensures that you have the right number of EC2 instances available to handle the load of your web applications -> Horizontal Scaling: dynamically launching or terminating EC2 instances.

## Benefits

-   No disruption while scaling up or down.
-   No real limits to scaling.
-   Uses smaller instances is less expensive.
-   Allows for better granularity.

