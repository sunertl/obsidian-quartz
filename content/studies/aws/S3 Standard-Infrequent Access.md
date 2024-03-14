links:: [[Amazon S3]] | [[Minimum Storage Duration]]
tags:: [[AWS Storage]]  
___
# Overview

- Primarily used for storing infrequently accessed data but provides a way to rapidly retrieve the stored files
- Replicates your data to 3 or more [[Availability Zones]]
- 99.99% [[Availability]]
- 30-day minimum storage duration charge
- Has a data retrieval fee that is measured per gigabyte (GB)
- More expensive than [[S3 One Zone-Infrequent Access]]


## Use Cases

- As a long-term storage for long-lived, but infrequently accessed data
- For data backups
- As a data store for your Disaster Recovery (DR) files
- For storing the primary backup copies of your on-premises dataset