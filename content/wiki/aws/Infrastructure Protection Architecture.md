---
tags:
  - docs
---

[[AWS Shield#Standard]] automatically looks at the data before any data reaches past Route53. The user is directed to the closest CloudFront location. Again, shield standard looks at the data again before it moves on.

[[AWS Web Application Firewall (WAF)#Rules]] are defined and included in a WEBACL which is associated to a cloud front distribution and deployed to the edge.

[[AWS Shield#Advanced]] can then intercept traffic when it reaches the load balancer. Once the data reaches the VPC, it has been filtered at Layer 3, 4, and 7 already.

Layer 7 filtering is only provided by WAF.

