---
tags:
  - CS/cloud/aws/security
up:
  - "[[IAM Role]]"
related:
  - "[[Identity and Access Management]]"
---
## Overview
### Services within the same AWS account
[[AWS Lambda]]
- Lambda execution role for example. It has a trust policy which trusts the Lambda service = Lambda is allowed to assume that role whenever a function is executed
- This role has a permissions policy which grants access to AWS products and services

### Emergency or out of the usual situations
- Group: Helpdesk is given read-only access to a customer's AWS account so they can keep an eye on performance. In emergency scenario, the team can get emergency permissions to handle specific scenarios they would normally not deal with
### Adding AWS into an existing corporate environment
- Identity provider that the staff uses to log into various systems (i.e. Microsoft AD)
	- SSO being implemented 
	- Roles are being used if you want to resuse existing identities within AWS because external accounts can't be used in AWS directly
### Designing architecture for mobile application
- App needs to store and retrieve data from a DB product in AWS
	- When you need to interact with AWS resources, you need to use an AWS identity - but there is also a 5,000 user limit per account
	- Can be fixed with a process called web identity federation which uses IAM roles
		- no AWS credentials need to be stored in the application (great security!)
		- Uses existing customer logins
		- Scales to 100,000,000s of accounts
### Cross-Account Access
- Two AWS accounts
	- One account uses scientific data stored in an S3 bucket
	- Other account has 1,000's of identities and the other account's IT team doesn't want to create IAM users in their account for all of the other account's staff
	- Best approach is to use a role in the other account