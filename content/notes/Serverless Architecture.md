---
tags:
  - docs
---
#docs 
# Overview

>[!definition]
>An on-demand service with less server management. 

The compute capacity is provisioned and run once a request has been made, and where you only pay for the actual computing time that you have consumed. It only runs on-demand and stops running after the processing has been completed, to save on costs. Therefore, it provides a massive cost-benefit since you only pay for the actual service usage, excluding the idle time where your resources are not used at all.

Serverless computing is also highly scalable and can quickly increase its compute capacity in a matter of milliseconds. It can process hundreds or even thousands of requests concurrently without manual intervention, or a scaling configuration in place.  

>[!Important]
>A "serverless" solution does not mean it is literally running out of thin air with absolutely no physical server at all. That is a wrong concept behind serverless computing since you must have a CPU, a RAM, a network interface card, and other physical server devices to process data. 

Serverless simply means that a particular service requires less server management - meaning a cloud service provider like AWS handles all of the manual server management tasks for you. This allows you to focus on implementing your core business logic instead of just wasting your time doing time-consuming server deployment and maintenance tasks that don't add much value to your business. You don't need to launch your own virtual machine like Amazon EC2, apply OS patches on a regular basis, upgrade the server capacity if the incoming load increases, or manage the available disk space of your server. 

Serverless computing has different forms that you can use for your various workloads. Its most popular form is FaaS or Function-as-a-Service, which runs your code or function only when needed and scales its compute capacity automatically. An example of FaaS is [[AWS Lambda]]. 

There is also a serverless compute engine for containers, such as [[AWS Fargate]]. You can use [[Amazon Aurora Serverless]], [[Amazon DynamoDB]], and [[Amazon S3]] as a serverless data store. 

Essentially, a serverless service is powered by lightweight micro virtual machines or microVMs. These microVMs combine the capabilities of a regular virtual machine with the efficiency of containers. Since it's a smaller version of a VM, it can be instantiated way faster than a full-fledge virtual machine but with certain limitations. A serverless service can be in a form of a function, which is just a regular code that does a specific task. 


>[!example]
>You can develop a function that fetches data from a public API and then store the results in an Amazon S3 bucket. The act of fetching data from a public API and storing data to an S3 bucket are the capabilities of that function.

This is applicable in [[AWS Edge Computing]] too. You can deploy a function on [[Edge Locations]] to your users to further speed up the processing time of your data. A function is lightweight, so it can be easier deployed than a VM. Functions can be deployed via [[AWS Lambda@Edge]], [[Amazon CloudFront]] Functions and others.

# Traditional | IaaS | FaaS

- In a traditional system, you have to buy a physical rack server first and set it up on-premises before you can start installing and running your applications. Responsible for every maintenance task!
- For server-based cloud architecture (IaaS), the virtual servers can be launched on-demand with just a click of a button and you don't have to physically buy or set up the rack servers yourself. Responsibility split by you and cloud service provider.
- In FaaS, similar concept to IaaS but you don't have the responsibility of launching, managing, monitoring or scaling the underlying virtual servers that are used by your serverless resources. You don't launch, manage  or troubleshoot your EC2 instances. Less server mgmt involved.

>[!important]
>Serverless service does NOT run all the time unlike or traditional virtual machine. Key difference between serverless service and managed service in AWS. You will only be charged for the duration of the request and not for idle time. Lambda function i.e. can only run continuously for 15 minutes.

- You can also launch a serverless DB such as [[Amazon DynamoDB]] or [[Amazon Aurora Serverless]] -> scalable, cost-effective, not using underlying EC2 instance.

# Serverless Technologies

- [[AWS Lambda]]
- [[AWS Fargate]]
- Serverless Data Stores
	- Static data in [[Amazon S3]]
	- Dynamic data in [[Amazon DynamoDB]] or [[Amazon Aurora Serverless]]
	- DWH [[Amazon Redshift Spectrum]]
- Serverless ETL (Extract, Transform, Load) & Analytics
	- [[AWS Glue]]
- Analytics Services
	- [[Amazon Athena]]
	- [[Amazon Kinesis Data Analytics]]
	- [[Amazon QuickSight]]

# Serverless Architecture Types

- **Static Single Page Application**: [[Amazon S3]] + [[Amazon CloudFront]]
- **Containerized Application**: [[AWS Fargate]]
- **Service-Oriented Architecture**: [[AWS Lambda]] + [[Amazon API Gateway]]
- **Serverless Architecture**: [[AWS Lambda]], [[Amazon API Gateway]], [[AWS Fargate]], [[Amazon DynamoDB]]

# Serverless Databases ([[Amazon DynamoDB]], [[Amazon Aurora Serverless]])
- For applications that have sporadic or infrequent database usage patterns
- No need to choose a particular DB instance type or do any advanced capacity planning
- Automatically increases and decreases the compute and storage capacity of your database
- Unlike RDS, there’s no need to downgrade your database instance if your demand decreases
- Costs way less than a regular server-based database


___
# References
[[AWS - Compute]]