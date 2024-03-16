---
tags:
  - docs
up:
  - "[[AWS Systems Manager]]"
related:
  - "[[Security Logging and Monitoring]]"
---
- Automates the process of patching managed instances
- OS updates, applications updates, security updates, ...
- Supports both EC2 instances and on-premises servers
- Supports Linux, macOS, and Windows
- Patch on-demand or on a schedule using Maintenance Windows
- Scan instances and generate patch compliance report (missing patches)
- Patch compliance report can be sent to S3

## Patch Baseline

- Defines which patches should and shouldn’t be installed on your instances
- Ability to create custom Patch Baselines (specify approved/rejected patches)
- Patches can be auto-approved within days of their release
- By default, install only critical patches and patches related to security

### Pre-Defined Patch Baseline

- Managed by AWS for different OS (can't be modified)
- AWS-RunPatchBaseline ([[SSM Documents]]) - apply both OS and application batches (Linux, macOS, Windows Server)

### Custom Patch Baseline

- Create your own patch baseline and choose which patches to auto-approve
- OS, allowed patches, rejected patches, ...
- Ability to specify custom and alternative patch repositories

## Patch Group

- Associate a set of instances with a specific Patch Baseline
- Example: create Patch Groups for different environments (dev, test, prod)
- Instances should be defined with the tag key Patch Group
- An instance can only be in one Patch Group
- Patch Group can be registered with only one Patch Baseline

![[Pasted image 20231019171725.png]]