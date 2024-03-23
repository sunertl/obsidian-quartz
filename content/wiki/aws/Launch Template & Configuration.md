---
tags:
  - docs
---


# Overview
They are documents which allow you to define the configuration of an EC2 instance in advance.

They allow you to configure:

-   AMIs to use; Instance Type; Storate and Key Pairs.
-   Networking and Security Groups
-   Userdata & IAM Role

Anything you usually define at the point of launching an instance can be selected with a Launch Configuration (LC) or Launch Template (LT).

LTs are newer and provide more features than LCs such as T2/T3 unlimited, placement groups, capacity reservations, elastic graphics, and versioning.

Both of these are not editable. You define them once and that configuration is locked. If you need to adjust a configuration, you must make a new one and launch it.

LTs can be used to save time when provisioning EC2 instances from the console UI / CLI.