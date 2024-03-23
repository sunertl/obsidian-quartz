---
tags:
  - docs
---
# AWS Organizations
AWS Organizations is a product which allows larger businesses to manage multiple [[AWS Account|AWS accounts]] with little management oversight. Without Organizations, these accounts would have each their own pool of IAM users as well as separate payment methods. 

# Creating an Organization
At least **one standard account is needed to create an organization** - this account becomes the **management account** for the organization. With the management account, you can invite existing [[AWS Account|AWS accounts]] in the organization. Once the invited accounts join, they will become member accounts.

# Structure of an Organization
A structure is especially useful if you have a large number of individual [[AWS Account|AWS accounts]]. It is a hierarchical structure and at the top is the organization root container. Not to be confused with the account root user which is the admin user of an [[AWS Account|AWS account]]. The organization root is only a container within an AWS organization, which can contain AWS accounts and this means, member accounts or the management account, as well as containing accounts, the organizational root can also contain other containers, and these are known as **organizational units or OUs**. 

Organizational units can contain [[AWS Account|AWS accounts]], so member accounts or the management account, or they can contain other OUs. You can build a complex, nested AWS account structure within organizations.

# Consolidated Billing
Member accounts pass their billing to the management account of the organization. 

[[Service Control Policy (SCP)]]

___
# References

[[AWS Identity & Access Management (IAM)]]
[[AWS Security, Identity & Compliance]]


#docs #docs #docs 
