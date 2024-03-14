---
tags:
  - compsci/cloud/aws/monitoring
up:
  - "[[Amazon CloudWatch]]"
related:
  - "[[Security Logging and Monitoring]]"
---
>[!important] Important
> - Various options (sampling, %, max, min, etc.)
> - Alarm states:
> 	- OK
> 	- INSUFFICIENT_DATA
> 	- ALARM
> - Period:
> 	- Length of time in seconds to evaluate the metric
> 	- High resolution custom metrics: 10 sec, 30 sec or multiples of 60 sec
> - Can be created based on CloudWatch logs metrics filters

## Alarm Targets

- Stop, terminate, reboot, or recover on EC2 instance
- trigger auto scaling action
- send notification to [[Amazon SNS]] (from which you can do pretty much anything)

## Composite Alarms

- CloudWatch Alarms are on a single metric
- Composite Alarms are monitoring the states of multiple other alarms
- AND and OR conditions
- Helpful to reduce 'alarm noise' by creating complex composite alarms



