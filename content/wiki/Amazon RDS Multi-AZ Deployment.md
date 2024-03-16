---
tags:
  - aws/architecture
  - "#aws/database"
up:
  - "[[Amazon RDS]]"
---
# Overview

- two DB instances are launched: the primary instance in one AZ and the standby instance deployed in a different AZ
- [[Synchronous Replication]]. 
		- Standby instance is also called a standby replica and you can only deploy it in the same [[AWS Region]] where your primary DB instance is located.
		- You can also set up a [[Amazon RDS Read Replica]] that performs [[Asynchronous Replication]].
		- You can host the [[Amazon RDS Read Replica]] in a different AWS Region than your primary DB instance. 
- Amazon RDS Multi-AZ deployments provide enhanced availability and durability for RDS database (DB) instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ) -> [[Synchronous Replication]]
- Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete. 
- Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.
- Several Amazon RDS engines allow you to add read replicas for increased scalability and to maintain database availability in the case of an AZ failure. Amazon RDS read replicas can be set up with their own standby instances in a different AZ. In the case of Aurora, you can choose to place read replicas across multiple availability zones.
- [[Amazon Aurora]] further extends the benefits of Multi-AZ by employing an SSD-backed virtualized storage layer purpose-built for database workloads. It automatically replicates your storage six ways, across three Availability Zones.
- [[Amazon Aurora]] storage is fault-tolerant, transparently handling the loss of up to two copies of data without affecting database write availability and up to three copies without affecting read availability. Aurora always replicates your data across three Availability Zones, regardless of whether your database uses read replicas.


# Benefits

## Enhanced durability
Multi-AZ deployments for the MySQL, MariaDB, Oracle, and PostgreSQL engines utilize synchronous physical replication to keep data on the standby up-to-date with the primary. Multi-AZ deployments for the SQL Server engine use synchronous logical replication to achieve the same result, employing SQL Server-native Mirroring technology. Amazon Aurora uses an SSD-backed virtualized storage layer purpose-built for database workloads. All approaches safeguard your data in the event of a DB Instance failure or loss of an Availability Zone.

## Increased availability
You benefit from enhanced database availability when running Multi-AZ deployments. If an Availability Zone failure or DB Instance failure occurs, your availability impact is limited to the time automatic failover takes to complete: typically under one minute for Amazon Aurora (as little as 30 seconds when using the MariaDB Connector/J) and one to two minutes for other database engines (see the RDS FAQs for details).

The availability benefits of Multi-AZ deployments also extend to planned maintenance and backups. In the case of system upgrades like OS patching or DB Instance scaling, these operations are applied first on the standby, prior to the automatic failover. As a result, your availability impact is, again, only the time required for automatic failover to complete.

## Protection of your database performance
Unlike Single-AZ deployments, I/O activity is not suspended on your primary during backup for Multi-AZ deployments for the MySQL, MariaDB, Oracle, and PostgreSQL engines, because the backup is taken from the standby. However, note that you may still experience elevated latencies for a few minutes during backups for Multi-AZ deployments.

On instance failure in Amazon Aurora deployments, Amazon RDS uses RDS Multi-AZ technology to automate failover to one of up to 15 Amazon Aurora Replicas you have created in any of three Availability Zones. If no Amazon Aurora Replicas have been provisioned, in the case of a failure, Amazon RDS will attempt to create a new Amazon Aurora DB instance for you automatically.

## Automatic failover
If a storage volume on your primary instance fails in a Multi-AZ deployment, Amazon RDS automatically initiates a failover to the up-to-date standby (or to a replica in the case of Amazon Aurora). Compare this to a Single-AZ deployment: in case of a Single-AZ database failure, a user-initiated point-in-time-restore operation will be required. This operation can take several hours to complete, and any data updates that occurred after the latest restorable time (typically within the last five minutes) will not be available.

DB Instance failover is fully automatic and requires no administrative intervention. Amazon RDS monitors the health of your primary and standbys, and initiates a failover automatically in response to a variety of failure conditions.


> [!Important] Important
> When failing over, Amazon RDS simply flips the canonical name record (CNAME) for your DB instance to point at the standby, which is in turn promoted to become the new primary.

## Limitations

- A Multi-AZ database can provide high availability in a single AWS Region only
- You cannot deploy a Standby Replica to another AWS Region
- Does not provide multi-region disaster recovery
- The Standby Replica cannot be used to read or write your application data, or accept live traffic
- Cannot be used this to scale your application in terms or read performance or handle the increased number of queries to your database
- Not suitable if the required Recovery Point Objective (RPO) and Recovery Time Objective (RTO) are quite short
- It cannot provide an RPO of 1 second and an RTO of 1 minute
- If you have this requirement, you have to use:
