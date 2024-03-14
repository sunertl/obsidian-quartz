[[Identity]]

# AWS Account

>[!Definition]
An AWS account is a container for [[Identity|identities]] (users) and [[Resource|resources]].

- Can contain the impact of admin errors, or exploits by bad actors. Use separate accounts for separate things (DEV, TEST, PROD) or teams or products or clients
- Full trust over IAM users, groups and roles 
	- Users, groups and roles can also be created and given FULL or LIMITED permissions
- The account ROOT user has full control over all of this AWS account and any resources created within it & can't be restricted
- By default all access to an AWS account & resources is denied except for the Account Root user
- When creating an AWS account you provide an account name e.g. PROD, a unique email address and credit card
	- Resources bill to the AWS account payment method as they are consumed
	- You can use the credit card for multiple AWS accounts, but the email address needs to be unique!
- You can create additional identities inside an account that can be restricted

___
# References

[[AWS Organizations]]
[[Identity]]

#compsci/cloud/aws/iam
