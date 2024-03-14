⬆️ [[AWS - Compute]] | [[Elasticity]]
tags:: [[efficiency]]  [[aws/scaling]] 

# Overview
Technology that enables your compute capacity to automatically adjust whenever your application load changes. It allows you to acquire more resources based on your current demand and release the same resources when you no longer need them. 

>[!imporant]
>Auto Scaling is targeted for compute services (such as EC2 Instances) whereas [[AWS Application Auto Scaling]] is geared towards resources that are scalable other than EC2.

# Major Components of Auto Scaling

## Auto Scaling Group
[[Auto Scaling Group]] organizes your EC2 Instances into groups:
- A logical unit for scaling and management
- Must have a setting for the minimum, maximum, and desired number of EC2 Instances
- Always use cool downs to avoid rapid scaling.
- Think about implementing more and smaller instances to allow granularity.
- Think about implementing more and smaller instances to allow granularity.

### Scaling Policies
used to properly scale your application (policies for your auto scaling roup)

- [[Simple Scaling Policy]]
- [[Step Scaling Policy]]
- [[Target Tracking Policy]]
- [[Scheduled Scaling Policy]]

>[!imporant]
>Generally, for anything client-facing you should always use Auto Scaling Groups (ASG) with Application Load Balancers (ALB) with autoscaling because they allow you to provide elasticity by abstracting the user away from individual servers. Since, the customers will be connecting through an ALB, they don't have any visibility of individual servers.


## Configuration Templates
- [[Launch Template & Configuration]]
- Acts as a template for your Auto Scaling Group, containing the AMI ID, the instance type, the key pair, the security groups, block device mapping and others
- It is recommended to use a Launch Template, rather than a Launch Configuration, as the latter only offers limited features

## Scaling Options
- Allows you to choose the suitable scaling behavior of your Auto Scaling Group
- Types:
	- Dynamic
		- Simple: If CPU is above 50%, add one to capacity
		- Stepped: If CPU usage is above 50%, add one, if above 80% add three 
		- Target: Desired aggregate CPU = 40%, ASG will achieve this
	- Manual
		- manually adjust the desired capacity
	- Scheduled
		- useful for known periods of high or low usage. They are time based adjustments e.g. sales periods.
- It is also possible to scale an ASG based on [[Amazon CloudWatch]] alarms
	- An alarm monitors a metric (such as average CPU, or a custom metric)
	- Metrics such as average CPU are computed for the overall ASG instances
	- Based on the alarm:
		- we can create scale-out policies (increase the number of instances)



# [[Hooks]]

___
Related concepts:: [[Elasticity]]



