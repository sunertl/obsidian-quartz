---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Threat Detection and Incident Response]]"
  - "[[Containers]]"
  - "[[Compromised ECS Cluster]]"
---
- Identify the malicious container using [[Amazon GuardDuty]]
- Isolate the malicious container (deny all ingress/egress traffic to the container)
- Suspend all process in the container (pause the container)
- Or stop the container and look at [[EBS Snapshots]] retained by [[Amazon GuardDuty]] (snapshot retention feature)
- Evaluate the presence of malicious activity (e.g. malware)

