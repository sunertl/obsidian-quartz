---
tags:
  - docs
up:
  - "[[AWS - Compute]]"
related:
  - "[[Containers]]"
  - "[[Containerization]]"
  - "[[Docker Containers Management on AWS]]"
---

# Overview

>[!definition]
>Accepts [[Containers]] and instructions you provide. It orchestrates where and how to run the containers. It is a managed container-based compute service.

ECS runs into two modes: 
1. EC2
2. Fargate

-   ECS allows you to create a cluster.
    -   Clusters are where containers run on
-   Container images will be located on a registry  [[Docker#Docker Storage|docker storage]].
    -   AWS provides a registry called [[Amazon Elastic Container Registry (ECR)]] 
    -   Dockerhub can be used as well.
-   **Container definition** tell ECS where your container is. It tells ECS which port your container uses (e.g. port 80, which is http). Container definition gives ECS just enough info about a single container.
    -   A pointer to which image to use and the ports that will be exposed.
-   **Task definitions** store the resources used by the task.
    -   It also stores the **task role**, an IAM role that allows the task access to other AWS resources.


>[!important]
>Task roles are the best practice way for giving containers within ECS permissions to access AWS products and services. However, task does not scale on its own and it is not highly available.

See the [AWS documentation on container definition](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html) and [task definition](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TaskDefinition.html) for more information.

# Task Definitions



# Task Placements

>[!important]
>ECS **Service** is configured via Service Definition and represents how many copies of a task you want to run for scaling and HA.

# ECS Cluster Types

ECS Cluster manages:

-   Scheduling and Orchestration
-   Cluster manager
-   Placement engine

## EC2 Launch Type

- ECS cluster is created within a VPC. It benefits from the multiple AZs that are within that VPC. You specify an initial size which will drive an [[Auto Scaling Group#Groups|Auto Scaling Group]].
- ECS using EC2 mode is not a serverless solution, you need to worry about capacity and availability for your cluster.
- The container instances are not delivered as a managed service, they are managed as normal EC2 instances. You can use spot pricing or prepaid EC2 servers.
- If you already are using containers, use **ECS**.
- **EC2 mode** is good for a large workload if you are price conscious. This allows for spot pricing and prepayment.

## Fargate Launch Type

- Removes more of the management overhead from ECS, no need to manage EC2.
- **Fargate shared infrastructure** allows all customers to access from the same pool of resources.
- Serverless
- Fargate deployment still uses a cluster with a VPC where AZs are specified.
- For ECS tasks, they are injected into the VPC. Each task is given an _elastic network interface_ which has an IP address within the VPC. They then run like a VPC resource.
- You only pay for the container resources you use.
- To scale, just increase the number of tasks. Simple - no more EC2 instances.
- **Fargate** is great if you:
	- Have a large workload but are overhead conscious.
	- Have small or burst style workloads.
	- Use batch or periodic workloads.

# Load Balancer Integrations

- [[Application Load Balancer]] supported and works for most use cases
- [[Network Load Balancer]] recommended only for high throughput / high performance use cases, or to pair it with [[AWS PrivateLink]]
- [[Elastic Load Balancer (ELB)]] supported, but not recommended (no advanced features - no Fargate)


# ECS Service Auto Scaling

- Automatically increase/decrease the desired number of [[ECS Tasks]]
- Amazon ECS Auto Scaling uses [[AWS Application Auto Scaling]]
	- **Target tracking** - scale based on target value for specific [[Amazon CloudWatch]] metric
	- **Step scaling** - scale based on a specified [[Amazon CloudWatch]] Alarm
	- **Scheduled scaling** - scale based on a specified date/time (predictable changes)