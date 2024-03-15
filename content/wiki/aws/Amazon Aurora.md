---
tags:
  - "#aws/database"
up:
  - "[[AWS - Database]]"
---
# Overview

- A fully managed database service and also a type of database engine within [[Amazon RDS]].
- Scales automatically, performs faster, and costs lower
- Automated failover
- A relational database that is compatible with MySQL and PostgreSQL
- Can automatically grow or scale its storage
- Performs faster than other databases
- Can scale the computing components and storage automatically without any manual intervention
- The database cluster typically lags behind the primary instance by a few milliseconds only
- Provides less than 1 second of read replication [[Latency]] for Aurora replicas in the same or different AWS Region

**Amazon Aurora** typically involves a cluster of DB instances instead of a single instance. Each connection is handled by a specific DB instance. When you connect to an Aurora cluster, the host name and port that you specify point to an intermediate handler called an [[Aurora Endpoints]]. Aurora uses the endpoint mechanism to abstract these connections. Thus, you don’t have to hardcode all the hostnames or write your own logic for load-balancing and rerouting connections when some DB instances aren’t available.

For certain Aurora tasks, different instances or groups of instances perform different roles. For example, the primary instance handles all data definition language (DDL) and data manipulation language (DML) statements. Up to 15 Aurora Replicas handle read-only query traffic.

Using endpoints, you can map each connection to the appropriate instance or group of instances based on your use case. For example, to perform DDL statements you can connect to whichever instance is the primary instance. To perform queries, you can connect to the reader endpoint, with Aurora automatically performing load-balancing among all the Aurora Replicas. For clusters with DB instances of different capacities or configurations, you can connect to custom endpoints associated with different subsets of DB instances. For diagnosis or tuning, you can connect to a specific instance endpoint to examine details about a specific DB instance.

The custom endpoint provides load-balanced database connections based on criteria other than the read-only or read-write capability of the DB instances. For example, you might define a custom endpoint to connect to instances that use a particular AWS instance class or a particular DB parameter group. Then you might tell particular groups of users about this custom endpoint. For example, you might direct internal users to low-capacity instances for report generation or ad hoc (one-time) querying, and direct production traffic to high-capacity instances.

# Use Cases

- For migrating legacy applications hosted on-premises that needs to be re-architected and reduce operating costs
- If it is required to re-architect your application by using technologies that do not require any IT administration team to regularly manage your servers or clusters
- If you need to turn your monolithic application into microservices architecture with serverless resources
- Can be used for serverless stack with the application containers running on AWS Fargate and your database on Aurora Serverless
- For sporadic usage patterns
- If your application has:
	- Extremely high usage at the beginning of each month
	- An unpredictable usage at the start of each weak
	- A moderate usage over the weekend
- For situations where it is difficult to predict the application demand or to choose the most suitable instance size of your database due to the constantly changing usage
- If a cost-effective database platform is required which does not require any database modifications
- If you need to automatically scale the capacity up or down based on your application's needs
- For applications with infrequent access patterns
- Automatically scales down your database capacity if there's less incoming traffic coming in, without any manual intervention
- For migrating your on-premises database to AWS Cloud without having to worry about its particular database instance type
- If you need to eliminate the need to manually modify your database instance type in anticipation of the changes in the number of your users or workloads

# Aurora DB Cluster

It uses a **cluster** which is:

-   A single primary instance and 0 or more replicas.
-   The replicas within Aurora can be used for reads during normal operation.
    -   Provides benefits of RDS multi-AZ and read-replicas.
-   Aurora doesn't use local storage for the compute instances.
    -   An Aurora cluster has a shared cluster volume.
    -   Provides faster provisioning.
    -   Improved availability.
    -   Better performance.
- Aurora cluster functions across a number of availability zones.
- There is a primary instance and a number of replicas. The read applications from applications can use the replicas.
- There is a shared storage of **max 64 TiB** across all replicas. This uses 6 copies across AZs.
- All instances have access to these storage nodes. This replication happens at the storage level. No extra resources are consumed during replication.
- By default the primary instance is the only one who can write. The replicas will have read access.
- Aurora automatically detects hardware failures on the shared storage. If there is a failure, it immediately repairs that area of disk and recreates that data with no corruption.
- With Aurora you can have up to 15 replicas and any of them can be a failover target. The failover operation will be quicker because it doesn't have to make any storage modifications.
- Cluster shared volume is based on SSD storage by default.
    - Provides high IOPS and low latency.
    - No way to select magnetic storage.
- Aurora cluster does not specify the amount of storage needed.
    - This is based on what is consumed.
- High water mark billing or billed for the most used.
    - Storage which is freed up can be re-used.
    - If you reduce a lot of storage, you will need to create a brand new cluster and migrate data from the old cluster to the new cluster.
- Storage is for the cluster and not the instances which means Replicas can be added and removed without requiring storage, provisioning, or removal.

Aurora clusters like RDS use [[Aurora Endpoints]], so these are DNS addresses which are used to connect to the cluster. Unlike RDS, Aurora clusters have multiple endpoints that are available for an application.


# Costs

- Costs more than RDS (20% more) - but is more efficient  
- No free-tier option
-   Aurora doesn't support micro instances
-   Beyond RDS singleAZ (micro) Aurora provides best value.
-   Compute is billed per second with a 10 minute minimum.
-   Storage is billed using the high watermark for the lifetime using GB-Month.
    -   Additional IO cost per request made to the cluster shared storage.
-   100% DB size in backups are included for free.
    -   100 GB cluster will have 100 GB of storage for backups.

# Amazon Aurora Serverless

- Recommended for sporadic usage workloads or with unpredictable usage
- Pay your database usage on a per-second basis
- Provides a more cost-effective option than the regular Amazon RDS or Amazon Aurora databases
- [[Amazon Aurora Serverless]]

# Aurora High Availability and Read Scaling

- 6 copies of your data across 3 AZ
	- 4 copies out of 6 needed for writes
	- 3 copies out of 6 needed for reads
	- Self healing with peer-to-peer replication
	- Storage is striped across 100s of volumes
- One Aurora instance takes writes (master)
- Automated failover for master in less than 30 seconds
- Master + up to 15 Aurora Read Replicas serve reads
- Support for Cross Region Replication

# Aurora Global Databases

Introduces the idea of secondary regions with up to 16 read only replicas. Replication from primary region to secondary regions happens at the storage layer and typically occurs within one second.

-   Great for _cross region disaster recovery and business continuity_.
-   Global read scaling
    -   Low latency performance improvements for international customers.
-   The application can perform read operations against the read replicas.
-   There is ~1s or less replication between regions.
-   It is one way replication.
-   No additional CPU usage is needed, it happens on the storage layer.
-   Secondary regions can have 16 replicas.
    -   All can be promoted to Read or Write in a DR situation.
-   Maximum of 5 secondary regions.


**Amazon Aurora Global Database** is designed for globally distributed applications, allowing a single Amazon Aurora database to span multiple AWS regions. It replicates your data with no impact on database performance, enables fast local reads with low latency in each region, and provides disaster recovery from region-wide outages.

Aurora Global Database supports storage-based replication that has a latency of less than 1 second. If there is an unplanned outage, one of the secondary regions you assigned can be promoted to read and write capabilities in less than 1 minute. This feature is called Cross-Region Disaster Recovery. An [[RPO - Recovery Point Objective 1]] of 1 second and an [[RTO - Recovery Time Objective 1]] of less than 1 minute provides you a strong foundation for a global business continuity plan.
