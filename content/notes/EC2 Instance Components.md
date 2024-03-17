---
tags:
  - docs
---

**Amazon Machine Image (AMI)**
- AMI contains the OS settings, and other applications that you will use in your server. 
- AWS has many pre-built AMIs and custom AMIs are available on AWS Marketplace.

**Instant Type and Size**
- You can choose from a wide variety of instance types: the type and size will determine the physical properties of your instance
- Type and size depends on your workload for the instance
- You can modify your instance after launch --> "right-sizing"

**Instance Settings**
- Determine number of instances
- Specify [[EC2 Instance Purchasing Options]]
- Configure [[Amazon VPC]] and [[Subnets]], whether it should receive a public IP address or not
- Determine whether it should be in a [[EC2 Placement Groups]]
- Indicate whether instance will be joined to one of your domains/directories
- Determine the [[AWS Identity & Access Management (IAM)]] role that you'd like to provide to the instance. The IAM role will provide the instance with permissions to interact with other AWS resources indicated in its permission policy.

**Shutdown Behavior**
- Specify whether the instance should be stopped or terminated once the instance goes into the stopped state.
- Hibernation is also an option if the instance supports it

**Termination Protection**
- You can determine whether the instance can be protected from termination

**EFS File Systems**
- you can immediately mount EFS file system to your EC2 instance

**Commands**
- You can add commands that are going to be executed once the instance starts

**Storage**
- Volume is automatically created since the volume will contain the OS and other applications of your AMI
- **Data stored in an instance is not durable!**

**Tags**
- Add tags for easier identification

**Security Groups**
- You can add [[Security Groups]] that act as firewalls for your instance

**Key Pairs**
- Instance will need to be secured using one of your key pairs, need to keep a copy of the key pair
