---
tags:
  - docs
---
# Overview


> [!Definition] Definition
> AWS Step Functions is a low-code, visual workflow service that developers use to build distributed applications, automate IT and business processes, and build data and machine learning pipelines using AWS services. Workflows manage failures, retries, parallelization, service integrations, and observability so developers can focus on higher-value business logic.

There are some crucial [[AWS Lambda]] limitations:

- Lambda is a FaaS product
- There is a 15-minute maximum execution time
- Lambda functions can, theoretically, be chained together but, this can get messy at scale
- Runtime environments are _stateless_. Each environment is isolated; cleaned each time and any data needs to be transferred between environments if you want to maintain any form of state. This is why you cannot hold a state through different Lambda function invocations.

Step funtions allow you to create state machines. A state machine is a workflow. It has a _start point_, _end point_, and in between there are _states_. States are things inside a State Machine which can do things. States can do things, and take in data, modify data, and output data.

State machine is designed to perform an activity or workflow with lots of individual components and maintain the idea of data between those states.

Maximum duration for a state machine execution is 1 year.

Two types of workflow

-   Standard
    - Default
    - 1 year workflow exeution limit
-   Express
    - Designed for IOT or other high transaction uses
    - 5 minute workflow
    - Provides better processing guarantees

Started via API Gateway, IOT Rules, EventBridge, Lambda. Generally used for back end processing.

With State machines you can use a template to create and export State Machines once they're configured to your liking, it's called **Amazon States Language or ASL**. It's based on JSON.

State machines are provided permission to interact with other AWS services via IAM roles.

# States
States are the things inside a workflow, the things which occur. These states are available.

-   Succeed and Fail
    -   the process will succeed or fail.
-   Wait
    -   will wait for a certain period of time
    -   will wait until specific date and time
-   Choice
    -   different paths is determined based on an input. This is useful if you want a different set of behavior based on that input. For example, you might want the state machine to react differently depending on the stock level of an item in an order.
-   Parallel
    -   will create parallel branches based on a choice
-   Map
    -   accepts a list of things
    -   for each item in that list, performs an action or set of actions based on that particular item.
-   Task
    -   represents a single unit of work performed by a State Machine.
    -   it allows the state machine to actually do things.
    -   can be integrated with many different services such as Lambda, AWS batch, dynamoDB, ECS, SNS, SQS, Glue, SageMaker, EMR, and lots of others.



____
[[aws/serverless 