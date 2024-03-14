---
tags:
  - compsci/cloud/aws/security
up: "[[Amazon EC2]]"
related:
  - "[[Threat Detection and Incident Response]]"
  - "[[EC2 Key Pairs]]"
---
## Using EC2 User Data


- Create a new key pair, then copy the public key
- Stop the instance, update the EC2 user data (cloud-config format)
- Start the instance and connect with the private key
- Delete the EC2 user data

![[Pasted image 20231017143743.png]]

![[Pasted image 20231017143754.png]]

## Using Systems Manager

- Use AWSSupport-ResetAccess automation document
- will create and apply a new key pair
- works for both Linux and Windows
- the private key stored encrypted in [[SSM Parameter Store]] /ec2rl/openssh/instance_id/key
- must have SSM agent installed

![[Pasted image 20231017144011.png]]

## Using EC2 Instance Connect

- EC2 Instance Connect agend must be installed (already installed on Amazon Linux 2 and Ubuntu 16.04 or later)
- Connect using EC2 Instance Connect temporary session
- Store permanent new public SSH key into `~/.ssh/authorized_keys`

![[Pasted image 20231017144152.png]]

## Using EC2 Serial Console

- Connect to your instance without a working network connection
- Used with supported Nitro-based EC2 instances
- Must be enabled at the AWS account level

![[Pasted image 20231017144250.png]]

![[Pasted image 20231017144306.png]]

## Using EBS Volume Swap

- Create a new key pair
- Stop the original EC2 instance
- Detach the EBS root volume
- Attach the EBS volume to a temporary EC2 instance as a secondary volume
- Add the new public key to `~/.ssh/authorized_keys` on the volume
- Re-attach the volume to the original instance, then restart the instance

![[Pasted image 20231017144435.png]]