---
tags:
  - docs
up:
  - "[[Amazon DynamoDB]]"
created: 2022-10-15
---
# Overview

This runs from within a VPC and is designed to be deployed to multiple AZs in that VPC. Must be deployed across AZs to ensure it is highly available.

DAX is a cluster service where nodes are placed into different AZs. There is a **primary node** which is the read and write note. This replicates out to other nodes which are **replica nodes** and function as read replicas. With this architecture, we have an EC2 instance running an application and the DAX SDK. This will communicate with the cluster. On the other side, the cluster communicates with DynamoDB.

DAX maintains two different caches. First is the **item cache** and this caches individual items which are retrieved via the **GetItem** or **BatchGetItem** operation. These operate on single items and must specify the items partition or sort key.

There is a **query cache** which holds data and the parameters used for the original query or scan. Whole query or scan operations can be rerun and return the same cached data.

Every DAX cluster has an endpoint which will load balance across the cluster. If data is retrieved from DAX directly, then it's called a cache hit and the results can be returned in microseconds.

Any cache misses, so when DAX has to consult DynamoDB, these are generally returned in single digit milliseconds. Now in writing data to DynamoDB, DAX can use write-through caching, so that data is written into DAX at the same time as being written into the database.

If a cache miss occurs while reading, the data is also written to the primary node of the cluster and the data is retrieved. And then it's replicated from the primary node to the replica nodes.

When writing data to DAX, it can use write-through. Data is written to the database, then written to DAX.


# Important Concepts
- Primary node which writes and Replicas which support read operations.
- Nodes are HA, if the primary node fails there will be an election and secondary nodes will be made primary.
- In-memory cache allows for much faster read operations and significantly reduced costs. If you are performing the same set of read operations on the same set of data over and over again, you can achieve performance improvements by implementing DAX and caching those results.
- With DAX you can scale up or scale out.
- DAX supports write-through. If you write data to DynamoDB, you can use the DAX SDK. DAX will handle that data being committed to DynamoDB and also storing that data inside the cache.
- DAX is not a public service and is deployed within a VPC. Anything that uses that data many times will benefit from DAX.
- Any questions which talk about caching with DynamoDB, assume it is DAX.
