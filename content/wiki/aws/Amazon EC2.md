---
tags:
  - docs
up:
  - "[[AWS Compute]]"
related:
  - "[[EC2 Networking]]"
---
# Overview

>[!Defintion]
>Amazon Elastic Compute Cloud (EC2) allows users to rent virtual computers on which to run their own computer applications. EC2 encourages scalable deployment of applications by providing a web service through which a user can boot an Amazon Machine Image (AMI) to configure a virtual machine, which Amazon calls an "instance", containing any software desired. A user can create, launch, and terminate server-instances as needed, paying by the second for active servers – hence the term "elastic". EC2 provides users with control over the geographical location of instances that allows for latency optimization and high levels of redundancy.

>[!Important]
Shared responsibility model:
>- AWS manages data centers, hardware components, host OS
>- Customer responsible for guest OS, applying OS patches, setting up security access controls and managing data

# EC2 Core Concepts

EC2 instances are virtual machines that have an underlying operating system incl. various resources. An instance has various [[EC2 Instance Components]] that can be chosen when provisioning an instance. Instances run on EC2 Hosts that are physical service hardware which AWS manages. These are either **[[Shared Hosts]]** or **[[Dedicated Hosts & Instances#Dedicated Host|Dedicated Hosts]]**. A EC2 host contains local hardware (CPU and memory) and temporary instance store.
When instances are provisioned within a specific subnet within a [[Amazon VPC]], a primary [[Elastic Network Interface (ENI)]] is provisioned which maps to the physical hardware on the EC2 host. Subnets are also within one specific AZ. Instances can multiple network interfaces, even within different subnets as long as they're within the same AZ.
By selecting [[EC2 Instance Types]] you have granular control over what resource configuration you desire. 

# EC2 Storage Solutions

For **storage**, you can choose between [[EC2 Instance Store]] which is locally attached to your instance or [[Elastic Block Store (EBS)]] which is attached on the network. Since the storage options can be used for various use cases, it's important to understand the differences [[EC2 vs Instance Store]].

# EC2 Pricing

For **pricing**, EC2 offers various [[EC2 Instance Purchasing Options]] you can choose from, based on availability, costs and needs.

# EC2 Scaling

In order for your instance to **scale**, you can either choose between [[Horizontal Scaling]] or [[Vertical Scaling]]. [[Auto Scaling]] & [[Auto Scaling#Scaling Policies]] helps you to automatically adjust compute capacity whenever your application load changes.

Launching EC2 instances in a placement group influences how they are placed in underlying AWS hardware. Depending on your type of workload, you can create [[EC2 Placement Groups]].

# EC2 Security

For **security**, [[Security Groups]] and [[Network Access Control List (ACL)]] are the main lines of defense in protecting your [[Amazon VPC]] network. These services act as firewalls for your VPCs and control inbound and outbound traffic based on the rules you set. Although both of them are used for VPC network security, they serve two different functions and operate in a different manner. [[EC2 Instance Roles]] are the best practice ways for services to be granted permissions.

# EC2 Performance

For **performance monitoring** and in order to gather insights and metrics of your EC2 instances, use [[Amazon CloudWatch]] - depending on the metrics you want to collect, you may need to install a CloudWatch agent in your instances.