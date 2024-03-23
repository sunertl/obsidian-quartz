---
tags:
  - docs
---


# Overview

- Similar to [[Savings Plans]] but less flexible because you are making a commitment to a consistent instance configuration, including type and region, **for a term of 1 or 3 years**
- Possible to pay no, partially or full upfront - the more you pay, the cheaper the instance gets
- Although it offers discounts on hourly costs, you still need to commit at least a whole year’s worth of instance cost to fully maximize the discounts. If you need to reduce your cost for AWS Fargate, this option is not suitable.

# Use Cases

- Running non-interruptible workloads for a one-year or three year time frame
- Scheduled Reserved Instances are a good choice for workloads that do not run continuously, but do run on a regular schedule


> [!Example] Example
> For example, you can use Scheduled Instances for an application that runs during business hours or for batch processing that runs at the end of the week.

 
- Workloads with predictable capacity and uptime requirements
- Hosting the application servers of your production environment
- For processing the steady-state load or the baseline capacity of your workloads
- For batch jobs that cannot be interrupted once started
- For consuming Amazon SQS Queue messages in which the application should continuously process messages without any downtime
- Running the master node or core nodes of your Amazon Elastic MapReduce cluster (*cheaper than [[On-Demand Instances]]*)

# Different Types of Reserved Instances (RI)

**Standard RI**
Provide the most significant discount rates and are best suited for steady-state usage.

**Convertible RIs**
Provide a discount and the capability to change the attributes for the RI as long as the resulting RI is of equal or greater value.

**Scheduled RIs**
These are available to launch within the time windows you reserve. This option allows you to match your capacity reservation to a predictable recurring schedule that only requires a fraction of a day, a week, or a month.

|                                                                              | Standard RI | Convertible RI |
| ---------------------------------------------------------------------------- | ----------- | -------------- |
| Applies to usage across all AZs in an AWS region                             | Yes         | Yes            |
| Can be shared between multiple accounts within a consolidated billing family | Yes         | Yes            |
| Change AZ, instance size (for Linux OS), networking type                     | Yes         | Yes            |
| Change instance family, operating system, tenancy, and payment option        | No          | Yes            |
| Benefit from price reductions                                                | No          | Yes            |
| Can be bought/sold in Marketplace                                            | Yes         | No             |


