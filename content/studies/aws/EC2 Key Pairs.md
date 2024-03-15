---
tags:
  - CS/cloud/aws/security
up: "[[AWS Security, Identity & Compliance]]"
related:
  - "[[Amazon EC2]]"
  - "[[Threat Detection and Incident Response]]"
---
## Overview

![[Pasted image 20231015120256.png]]

- Keep your private key secure (no way to recover it)
- You can create key pairs outside of AWS and upload them
- Both ED25519 and 2048-bit SSH-2 RSA keys are supported

- Key pairs don't get deleted from EC2 instance's root volumes when the key pair removed from the EC2 console
- Launching an EC2 instance with prebuilt AMI, the old key pair will exist alongside with the new key pair

## Remediating Exposed EC2 key pairs

- Remove all public keys in `~/.ssh/authorized_keys` file on EC2 instances
- Create a new key pair and add its public key to the `~/.ssh/authorized_keys` file on all EC2 instances
- Use [[SSM Run Command]] to automate the process add/delete public keys on EC2 instances

![[Pasted image 20231015122111.png]]

## Lost SSH Key Pair / Password

- [[Connect to Linux EC2 instance with a lost SSH key pair]]
- [[Connect to Windows EC2 instance with a lost password]]
- 