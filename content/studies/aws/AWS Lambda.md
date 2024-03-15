---
tags:
  - CS/cloud/aws/architecture
  - CS/cloud/aws/serverless
up:
  - "[[AWS - Compute]]"
related:
---
# Overview

>[!definition]
>AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers.

- A serverless compute service.
- Lambda executes your code only when needed and scales automatically.
- Lambda can scale faster than the regular Auto Scaling feature of [[Amazon EC2]], [[Amazon Elastic Beanstalk]] or [[Amazon Elastic Container Service (ECS)]]
- Lambda functions are stateless – no affinity to the underlying infrastructure.
	- **Lambda function** is piece of code in one language
	- Lambda functions use a **runtime** (e.g. Python 3.6)
		- Virtual environment that is ready to go to run code in that language. Think of it as [[Containers]].
		- **You are billed only for the duration a function runs.**
		- There is no charge for having lambda functions waiting and ready to go.
- You choose the amount of memory you want to allocate to your functions and AWS Lambda allocates proportional CPU power, network bandwidth, and disk I/O.
- AWS Lambda is SOC, HIPAA, PCI, ISO compliant.
- Natively supports the following languages:
	- Node.js
	- Java
	- C#
	- Go
	- Python
	- Ruby
	- PowerShell
- You can also provide your own custom runtime.
- You can use [[Amazon EventBridge]] or [[Amazon CloudWatch]] for scheduled actions/notifications
- You can use [[AWS Step Functions]] for orchestration
- You can use [[AWS Lambda@Edge]] or [[Amazon CloudFront]] Functions to process data in close proximity to your end-users.


# Lambda Architecture
Best practice is to make it very small and very specialized. Lambda function code, when executed is known as being **invoked**. When invoked, it runs inside a runtime environment that matches the language the script is written in. The runtime environment is allocated a certain amount of memory and an appropriate amount of CPU. The more memory you allocate, the more CPU it gets, and the more the function costs to invoke per second.

- Lambda supports **synchronous** and **asynchronous invocation** of a Lambda function. You can control the invocation type only when you invoke a Lambda function (referred to as _on-demand invocation_).
- When you use an AWS service as a trigger, the invocation type is predetermined for each service. You have no control over the invocation type that these event sources use when they invoke your Lambda function. Since processing only takes 5 minutes, Lambda is also a cost-effective choice.
- An **event source** is the entity that publishes events, and a Lambda function is the custom code that processes the events.
- _Event source mapping_ maps an event source to a Lambda function. It enables automatic invocation of your Lambda function when events occur. 
- Lambda provides event source mappings for the following services.
    - [[Amazon Kinesis]]
    - [[Amazon DynamoDB]]
    - [[Amazon SQS]]
- Your functions’ _concurrency_ is the number of instances that serve requests at a given time. When your function is invoked, Lambda allocates an instance of it to process the event. When the function code finishes running, it can handle another request. If the function is invoked again while a request is still being processed, another instance is allocated, which increases the function’s concurrency.
- To ensure that a function can always reach a certain level of concurrency, you can configure the function with **reserved concurrency**. When a function has reserved concurrency, no other function can use that concurrency. Reserved concurrency also limits the maximum concurrency for the function.
- To enable your function to scale without fluctuations in latency, use **provisioned concurrency**. By allocating provisioned concurrency before an increase in invocations, you can ensure that all requests are served by initialized instances with very low latency.


Lambda functions can be given a [[IAM Role 1|role]] or **execution role**. The execution role is passed into the runtime environment. Whenever that function executes, the code inside has access to whatever permissions the role's permission policy provides.

Lambda can be invoked in an **event-driven** or **manual** way. Each time you invoke a lambda function, the environment provided is new. Never store anything inside the runtime environment, it is ephemeral.

## Lambda & VPC
In AWS Lambda, you can set up your function to establish a connection to your virtual private cloud (VPC). With this connection, your function can access the private resources of your VPC during execution like EC2, RDS and many others.

By default, AWS executes your Lambda function code securely within a VPC. Alternatively, you can enable your Lambda function to access resources inside your private VPC by providing additional VPC-specific configuration information such as VPC subnet IDs and security group IDs. It uses this information to set up elastic network interfaces which enable your Lambda function to connect securely to other resources within your VPC.

