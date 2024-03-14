---
tags:
  - compsci/cloud/aws/infrastructure
up:
  - "[[Amazon EC2]]"
related:
---
## General Purpose

Provides a balance of compute, memory, and networking resources, and can be used for a variety of diverse workloads. Instances under the T-family have burstable performance capabilities to provide higher CPU performance when CPU is under high load, in exchange for CPU credits. Once the credits run out, your instance will not be able to burst anymore. More credits can be earned at a certain rate per hour depending on the instance size.

## Compute Optimized

Ideal for compute bound applications that benefit from high performance processors. Instances belonging to this family are well suited for batch processing workloads, media transcoding, high performance web servers, high performance computing, scientific modeling, dedicated gaming servers and ad server engines, machine learning inference and other compute intensive applications.

## Memory Optimized

Designed to deliver fast performance for workloads that process large data sets in memory

## Accelerated Computing

Uses hardware accelerators or co-processors to perform functions such as floating point number calculations, graphics processing, or data pattern matching more efficiently than CPUs

## Storage Optimized

Designed for workloads that require high, sequential read and write access to very large data sets on local storage. They are optimized to deliver tens of thousand of low-latency, random I/O operations per second to applications

## Nitro-based

The Nitro system provides bare metal capabilities that eliminate virtualization overhead and support workloads that require full access to host hardware. 

When you mount EBS Provisioned IOPS volumes on Nitro-based instances, you can provision from 100 IOPS up to 64,000 IOPS per volume compared to just up to 32,000 on other instances.