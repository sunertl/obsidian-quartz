---
tags:
  - docs
up:
  - "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Identity and Access Management]]"
  - "[[AWS Directory Service]]"
---
## Overview

- A pair of directory endpoints running in AWS (ENIs in a [[Amazon VPC|VPC]])
- Support directory-aware AWS products

>[!important] Important
>The service redirects requests to existing directory servers and no directory data is stored in AWS.

- Use existing on-premises AD with directory compatible AWS services - without any identity data in AWS
- Proof of concepts where you need to use existing identities

>[!important] Important
>It requires a working network connection!

- Network connectivity via [[AWS Direct Connect|Direct Connect]] or VPN