Your Lambda function automatically scales based on the number of events it processes. 

>[!important]
>If your Lambda function accesses a VPC, you must make sure that your VPC has sufficient ENI capacity to support the scale requirements of your Lambda function

It is also recommended that you specify at least one subnet in each Availability Zone in your Lambda function configuration.

By specifying subnets in each of the Availability Zones, your Lambda function can run in another Availability Zone if one goes down or runs out of IP addresses. If your VPC does not have sufficient ENIs or subnet IPs, your Lambda function will not scale as requests increase, and you will see an increase in invocation errors with EC2 error types like `EC2ThrottledException`. For asynchronous invocation, if you see an increase in errors without corresponding CloudWatch Logs, invoke the Lambda function synchronously in the console to get the error responses.

## Lambda Runtime

The Lambda runtime is stateless, so you should always use AWS services for input and output. Something like DynamoDB or S3. If a Lambda is invoked by an event, it gets details of the event given to it at startup.

# Components of a Lambda Application

- **Function** – a script or program that runs in Lambda. Lambda passes invocation events to your function. The function processes an event and returns a response.
- **Runtimes** – Lambda runtimes allow functions in different languages to run in the same base execution environment. The runtime sits in-between the Lambda service and your function code, relaying invocation events, context information, and responses between the two.
- **Layers** – Lambda layers are a distribution mechanism for libraries, custom runtimes, and other function dependencies. Layers let you manage your in-development function code independently from the unchanging code and resources that it uses.
- **Event source** – an AWS service or a custom service that triggers your function and executes its logic.
- **Downstream resources** – an AWS service that your Lambda function calls once it is triggered.
- **Log streams** – While Lambda automatically monitors your function invocations and reports metrics to CloudWatch, you can annotate your function code with custom logging statements that allow you to analyze the execution flow and performance of your Lambda function.
- AWS Serverless Application Model

# Lambda Functions

- You upload your application code in the form of one or more _Lambda functions_. Lambda stores code in Amazon S3 and encrypts it at rest.
- To create a Lambda function, you first package your code and dependencies in a deployment package. Then, you upload the deployment package to create your Lambda function.
- After your Lambda function is in production, Lambda automatically monitors functions on your behalf, reporting metrics through [[Amazon CloudWatch]].
- Conﬁgure **basic function** **settings** including the description, memory usage, execution timeout, and role that the function will use to execute your code.
- **Environment variables** are always encrypted at rest, and can be encrypted in transit as well.


# Lambda Security & Encryption

When you create or update Lambda functions that use environment variables, AWS Lambda encrypts them using the [[AWS Key Management Service (KMS)]]. When your Lambda function is invoked, those values are decrypted and made available to the Lambda code.

Although Lambda encrypts the environment variables in your function by default, sensitive information would still be visible to other users who have access to the Lambda console. This is because Lambda uses a default KMS key to encrypt the variables, which is usually accessible by other users. The best option in this scenario is to use encryption helpers to secure your environment variables.

The first time you create or update Lambda functions that use environment variables in a region, a default service key is created for you automatically within AWS KMS. This key is used to encrypt environment variables. However, if you wish to use encryption helpers and use KMS to encrypt environment variables after your Lambda function is created, you must create your own AWS KMS key and choose it instead of the default key. The default key will give errors when chosen. Creating your own key gives you more flexibility, including the ability to create, rotate, disable, and define access controls, and to audit the encryption keys used to protect your data.


- **Versions and aliases** are secondary resources that you can create to manage function deployment and invocation.
- A **layer** is a ZIP archive that contains libraries, a custom runtime, or other dependencies. Use layers to manage your function’s dependencies independently and keep your deployment package small.
- You can configure a function to mount an [[Amazon Elastic File System (EFS)]] file system to a local directory. With [[Amazon Elastic File System (EFS)]], your function code can access and modify shared resources securely and at high concurrency.
- **Lambda functions can run up to 15 minutes**. That is the max limit.


## Important Concepts

-   Currently 15 min execution limit.
-   Assume each execution gets a new runtime environment.
-   Use the execution role which is assumed when needed.
-   Always load data from other services from public APIs or S3.
-   Store data to other services (e.g. S3).
-   1M free requests and 400,000 GB-seconds of compute per month.
