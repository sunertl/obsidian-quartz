---
tags:
  - CS/cloud/aws/database
up:
  - "[[Amazon DynamoDB]]"
---
# Overview

## Provisioned Capacity Mode

- Suitable if your application has predictable traffic that doesn't vary over time
- Allows you to manually set or provision the RCU (Read Capacity Unit) and WCU (Write Capacity Unit) of your DynamoDB table
- Has an [[Auto Scaling]] feature that you can configure
- Can set the target utilization, minimum provisioned capacity, and maximum provisioned capacity values in the [[Auto Scaling]] settings
- At risk of over-provisioning and having unnecessary costs when the incoming traffic is way lower than expected

## On-Demand Capacity Mode

- For applications with inconsistent traffic or has varying access patterns
- Suitable if you expect that there'll be more traffic with sharp spikes in the future
- No manual Auto Scaling setting that you can configure. The RCU & WCU are automatically scaled without any intervention
- Can be used if your application has a combination of predictable and variable traffic
- Suitable if you have clearly defined access patterns throughout the year but with variable amounts of traffic on certain days only

