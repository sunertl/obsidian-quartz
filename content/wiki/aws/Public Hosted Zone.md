---
tags:
  - docs
---


- A hosted zone is a DNS database for a given section of global DNS data. 

- When creating a hosted zone, AWS provides at least 4 DNS name servers which host the zone.

- This is globally resilient service due to multiple DNS servers.

- Hosted zones are created automatically when you register a domain using [[Route 53]].

- Hosted zones can be created separately. If you want to register a domain elsewhere and use [[Route 53]] to host the zone file and records for that domain, then you can specifically create a hosted zone and point at an externally registered domain at that zone. There is a monthly fee to host each hosted zone within [[Route 53]] and a fee for any queries made to that service.

- Hosted Zones are what the DNS system references via delegation and name server records. A hosted zone, when referenced in this way by the DNS system, is known as being authoritative for a domain. It becomes the single source of truth for a domain.

- [[Amazon VPC]] instances are already configured (if enabled) with the VPC +2 address as their DNS resolver - this allows querying of [[Route 53]] public and internet hosted DNS zones from instances within that VPC.