---
tags:
  - docs
up:
  - "[[Amazon CloudWatch]]"
related:
  - "[[Security Logging and Monitoring]]"
---
## Overview
___

- For virtual servers (EC2 instances, on prem servers, etc.)
- Collects additional system-level metrics such as RAM, processes, used disk space, etc.
- Collects logs to send to [[Amazon CloudWatch#CloudWatch Logs|CloudWatch Logs]]
	- No logs from inside your EC2 instance will be sent to CloudWatch Logs without using an agent
- Centralized configuration using [[SSM Parameter Store]]
- Make sure IAM permissions are correct
- Default namespace for metrics collected by the Unified CloudWatch Agent is **CWAgent** (can be configured/changed)


## procstat Plugin
___

- Collects metrics and monitors system utilization of individual processes
- Supports both Linux and Windows servers
- Example: amount of time the process uses CPU, amount of memory the process uses, etc.
- Select which processes to monitor by
	- pid_file: name of process identification number (PID) files they create
	- exe: process name that match string you specify (RegEx)
	- pattern: command lines used to start the processes (RegEx)
- Metrics collected by procstat plugin begins with 'procstat' prefix (e.g. procstat_cpu_time, procstat_cpu_usage, etc.)

## Troubleshooting
___

- CloudWatch Agent fails to start
	- Might be an issue with the configuration file
	- Check configuration file logs `- /opt/aws/amazon-cloudwatch- agent/logs/configuration-validation.log`
- Can't find metrics collected by the CloudWatch Agent
	- Check you're using the correct namespace (default: CWAgent)
	- Check the configuration file `amazon-cloudwatch-agent.json`
- Agent not pushing log events
	- Update to the latest CloudWatch Agent version
	- Test connectivity to the CloudWatch logs endpoint `- logs.<region>.amazonaws.com` (check SGs, NACLs, etc.)
	- Review account, region, and log group configurations
	- Check IAM permissions
	- Verify the system time on the instance is correctly configured


> [!Important] Important
> Check CloudWatch Agent logs at `/opt/aws/amazon- cloudwatch-agent/logs/amazon-cloudwatch-agent.log`
