---
tags:
  - docs
  - docs
up:
  - "[[AWS CloudTrail]]"
related:
  - "[[Security Logging and Monitoring]]"
---
## Management Events

Management events describe management operations that are performed on resources in your AWS account. These are also known as control plane operations. 


> [!Important] To Remember
> By default, trails are configured to log management events

Can separate read-events from write-events

- **Read-only events** include API operations that read your resources, but don't make changes. For example, read-only events include the Amazon EC2 `DescribeSecurityGroups` and `DescribeSubnets` API operations. These operations show information about your EC2 resources but don't change configurations.

- **Write-only events** include API operations that change (or might change) your resources. For example, the EC2 `RunInstances` and `TerminateInstances` API operations change your instances.

## Data Events

Data events describe the resource operations performed on or within a resource. These are also known as data plane operations. Data events are often high-volume activities. An example of an action that generates a data event is running the `PutObject` API on an [[S3 Bucket]].

Data events are not enabled by default when you create a trail because they incur costs (high volume operations!). 

To record CloudTrail data events, you must add to a trail the resources or resource types for which you want to collect activity. For more information about available data events, see Logging data events.

## Insights Events

AWS CloudTrail Insights helps AWS users identify and respond to unusual activity associated with API calls and API error rates by continuously analyzing CloudTrail management events. 

CloudTrail Insights events analyzes your normal patterns of API call volume and API error rates, also called the _baseline_, and generates CloudTrail Insights events when the call volume or error rates are outside normal patterns. 

CloudTrail Insights events on API call volume are generated for `write` management APIs, and CloudTrail Insights events on API error rate are generated for both `read` and `write` management APIs. CloudTrail Insights events are only logged when unusual activity occurs.

Up to 36 hours after you enable CloudTrail Insights on a trail, when CloudTrail detects unusual management API activity, CloudTrail logs Insights events to your trail. You can also view Insights events logged within the last 90 days on the **Insights** page, but note that Insights events are only logged if you have enabled CloudTrail Insights on at least one trail. You can enable CloudTrail Insights when you are creating a trail, or you can update existing trails to enable CloudTrail Insights.

- Event is sent to [[Amazon S3]]
- An [[Amazon EventBridge|EventBridge event]] is generated (for automation needs)

## Events Retention

- Events are stored for 90 days
- To keep events beyond this period, log them to [[Amazon S3|S3]] and use [[Amazon Aurora|Athena]]

![[Pasted image 20231031182517.png]]

## Log File Integrity Validation

- Digest files:
	- References the log files for the last hour and contains a hash of each
	- Stored in the same [[S3 Bucket]] as log files (different folder!)
- Helps you determine whether a log file was modified/deleted after [[AWS CloudTrail|CloudTrail]] delivered it
- Hashing using SHA-256, digital signing using SHA-256 with RSA
- Protect the [[S3 Bucket]] using [[Bucket Policy|bucket policy]], [[S3 Object Versioning|versioning]], [[S3 MFA Delete|MFA delete protection]], encryption, object lock
- Protect CloudTrail using [[AWS Identity & Access Management (IAM)|IAM]]

## Integration with EventBridge

![[Pasted image 20231031182953.png]]
- Used to react to any API call being made in your account
- CloudTrail is not "real-time":
	- Delivers an event within 15 minutes of an API call
	- Delivers log files to an [[S3 Bucket]] every 5 minutes

## Organizations Trails

- A trail that will log all events for all [[AWS Account|AWS accounts]] in an [[AWS Organizations|AWS organization]] 
- Log events for management and member accounts
- Trail with the same name will be created in every AWS account
- Member accounts can't remove or modify the organization trail (view only)

![[Pasted image 20231031183702.png]]

## Integration with Athena

- You can use [[Amazon Athena|Athena]] to directly query CloudTrail logs stored in [[Amazon S3|S3]]

> [!example] Example
> Analyze operational activity for security and compliance

- Can create [[Amazon Athena|Athena]] table directly from the CloudTrail console, then specify the [[S3 Bucket]] location the logs are stored

![[Pasted image 20231031183917.png]]

