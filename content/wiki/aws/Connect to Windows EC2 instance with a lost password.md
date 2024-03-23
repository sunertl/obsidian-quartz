---
tags:
  - docs
up: "[[Amazon EC2]]"
related:
  - "[[Threat Detection and Incident Response]]"
  - "[[EC2 Key Pairs]]"
---
## Using EC2 Launch v2

- verify EC2 Launch v2 service is running
- detach the EBS root volume
- attach the volume to a temporary instance as a secondary volume
- delete file `- %ProgramData%/Amazon/EC2Launch/stat e/.run-once`
- Re-attach the volume to the original instance, then restart the instance, you will be able to set a new password

## Using EC2 Config

- verify EC2 config service is running
- windows AMIs before Windows Server 2016
- detach the EBS root volume
- attach the volume to a temporary instance as a secondary volume
- modify file `\Program Files\Amazon\Ec2ConfigSer vice\Settings\config. xml`
- Set `EC2SetPassword` to `Enabled`
- Reattach the volume to the original instance, then restart the instance

## Using Systems Manager

- Must have SSM Agent installed
- Method 1
	- Use `AWSSupport-RunEC2RescueForWindowsTool` Run Command Document
	- Install and run EC2Rescue Tool for Windows Server
	- Command is set to `ResetAccess`
- Method 2
	- Use AWSSupport-ResetAccess Automation Document
	- Works for both Linux and Windows
- Method 3
	- Manually AWS-RunPowerShellScript Run Command Document
	- Command: `net user Administrator Password@123`

