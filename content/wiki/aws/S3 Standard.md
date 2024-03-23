---
tags:
  - docs
---

# Overview

- Primarily used for storing your data that are frequently accessed
- Highly durable, highly available, and high performance object storage -> [[Durability]] | [[Availability]]
- Replicates your data to 3 or more [[Availability Zones]]
- 99.99% Availability
- No minimum storage duration charge
- No data retrieval fee


## Use Cases

- For setting up a highly available and durable static web hosting
- As a temporary storage service for storing the nightly log processing of your application, where the logs are meant to be stored for 1 day (24 hours) only. It is a cost-effective option for this case since it has no minimum storage duration charge


## Limitations

- Not cost-effective as this storage class is the most expensive among all other classes
- Not recommended for data archiving, for infrequently access files or for any workloads that require a cost-effective storage
