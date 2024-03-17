---
tags:
  - docs
---

When you create a record, you choose a routing policy, which determines how Amazon Route 53 responds to queries:

- **[[Simple Routing]] policy** – Use for a single resource that performs a given function for your domain, for example, a web server that serves content for the example.com website.
- **[[Failover Routing]] policy** – Use when you want to configure active-passive failover.
- **[[Geolocation Routing]] policy** – Use when you want to route traffic based on the location of your users.
- **[[Geoproximity Routing]] policy** – Use when you want to route traffic based on the location of your resources and, optionally, shift traffic from resources in one location to resources in another.
- **[[Latency Routing]] policy** – Use when you have resources in multiple AWS Regions and you want to route traffic to the Region that provides the best latency with less round-trip time.
- **[[Multi-Value Answer Routing]] policy** – Use when you want Route 53 to respond to DNS queries with up to eight healthy records selected at random.
- **[[Weighted Routing]] policy** – Use to route traffic to multiple resources in proportions that you specify.
