---
tags:
  - docs
---
## Overview

- A function that gets executed automatically on a certain event
- Provides the ability to influence the outcome of your workflow based on the criteria that you define
- Can stop, skip, or replace the other function that is supposed to run on a particular lifecycle 
- Also used in some programming languages, version control, and other programs

## Pending
- During the scale-out event of your Auto Scaling group, you can:
	- Ensure that your new EC2 instances download the latest code base from your repository
	- Verify that your EC2 user data has been successfully completed first before the instance can start accepting traffic
- You have to use the `Pending:Wait` lifecycle hook for this particular scenario

## Terminated

- During the scale-in event of your Auto Scaling group, you can:
	- Pause the instance termination for a certain amount of time to upload all the remaining data logs before the instance gets completely terminated
	- Execute a custom shell script
- You have to use the `Termination:Wait` lifecycle hook for the use cases
