# Overview

- Delivers automatic cost savings
- Automatically moves your objects between different access tiers whenever your access pattern changes
- 30-day minimum storage duration charge
- No data retrieval fee
- Moves data to the most cost-effective access tier without any operational overhead
- Stores the objects in four access tiers:
	- 2 low-latency access tiers
	- 2 optional archive access tiers
- Combination of [[S3 Standard]] and [[S3 Standard-Infrequent Access]].
-  Uses automation to remove overhead of moving objects.
-  Additional fee of $0.0025 per 1,000 objects tracked.
-  If an object is not accessed for 30 days, it will move into [[S3 Standard-Infrequent Access]].


## Use Cases

- Suitable if your data has an unpredictable access pattern
- For buckets with a mix of frequent and infrequent accessed data
- If the access patterns to your data vary all the time
- If some of your files are accessed frequently while the others are rarely accessed (move to Glacier)
- If some of your data are accessed less frequently than others (move to IA tier)
- If you are unsure of how frequently your data will be accessed
- If you want to keep costs low by automatically moving your data to the appropriate S3 storage class
- If your data will be accessed by users over variable periods of time
- If you need storage with no management overhead
- If you want to avoid lifecycle policies that are not consistently implemented or are partially implemented
