---
tags:
  - compsci/cloud/aws/security
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Amazon Elastic Container Service (ECS)]]"
  - "[[Threat Detection and Incident Response]]"
---
- Identify the affected ECS Cluster using GuardDuty 
- Identify the source of the malicious activity (e.g., container image, tasks)
- Isolate the impacted tasks (deny all ingress/egress traffic to the task using security groups)
- Evaluate the presence of malicious activity (e.g., malware)