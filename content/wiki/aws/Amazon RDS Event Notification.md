---
tags:
  - CS/cloud/aws/database
  - CS/cloud/aws/monitoring
up:
  - "[[Amazon RDS]]"
related:
  - "[[Amazon SNS]]"
---
# Overview

- Similar concept to [[S3 Event Notification]]
- Notifies you of occurrences in your database resources
- You can configure your events if an RDS DB instance has been created, restarted, or deleted
- It can also detect low storage, configuration changes, Multi-AZ failover events, snapshot events, and many more.
- In the Amazon RDS console, you'll see an "Events" section that shows the recent events in your database
	- i.e. if an automated RDS snapshot was created, it will log the "automated snapshot created" event
	- i.e. if you restarted your DB instance, a "DB instance restarted" event will be shown
- To track the different activities in RDS, you have to create an event subscription first with a specified source type and target. For the source type, you can choose the type of resource that your subscription will consume the event from:
	- Instances
	- Security Groups
	- Parameter Groups
	- Snapshots
	- Clusters
	- Cluster Snapshots
- You can select event categories that this event is consuming from
- After you made your selections, you have to choose a target afterwards: [[Amazon SNS]] 