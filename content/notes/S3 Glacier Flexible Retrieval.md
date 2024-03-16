---
tags:
  - aws/storage
up:
  - "[[Amazon S3]]"
related:
  - "[[S3 Glacier Vault]]"
---
## Overview

- A secure, durable, and low-cost storage
- Suitable for data archiving
- A cost-effective storage solution for rarely accessed data and does not require a fast retrieval time
- Replicates your data to 3 or more Availability Zones
- 99.99% Availability
- 90 day-minimum storage duration charge
- High data retrieval fee (expensive)
- Has its own management console apart from the regular Amazon S3 console
- 2 Ways to store your data:
	- Using the Amazon S3 console
	- Using the Amazon Glacier console
- Automatically move your data from S3 Standard or S3 Standard-IA to Amazon S3 Glacier by using a lifecycle policy
- Has a resource called: [[S3 Glacier Vault]]


## Use Cases

- Applicable if your company wants to retain its archives for a specific number of years before the files can be deleted
- If you want to deny users from modifying or deleting an archive until after 1 year, 3 years, 7 years et cetera


## Archival Retrieval Options
### Expedited
- Quickly access a subset of your data archives
- Allows you to access your archived data within 1 - 5 minutes ( file size should NOT exceed 250 MB )
- Ensure sufficient retrieval capacity for your Expedited retrieval operations by purchasing provisioned capacity

### Standard
- Default option for retrieval requests
- Allows you to access any of your glacier archives within 3 – 5 hours

### Bulk
- Lowest-cost retrieval option
- Retrieves large amounts of data archive in less than half a day
- Typically completes the process within 5 – 12 hours