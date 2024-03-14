[[AWS Application Integration]]
#compsci/development/engineering/architecture


>[!Important]
>Composed of multiple components that run on different platforms. The components are decoupled from each other, so a failure in one module won't affect the other application modules significantly.

- This type of architecture is easier to scale, either vertically ([[Vertical Scaling]]) or horizontally ([[Horizontal Scaling]]) since the components are running independently. 
- Its workflow is asynchronous which allows the incoming requests to run smoothly without losing data whenever the system is unavailable or experiencing high latency.   
- It eliminates the excessive dependencies between the different modules of your application. 
- With these loosely coupled components,  your application is protected from system outages, brought by a single faulty module since the components are hosted in totally different servers or platforms, instead of just one massive unit. 

>[!examples]
>- Microservices architectures
>- Containerized architectures
>- Serverless architectures
>- Service-oriented architectures
>- Event-driven architectures

- It can also communicate to external 3rd-party systems and data stores more efficiently.
- You can separate one component that handles the web user interface of your app and another one for your web APIs.

>[!important]
>Implementing a change in a specific component won't directly disturb other components - minimizing the risk of system downtimes. 

# AWS specific considerations


- You can use a message queue in [[Amazon SQS]] to process your incoming requests at a later time, removing the time constraint that a monolithic architecture has. 
- Any failed jobs can be retried again or stored on a dead-letter queue for later checking - asynchronous processing.
- [[Amazon SQS]] can also be integrated with [[Auto Scaling]] to dynamically increase or decrease your compute resources that handle the incoming requests of your application.

>[!important]
>If you are building brand new applications in the cloud, then it is highly recommended that you consider Amazon SQS and Amazon SNS. Amazon SQS and SNS are lightweight, fully managed message queue and topic services that scale almost infinitely and provide simple, easy-to-use APIs. You can use Amazon SQS and SNS to decouple and scale microservices, distributed systems, and serverless applications, and improve reliability.


- [[Amazon MQ]] can also be used as a managed message broker service for Apache ActiveMQ and RabbitMQ to easily set up and operate message brokers on AWS. 

>[!important]
>If you’re using messaging with existing applications and want to move your messaging service to the cloud quickly and easily, it is recommended that you consider Amazon MQ. It supports industry-standard APIs and protocols so you can switch from any standards-based message broker to Amazon MQ without rewriting the messaging code in your applications.




- For monitoring, you can send notifications to your internal or external systems using [[Amazon SNS]]
- Event-driven architectures can also be implemented in AWS using [[Amazon EventBridge]] that allows you to connect your app data from your own apps, 3rd party SaaS, and other AWS services.
- Creating your RESTful APIs or GraphQL APIs is now easier using [[AWS AppSync]] and [[Amazon API Gateway]].  
- You can also coordinate multiple [[AWS Lambda]] functions into serverless workflows using [[AWS Step Functions]]. 
