---
tags:
  - compsci/cloud/aws/security
  - compsci/cloud/aws/network
up:
  - "[[AWS Network & Content Delivery]]"
related:
  - "[[Infrastructure Security]]"
  - "[[Amazon VPC]]"
  - "[[AWS Site-to-Site VPN]]"
---
## Overview
---
>[!summary] Summary
> Connect from your computer using [[OpenVPN]] to your private network in AWS and on-premises

- Allows you to connect to your [[Amazon EC2|EC2 instances]] over a private IP (just as if you were in the private [[Amazon VPC|VPC network]])
- Goes over public internet

![[Pasted image 20231102191015.png]]

## Authentication Types
---
### Active Directory Authentication
- Authenticate against Microsoft Active Directory (user-based)
- AWS managed Microsoft AD or on-premises AD through AD connector
- Supports MFA

### Mutual Authentication
- Use certificates to perform the authentication (certificate-based)
- Must upload the server certificate to [[AWS Certificate Manager]]
- One client certificate for each user (recommended)

### Single Sign-On
(supports [[AWS IAM Identity Center]])
- Authenticate against SAML 2.0-based identity providers (user-based)
- Establish trust relationship between AWS and the identity provider
- Only one identity provider at a time