---
tags:
  - aws/security
up:
  - "[[Amazon EC2]]"
related:
  - "[[Identity and Access Management]]"
---
## Overview

[[IAM Role|Roles]] are the best practice ways for services to be granted permissions. EC2 instance roles are roles that an instance can assume and anything running in that instance has the permissions that role grants.

Starts with an IAM role with a permissions policy. EC2 instance role allows the EC2 service to assume that role.

The **instance profile** is the item that allows the permissions to get inside the instance. When you create an instance role in the console, an instance profile is created with the same name.

When IAM roles are assumed, you are provided temporary roles based on the permission assigned to that role. These credentials are passed through instance **meta-data**.

EC2 and the [[AWS Security Token Service (AWS STS)|secure token service]] ensure the credentials never expire.

## Important Concepts

-   Credentials are inside meta-data
    -   iam/security-credentials/role-name
    -   automatically rotated - always valid
    -   Resources need to check the meta-data periodically
-   Should always use roles compared to storing long term credentials
-   CLI tools use role credentials automatically

