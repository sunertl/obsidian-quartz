---
tags:
  - docs
up:
  - "[[Amazon Aurora]]"
created: 2022-06-10
---
## Overview


> [!Definition] Definition
> Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora. An Aurora Serverless DB cluster is a DB cluster that automatically starts up, shuts down, and scales up or down its compute capacity based on your application’s needs. Aurora Serverless provides a relatively simple, cost-effective option for infrequent, intermittent, sporadic or unpredictable workloads. It can provide this because it automatically starts up, scales compute capacity to match your application’s usage and shuts down when it’s not in use.

Provides a version of Aurora database product without managing the resources. You still create a cluster, but it uses ACUs or Aurora Capacity Units.

For a cluster, you can set a min and max ACU based on the load and can even go down to 0 to be paused. In this case you would only be billed for storage consumed.

Billing is based on resources used on a per-second basis.

Same resilience as Aurora (6 copies across AZs).

ACUs are stateless and shared across many AWS customers and have no local storage. They can be allocated to your Aurora Serverless cluster rapidly when required. Once ACUs are allocated to a cluster, they have access to cluster storage in the same way as an Aurora Provisioned cluster.

There is a shared proxy fleet. When a customer interacts with the data they are actually communicating with the proxy fleet. The proxy fleet brokers an application with the ACU and ensures you can scale in and out without worrying about usage. This is managed by AWS on your behalf.

## Use Cases

-   Infrequently used applications.
    -   Low volume blog site.
    -   You only pay for resources as you consume them on a per second basis.
-   New applications with unpredictable workloads.
-   Great for variable workloads such as sales cycles. It can scale in and out based on demand
-   Good for development and test databases, can scale back when not needed.
-   Great for multi-tenant applications.
    -   Billing a user a set dollar amount per month per license.
    -   If your incoming load is directly tied to more revenue this makes sense.