---
tags:
  - compsci/cloud/aws/database
up:
  - "[[AWS - Database]]"
related:
---
# Overview


> [!Defintion] Definition
> Serverless, NoSQL, fully managed database with single-digit millisecond performance at any scale

- DynamoDB is a NoSQL database service in AWS
- A fully managed NoSQL database
- Highly scalable storage and r/w capacity
- Provides a single-digit millisecond performance
- Serverless
- Highly durable database
- Has built-in security, backup features as well as in-memory caching
- Has the least amount of operational overhead than other types of databases
- Eliminates the manual database management tasks, provisioning and scaling activities
- Capable of automatically scaling its read and write capacity without the need for advanced capacity planning
- Can be queried using simple key-value requests via its APIs
- Can handle millions of requests per second
- All data is stored in a single table only
- Capable of accepting millions of requests per second globally
- Faster and more scalable than traditional relational databases
- Does not have a relationship with other DynamoDB tables


## Differences Relational vs. NoSQL

| Relational Database                                                      | NoSQL Database                                                                                |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| For applications with well-defined schema that does NOT change too often | For applications that require a flexible schema that changes too often                        |
| Has hundreds of thousands of tables                                      | Does not have any related tables or table joins                                               |
| Multiple table joins                                                     | Usually has one table only                                                                    |
| Tables having foreign keys                                               | Provides high throughput and performance for your global applications                         |
| Support complex SQL queries                                              | Can scale better than relational database                                                     |
| Tables having a relationship with other tables                           | Can be used if you are unsure of the database schema that you will implement                  |
| Has ACID properties                                                      | Suitable if you expect to make a lot of database changes as your website or application grows |
| Perfect for transactional workloads                                      | Does not have ACID properties by default                                                      |

## Features

- [[Amazon DynamoDB Streams]]
- [[Amazon DynamoDB TTL]]
- [[Amazon DynamoDB Transactions]]
- [[Amazon DynamoDB Accelerator (DAX)]]
- [[Amazon DynamoDB Scaling]]
- [[Amazon DynamoDB Backups]]

For security, DynamoDB offers the [[DynamoDB Encryption Client]] that can encrypt your table data before you send it to DynamoDB. 

## Core Concepts

### Table

- Similar to the table of other database systems
- A collection of related data that can be represent an object, an idea, a role or an abstract concept
- In DynamoDB, the entire NoSQL database is within a single DynamoDB table only

### Item

- Each table contains zero or more items
- Similar to the rows, records, or tuples in other database systems


> [!Example] Example
> The "Row" of the DynamoDB table

- Can have nested attribute, which contains another item or another nested attribute
- Can be automatically expired based on its timestamp using [[Amazon DynamoDB TTL]]

### Attribute

- Each item contains zero or more attributes
- Similar to the fields or columns in other data stores

> [!Example] Example
> The "Column" of the DyanmoDB table

### Primary Key

- Also known as the partition key
- Acts as the primary index that uniquely identifies each item in your DynamoDB table
- Provides the ability to search for a particular item in your table
- Used as an input to the internal hash function in DynamoDB. The output from that function determines the physical internal storage in which the item will be stored
- The primary key attribute must be a scalar

The partition key portion of a table’s primary key determines the logical partitions in which a table’s data is stored. This in turn affects the underlying physical partitions. Provisioned I/O capacity for the table is divided evenly among these physical partitions. Therefore a partition key design that doesn’t distribute I/O requests evenly can create “hot” partitions that result in throttling and use your provisioned I/O capacity inefficiently.

The optimal usage of a table’s provisioned throughput depends not only on the workload patterns of individual items, but also on the partition-key design. This doesn’t mean that you must access all partition key values to achieve an efficient throughput level, or even that the percentage of accessed partition key values must be high. It does mean that the more distinct partition key values that your workload accesses, the more those requests will be spread across the partitioned space. In general, you will use your provisioned throughput more efficiently as the ratio of partition key values accessed to the total number of partition key values increases.


### Secondary Index

- Makes your queries run faster!
- Provides more flexibility and performance improvement to your queries
- Supports your advanced queries to access your stored data faster
- Allows you to query the data in the table usingn an alternate key other than the primary key

> [!Example] Example
> Similar to the 'INDEX' of MySQL, Oracle, SQL Server, and other relational databases

- Primarily used to make your queries FASTER!



## Examples

### Example I - Restore DynamoDB from a backup

When you create an on-demand backup, a time marker of the request is cataloged. The backup is created asynchronously by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes.

When you do a restore, you can change the following table settings:

-   Global secondary indexes (GSIs)
-   Local secondary indexes (LSIs)
-   Billing mode
-   Provisioned read and write capacity
-   Encryption settings

However, some settings are not carried over on the restored table and you must manually configure them after restoring.

You must manually set up the following on the restored table:

-   Auto scaling policies
-   AWS Identity and Access Management (IAM) policies
-   Amazon CloudWatch metrics and alarms
-   Tags
-   Stream settings
-   Time to Live (TTL) settings
