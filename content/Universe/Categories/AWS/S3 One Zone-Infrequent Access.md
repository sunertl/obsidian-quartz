# Overview

- For storing less frequently accessed and easily reproducible data that requires immediate retrieval when needed
- 30-day minimum storage duration charge
- Cheaper than [[S3 Standard-Infrequent Access]]
- Only uses 1 Availability Zone
- 99.95% Availability (the lowest among all other Amazon S3 storage classes)


# Use Cases

- If you require a cost-effective option to store infrequently accessed data
- For workloads that do not require the availability and resilience of the Amazon S3 Standard or S3 Infrequent Access class
- For storing secondary backup copies of rarely-accessed on-premises dataset
- For storing easily recreatable data


# Limitations

- The data is replicated in a single AZ only
- Not recommended for storing your company’s primary backup copies or any critical business data that is difficult to reproduce

___
tags:: [[AWS Storage]]  