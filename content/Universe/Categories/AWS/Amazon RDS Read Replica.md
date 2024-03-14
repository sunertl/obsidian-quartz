---
tags:
  - "#compsci/cloud/aws/architecture"
  - "#compsci/cloud/aws/database"
up:
  - "[[Amazon RDS]]"
---
# Overview

- Amazon RDS Read Replicas provide enhanced performance and durability for RDS database (DB) instances. 
- They make it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads. 
- You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput. 
- Read replicas can also be promoted when needed to become standalone DB instances. Read replicas are available in Amazon RDS for MySQL, MariaDB, PostgreSQL, Oracle, and SQL Server as well as Amazon Aurora.
	- Useful for: database sharding, implementing failure recovery, performing Data Definition Language (DDL) operations
	- Lessens the impact to the primary DB instance brought by rebuilding indexes, scheduled jobs, and other processing
	- Helpful if your primary AWS Region experiences an outage
	- Can be deployed to a different AWS Region and be promoted as the primary DB instance in the event that the AWS Region of your source/primary database experiences a downtime
- Cannot directly create an encrypted Read Replica from an unencrypted database instance
- Can be created from your encrypted database instances but not from the unencrypted ones
- An encrypted cross-region read replica can be launched as long as the target region and an encryption key in AWS KMS for that particular region are supplied
- Allows the use of a custom encryption key or the default encryption key for Amazon RDS that is created by AWS KMS in each region
- For the MySQL, MariaDB, PostgreSQL, Oracle, and SQL Server database engines, [[Amazon RDS]] creates a second DB instance using a snapshot of the source DB instance. It then uses the engines' native asynchronous replication to update the read replica whenever there is a change to the source DB instance. 
- The read replica operates as a DB instance that allows **only read-only connections**; applications can connect to a read replica just as they would to any DB instance. Amazon RDS replicates all databases in the source DB instance.
- [[Amazon Aurora]] further extends the benefits of read replicas by employing an SSD-backed virtualized storage layer purpose-built for database workloads.
- [[Amazon Aurora]] replicas share the same underlying storage as the source instance, lowering costs and avoiding the need to copy data to the replica nodes. 


## [[Synchronous Replication]] vs [[Asynchronous Replication]]


# Use Cases

- Suitable if your company has a web application with a built-in reporting module
- If your department or application runs large SQL queries every month that impact your database's performance due to high usage
- If you need to minimize the impact that the reporting activity has on your application by offloading the read requests
- If you need to separate the read requests from the write requests of your application
- If you have an application wherein the read operations are causing high I/O usage to your primary RDS database instance which then results in high latency to the write requests in your production environment
- If you have application modules or reporting tools that only send 'SELECT' queries. You can configure the reporting module to use the Read Replica endpoint and direct the transactional operations to the primary database instance.
- If you have 3rd-party applications or other internal systems that query your database instance heavily
- If you have an internal batch processing job that fetches reporting data from your RDS DB instance.
- If your entire database slows down significantly whenever your batch runs which impacts the overall read and write performance of your application
- If you need to configure your internal systems to fetch data from the replica instead of the primary instance
- A Read Replica is primarily used to improve the scalability of your application in terms of read operations and not for improving the availability of your database
- Cannot be used for ensuring that the database will be highly available in the event of an outage. You have to use the Multi-AZ Deployments configuration instead
- Unlike Multi-AZ RDS, a Read Replica doesn’t have an automatic failover. If the primary DB instance experienced an outage, the incoming requests are not automatically routed to the Read Replica by default




