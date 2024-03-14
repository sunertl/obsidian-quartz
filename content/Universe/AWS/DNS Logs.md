---
tags:
  - compsci/cloud/aws/network
up:
  - "[[Amazon EC2]]"
related:
  - "[[Amazon GuardDuty]]"
---
## Overview
If you use AWS DNS resolvers for your [[Amazon EC2]] instances (the default setting), then GuardDuty can access and process your request and response DNS logs through the internal AWS DNS resolvers. If you use another DNS resolver, such as OpenDNS or GoogleDNS, or if you set up your own DNS resolvers, then GuardDuty cannot access and process data from this data source.

When you enable GuardDuty, it immediately starts analyzing your DNS logs from an independent stream of data. This data stream is separate from the data provided through the [[Route 53]] Resolver query logging feature. Configuration of this feature does not affect GuardDuty analysis.