---
tags: 
up:
  - "[[Amazon EC2]]"
related:
  - "[[Identity and Access Management]]"
---
## Overview

>[!Definition] Definition
>Instance metadata is data about your instance that you can use to configure or manage the running instance. Instance metadata is divided into categories, for example, host name, events, and security groups.

- Data that is provided to the instance
- Data about the instance that can be used to configure or manage a running instance
- Accessible inside ALL instances
	-  IP address to access: http://169.254.169.254


For existing instances, you can turn off access to your instance metadata by disabling the HTTP endpoint of the instance metadata service, regardless of which version of the instance metadata service you are using. You can reverse this change at any time by enabling the HTTP endpoint. Use the `modify-instance-metadata-options` CLI command and set the `http-endpoint` parameter to `disabled`.
