---
tags:
  - docs
---

# Overview
- Automatically increases our decreases the current capacity of your auto scaling group based on a single scaling adjustment

# Example
- You can set up a simple scaling policy that is invoked by an Amazon CloudWatch alarm
- If the alarm threshold is breached, then the auto scaling group will scale in our scale out to meet your requirements
- As part of the Simple Scaling setup, you have to specify the high and low thresholds of your alarm in Amazon CloudWatch.
- Defining whether to add or remove instances and specifying how many instances will be affected are also required.
- After scaling activity has been started, the Auto Scaling Group must wait for that activity to be fully completed and for the cooldown period to expire before evaluating the succeeding CloudWatch Alarms. 
- You can utilize the cooldown period of your Auto Scaling Group to avoid starting another scaling activity if the previous scaling event is not yet complete.