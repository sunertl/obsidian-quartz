inks: [[Auto Scaling]]
tags:: [[aws/scaling]]  
_____
# Overview

- Automatically increases or decreases the current capacity of your Amazon EC2 Auto Scaling group based on a set of scaling adjustments, also known as step adjustments
- Also requires the use of CloudWatch alarms with specified high and low thresholds as well as a defined action that either adds or removes instances
- Also supports setting the Auto Scaling group to an exact size or a fixed capacity unit in the event that your CloudWatch alarm threshold was breached 
- Unlike Simple Scaling policy, it can continue to respond to additional CloudWatch alarms, even if the current scaling activity or health