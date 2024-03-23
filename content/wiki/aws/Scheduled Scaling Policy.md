---
tags:
  - docs
---
# Overview

- Automatically increases or decreases the current capacity of your Auto Scaling group based on a set schedule that you define
- Allows you to set up your own scheduled scaling based on the predictable load changes of your application.

# Use Cases

## Month-end Batch Processing Scenario
- Performs significantly slower when the month-end financial calculation batch executes 
- Causes the CPU utilization of your Amazon EC2 instances to immediately peak to 100% on that period 
- Always happens on the first day of every month at the stroke of midnight.
- Set a scheduled scaling policy with a monthly schedule 
- Scale out before the clock hits 12 midnight on the first day of the month so there would be more EC2 instances

## Holidays 
- Provides a consistent user experience by scaling your Auto Scaling group a few hours before your event or specific holidays
- Scaling out your compute capacity takes time due to the cooldown period. It may take an hour or more to fully scale your compute capacity to match the current load. This is the reason why you have to scale-out early!
- Setting up a scheduled scaling activity beforehand can reduce the performance issues of your application

## Slow site every morning when work day begins
- Sluggish application performance right when the workday begins (e.g. 8 AM ) but usually runs well by mid-morning (e.g. 10 AM) or at lunchtime
- There is a delay in launching new instances as opposed to the number of incoming requests
- For example, your Auto Scaling group scales up to 20 or 25 instances during work hours, but scales down to just 2 instances overnight
- In the morning, it takes a few hours for the scaling process to complete – extending to mid-morning or till lunchtime, since there are only 2 instances at the start of the day

