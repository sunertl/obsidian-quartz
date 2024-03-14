---
tags:
  - compsci/cloud/aws/security
up:
  - "[[Amazon EC2]]"
related:
  - "[[Threat Detection and Incident Response]]"
---
## For Linux

- diagnose and troubleshoot common issues
- gather syslog logs, diagnose problematic kernel parameters, diagnose common OpenSSH issues
- supports over 100 modules
- Amazon Linux 2, Ubuntu, RHEL, SUSE Linux
- Install manually or using `AWSSupport- TroubleshootSSH` automation document
	- Installs the tool and tries to fix issues with SSH connections to the instance
- Upload the results directly to AWS Support or an S3 bucket

### Use Cases

- Collect system utilization reports
	- vmstate, iostat, mpstat,...
- Collect logs and details
	- syslog, dmsesg, application error logs, and SSM logs
- Detect system problems
	- asymmetric routing or duplicate root device labels
- Automatically remediate system problems
	- correcting OpenSSH file permissions
	- disabling known problematic kernel problems
- You can create your own custom module

## For Windows Server

- diagnose and troubleshoot common issues
- collect log files, troubleshoot issues, provide suggestions, ...
- Supports 2 modules (data collector, analyzer)
- Windows Server 2008 R2 or later
- Install manually or using `AWSSuppor t-RunEC2RescueForWindowsTool` run command document
	- Commands: CollectLogs, FixAll, ResetAccess
- use `AWSSupport-ExecuteEC2Rescue` automation document to troubleshoot connectivity issues
- upload the results directly to an S3 bucket

### Use Cases

- Instance connectivity issues
	- Firewall, RDP, or network interface configuration
- OS boot issues
	- blue screen or stop error; a boot loop, or a corrupted registry
- Gather OS logs and configuration files
	- if you need advanced log analysis and troubleshooting
- Common OS issues
	- disk signature collision
- Perform a restore

