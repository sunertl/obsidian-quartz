---
tags:
  - aws/security
up:
  - "[[Amazon S3]]"
related:
  - "[[Security Logging and Monitoring]]"
---
## Overview
___
>[!summary] Summary
>The feature enables you and your team to be notified when specific events happen in your [[S3 Bucket|S3 buckets]]. You can choose the particular S3 Events that you want to monitor, and Amazon S3 will publish the notifications to your desired destinations. 

Since Amazon S3 can be used with a variety of different AWS services, it is important to set up a mechanism that automatically notifies you of any new objects that were added in the bucket and the ones that were deleted. This use case can be fulfilled by setting up the Amazon S3 Event Notification.

This feature enables you to have more visibility on your data and promptly remediate any potential data leaks. 

Amazon S3 can publish notifications for:

- New Object Creation
- Object Deletion
- Object Restoration from the Amazon [[S3 Glacier Flexible Retrieval]] storage class
- [[Reduced Redundancy Storage (RSS)]] object lost events
- Replication events

## Destinations
___
Amazon S3 supports the following destinations where it can publish events:

[[Amazon SNS]] topic – A web service that coordinates and manages the delivery or sending of messages to subscribing endpoints or clients.

[[Amazon SQS]] queue – Offers reliable and scalable hosted queues for storing messages as they travel between computer.

[[AWS Lambda]] – AWS Lambda is a compute service where you can upload your code and the service can run the code on your behalf using the AWS infrastructure. You package up and upload your custom code to AWS Lambda when you create a Lambda function

The S3 event notifications are usually transmitted within seconds and are designed to be delivered at least once. 

## Object Versioning
___
You can enable [[S3 Object Versioning|object versioning]] on your [[S3 Bucket|S3 bucket]]. to ensure that an event notification is always sent for every successful object upload. 

With S3 versioning, every successful write operation will produce a new version of your S3 object and send the corresponding event notification. 

Versioning avoids the event notification issue where only one notification is sent when multiple operations are executed to a non-versioned object. 

