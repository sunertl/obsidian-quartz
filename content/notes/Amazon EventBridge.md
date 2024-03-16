---
tags:
  - docs
  - docs
up:
  - "[[AWS Management & Governance]]"
related:
  - "[[Security Logging and Monitoring]]"
---
## Overview

>[!summary] Summary
>Amazon EventBridge is a serverless event bus that makes it easier to build event-driven applications at scale using events generated from your applications, integrated Software-as-a-Service (SaaS) applications, and AWS services. EventBridge delivers a stream of real-time data from event sources such as Zendesk or Shopify to targets like [[AWS Lambda]] and other SaaS applications. You can set up routing rules to determine where to send your data to build application architectures that react in real-time to your data sources with event publisher and consumer completely decoupled.

EventBridge includes two ways to process events: event buses and pipes:

1. **Event buses** are routers that receive events and delivers them to zero or more targets. Event buses are well-suited for routing events from many sources to many targets, with optional transformation of events prior to delivery to a target.
2. EventBridge Pipes is intended for point-to-point integrations; each pipe receives events from a single source for processing and delivery to a single target. Pipes also include support for advanced transformations and enrichment of events prior to delivery to a target.


> [!Note] Note
> Pipes and event buses are often used together. A common use case is to create a pipe with an event bus as its target; the pipe sends events to the event bus, which then sends those events on to multiple targets. For example, you could create a pipe with a DynamoDB stream for a source, and an event bus as the target. The pipe receives events from the DynamoDB stream and sends them to the event bus, which then sends them on to multiple targets according to the rules you've specified on the event bus.


- Schedule: Cron jobs (scheduled scripts)

![[Pasted image 20231031170633.png]]
- Event pattern: event rules to react to a service doing something

![[Pasted image 20231031170703.png]]
- Trigger [[AWS Lambda]] functions, send [[Amazon SQS]]/[[Amazon SNS]] messages, etc.

>[!example] Example
> - Event buses can be accessed by other AWS accounts using [[Resource-Based Policy|resource-based policies]]
> - You can archive event (all/filter) sent to an event bus (indefinitely or set period)
> - Ability to replay archived events

## Schema Registry

- EventBridge can analyze the events in your bus and infer the schema
- The schema registry allows you to generate code for your application, that will know in advance how data is structured in the event bus
- Schema can be versioned

## Resource-based Policy

- Manage permissions for a specific Event Bus

>[!example] Example
> - Allow/deny events from another AWS account or AWS region
> - Use case: aggregate all events from your [[AWS Organizations|AWS organization]] in a single AWS account or AWS region




