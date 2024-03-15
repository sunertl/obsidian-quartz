---
tags:
  - CS/cloud/aws/architecture
up:
  - "[[AWS Management & Governance]]"
related:
---
# Overview

> [!Defintion] Defintion
> Amazon Simple Notification Service is a fully-managed messaging & notification service. 


- In SNS, you need to create a topic. An SNS topic is the AWS resource that can be subscribed to your operations team, by an external application, by another AWS service, or even by you! 
- It is like a subscription to a newsletter that allows you to receive important emails for news, promotions, events, and other notifications. 
- The messages that are being sent by the SNS topic to its subscribers are populated by a publisher. 
- A publisher is simply an entity or a service that produces messages. i.e. [[AWS Config]] can send data to an SNS topic if there are any changes in the settings of your AWS resources. 
- [[Amazon S3]] can also send data to Amazon SNS for any new objects in your bucket via the Amazon S3 Events Notifications feature.
- The same goes for [[Amazon CloudWatch]], [[Auto Scaling]], [[Amazon RDS]], [[AWS Budgets]], [[EC2 Image Builder]], [[AWS Backup]], [[Amazon CloudGuru]], etc.
- In addition, you can also add a [[Lambda Trigger]], to your [[Amazon DynamoDB Streams]] to send items to your topic.
- An SNS topic can have one or more subscribers, which can be an actual person, an AWS service, or an external system. 
- You can actually subscribe to a specific SNS topic so you can receive an email, a text message, or even a push notification to your mobile phone.
- This is a powerful notification service since it can alert you to any critical errors in your production environment.
- Can send notifications to both HTTP or HTTPS endpoints, such as web hook URL for Slack or other 3rd party messaging services. 
- You can also integrate an [[Amazon SQS]] queue, [[AWS Lambda]] function, [[Amazon Kinesis Data Firehose]] stream, and other AWS services as a subscriber to your topic. 


> [!Important] Important
> Two or more SQS queues can subscribe to a single SNS topic where each queue sends the messages to a totally separate system. Having two or more subscribers to a single topic allows you to fan-out or spread a single message to multiple recipients. 

- There are two types communication where the Amazon SNS service is used:
	- Application-to-Application messaging
		- for sending notifications to multiple applications or AWS services
	- Application-to-Person messaging
		- for sending messages to an actual person or an IT Operations staff that can take action to specific system events.
		- especially helpful if you have a roster of on-call team members who need to be notified of any application issues and to help them resolve system issues quickly.

## Amazon SNS Types

### Standard Topic
- default type
- provides maximum throughput
- best effort ordering

### First-In, First-Out
- used if strict message ordering and message deduplication are required
- Core concepts for these types are similar in [[Amazon SQS]]

## Amazon SNS Security

- provides in-transit encryption by default
- you can optionally enable server-side encryption too
- You can add [[Access Management]] policy 

## Features

- message filtering
- message fanout (pushed to multiple subscribers


>[!Important] Important 
> A “fanout” pattern is when an Amazon SNS message is sent to a topic and then replicated and pushed to multiple Amazon SQS queues, HTTP endpoints, or email addresses. This allows for parallel asynchronous processing.

- message durability
- message encryption
- message archiving
- Dead-Letter-Queue (DLQ)
	- the messages that can't be delivered to your subscribers successfully can be captured by assigning a Redrive Policy to your Amazon SNS subscriptions and then selecting an [[Amazon SQS]] queue. 


