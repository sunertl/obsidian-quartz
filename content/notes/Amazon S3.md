---
tags:
  - docs
up: "[[AWS Storage]]"
related: "[[AWS Analytics]]"
---
## Overview

**S3** is an object storage service and stands for  “Simple Storage Service”. It is highly durable, available & scalable storage service.

It is primarily used to store static data that does not change frequently. It allows your files to be publicly available via the Internet (can be accessed anywhere and not only within your Amazon VPC.

>[!important]
>Is private by default and the S3 content can only be accessed if you explicitly grant access permissions.

## Objects

An [[S3 Object]] is the fundamental entity stored in S3. Objects consist of object data and [[Metadata]]. Objects can range in size from a minimum of 0 bytes to a maximum of 5 terabytes, though the data portion is opaque to S3. Whenever an object gets added or deleted, you can set up an [[S3 Event Notification]] to get notified of those changes to buckets. 

## Bucket

An [[S3 Bucket]] is a container for [[S3 Object]]. Every [[S3 Object]] is contained in a bucket. Since it's a global service, a bucket must have a globally unique name. However, you can configure a bucket so they are created in a specific AWS Region. You can attach a [[Bucket Policy]] to that specific resource. A [[Bucket Policy]] (or [[Resource-Based Policy]]) is different from an [[Identity-Based Policy]]. You can attach either but each bucket can only have one policy - it can have multiple statements though.

A key is the unique identifier for an object within a bucket. Every object in a bucket has exactly one key. The combination of a bucket, key, and version ID uniquely identify each object.

## Storage Classes

S3 offers different storage classes based on **data access, resilience, and cost requirements** for workloads. Storage classes are purpose-built to provide the lowest cost storage for different access patterns. [[S3 Intelligent-Tiering]] for automatic cost savings for data with unknown or changing access patterns. [[S3 Standard]] for frequently accessed data. [[S3 Standard-Infrequent Access]] and [[S3 One Zone-Infrequent Access]] for less frequently accessed data, [[S3 Glacier Flexible Retrieval]] for rarely accessed long-term data that does not require immediate access and [[S3 Glacier Deep Archive]] for long-term archive and digital preservation with retrieval in hours at the lowest cost storage. Generally, S3 Glacier classes are usually used for data archives.

You can set up a [[Lifecycle Policy ]]to determine when to change the storage class based on availability and cost-optimization.

Every storage class has different [[Minimum Storage Duration]].

## Security

As described above, you can either attach a [[Bucket Policy]] or [[Identity-Based Policy]] to a bucket. You'd use an identity-based policy when you want to want to control a high mix of different resources, want to manage permissions all in one place (use [[AWS Identity & Access Management (IAM)]]) or must have access to all accounts accessing the information. 
A [[Bucket Policy]] is desirable when you want to manage permissions on a specific product or if you need anonymous or cross account access.
The S3 Block Public Access feature provides settings for access points, buckets, and accounts to help you manage public access to Amazon S3 resources.
To give another person or application access to an object inside an S3 bucket, is through [[S3 Pre-Signed URL]].  You can also [[Amazon S3 Encryption|encrypt data in S3]]. 

### Other Security Considerations

- [[Compromised S3 Bucket]]
- [[S3 Object Lock]]
- [[S3 Object Versioning]]
- [[S3 MFA Delete]]

## S3 Performance Optimization

- Single Put Upload
	- Upload a single object all as one part
	- If transmission fails, then you have to restart the whole upload
- Multipart Upload
	- Upload a single object as a set of parts
	- Each part is a separate portion of the object's data
	- If transmission of any part fails, you can transmit that part without affecting other parts
	- After all parts of your object are uploaded, Amazon S3 assembles

## S3 Replication
Enables automatic, asynchronous copying of objects across Amazon S3 buckets which means that buckets that are configured for object replication can be owned by the same AWS account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different AWS Regions or within the same Region as the source bucket. More details: [[S3 Replication]]

## Website Hosting
[[S3 Website Hosting]]
