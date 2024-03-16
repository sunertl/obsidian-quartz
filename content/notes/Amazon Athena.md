---
tags:
  - aws/query
  - aws/analytics
up:
  - "[[AWS Analytics]]"
related:
  - "[[Security Logging and Monitoring]]"
---
## Overview


>[!definition]
>Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.

The source data is stored on [[Amazon S3]] and Athena can read from this data. In Athena you are defining a way to get the original data and defining how it should show up for what you want to see.

Tables are defined in advance in a data catalog and data is projected through when read. It allows SQL-like queries on data without transforming the data itself.

>[!important] Important
> Use Athena if you want to analyze data in S3 using serverless SQL

You can optimize the original data set to reduce the amount of space uses for the data and reduce the costs for querying that data.

- You can take data stored in S3 and perform Ad-hoc queries on data. Pay only for the data consumed.
- Start off with structured, semi-structured and even unstructured data that is stored in its raw form on S3.
- Athena uses **schema-on-read**, the original data is never changed and remains on S3 in its original form.
- The schema which you define in advance, modifies data in flight when its read.
- Normally with databases, you need to make a table and then load the data in.
- With Athena you create a schema and load data on this schema on the fly in a relational style way without changing the data.
- The output of a query can be sent to other services and can be performed in an event driven fully serverless way.

## Use Cases

- Business intelligence
- Analytics
- Reporting, analyze & query
	- [[VPC Flow Logs]]
	- [[Elastic Load Balancer (ELB)#Logging & Monitoring|ELB logs]]
	- [[CloudTrail Events|CloudTrail trails]]

## Performance Improvement

- Use columnar data for cost-savings (less scan)
	- [[Apache Parquet]] or [[ORC]] is recommended
	- Huge performance improvement
	- Use [[AWS Glue]] to convert your data to [[Apache Parquet]] or [[ORC]]
- Compress data for smaller retrievals (bzip2, gzip, lz4, snappy, zlip, zstd, etc.)
- Partition datasets in [[Amazon S3|S3]] for easy querying on virtual columns
- Use larger files (> 128 MB) to minimize overhead

## Federated Query

- Allows you to run SQL queries across data stored in relational, non-relational, object, and custom data sources (AWS or on-premises)
- Uses data source connectors that run on [[AWS Lambda]] to run federated queries (e.g. [[Amazon CloudWatch Logs|CloudWatch logs]], [[Amazon DynamoDB]], [[Amazon RDS]], etc.)
- Store the results back in [[Amazon S3]]

## Troubleshooting

- Insufficient permissions when using Athena with [[Amazon QuickSight]]
	- Validate QuickSight can access [[S3 Bucket|S3 buckets]] used by Athena
	- If the data in the [[S3 Bucket|S3 buckets]] is encrypted using [[AWS Key Management Service (KMS)]] (SSE-KMS), then [[Amazon QuickSight|QuickSight]] IAM role must be granted access to decrypt with the key (`kms:Decrypt`)


