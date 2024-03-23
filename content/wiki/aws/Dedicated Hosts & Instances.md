---
tags:
  - docs
---
# Dedicated Host
pay for a physical host that is fully dedicated to running your instances, and bring your existing per-socket, per-core, or per-VM software licenses to reduce costs
type of [[Amazon EC2]] instance that runs in an [[Amazon VPC]] on hardware that’s dedicated to a single customer. This option is the most expensive pricing model.

## Use Cases
- For cases when the existing server-bound software license must be used by customers
- To comply with your per-core software license requirements
- For compliance and software licensing requirements mandating that a workload must be hosted on a physical server 
- For migrating commercial off-the-shelf applications with licenses that must still be utilized upon migration
- For performing cost analysis that supports physical isolation of a customer workload
- Launching Windows Server, SQL Server, SUSE Linux Enterprise Server, Red Hat Enterprise Linux, or other software licenses that are bound to particular VMs, sockets, or physical CPU cores

## Limitations

-   AMI Limits, some versions can't be used
-   Amazon RDS instances are not supported
-   Placement groups are not supported for dedicated hosts.
-   Hosts can be shared with other organization accounts using **Resource Access Manager (RAM)**
-   This is mostly used for licensing problems related to ports.

# Dedicated Instance
Pay by the hour for instances that run on single-tenant hardware. Dedicated Instances that belong to different AWS accounts are physically isolated at a hardware level. Only your compute nodes run in single-tenant hardware; EBS volumes do not.

**Use Cases:**
- Regular virtual machines that run in a virtual private cloud (VPC) on hardware that's dedicated to a single customer
- Dedicated Instances that belong to different AWS accounts are physically isolated at a hardware level
- Dedicated Instances may share hardware with other [[Amazon EC2]] instances if the instances are:
	- In the same AWS account
	- Not a type of Dedicated Instance
- Allows you to launch Dedicated [[Spot Instances]], Dedicated [[On-Demand Instances]], or Dedicated [[Reserved Instances]]

# Differences between Dedicated Hosts & Dedicated Instances


|                                              | Dedicated Hosts                                                                 | Dedicated Instances  |
| -------------------------------------------- |:------------------------------------------------------------------------------- |:-------------------- |
| **Billing**                                  | Per-host Billing                                                                | Per-instance billing |
| **Visibility of sockets, cores and host ID** | Provides visibility on the number of sockers and physical cores                 | No visibility        |
| **Host and Instance affinity**                   | Allows to constantly deploy your instance to the same physical server over time | Not supported        |
| **Targeted instance placement**                  | Provides additional visibility and control over how instances are placed        | Not supported        |
| **Automatic instance recovery**                  | Supported                                                                       | Supported            |
| **Bring Your Own License**                       | Supported                                                                       | Not supported        |
| **Instance must run within a VPC**               | Yes                                                                             | Yes                  |
| **Can be combined with other billing options**   | On-Demand Dedicated Hosts, Reserved Dedicated Hosts, [[Savings Plans]]              | [[On-Demand Instances]], Reserved Dedicated Instances, Dedicated [[Spot Instances]]                     |
