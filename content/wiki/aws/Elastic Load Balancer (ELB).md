# Overview

>[!tl;dr]
>Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets and virtual appliances in one or more Availability Zones (AZs).
>

# Fundamentals
Using one server is risky because that server can have performance issues or be completely unavailable, thus bringing down an application.

A better solution is to use multiple servers. Without load balancing, this could bring additional problems.

-   The servers can end up with uneven load.
    -   Some requests take more CPU than others.
-   Failed instances will still show up in DNS cache.
    -   Due to TTL values, a user can be directed toward a dead server.

Load balancing can be internet facing or internal. The difference is whether the nodes of the LB, the things which run in the AZs have public IP addresses or not.

Internet facing LB is designed to be connected to, from public internet based clients, and load balance them across targets.

Internal load balancer is not accessible from the internet and is used to load balance inside a VPC only.

Load balancer sits between a client and one or more servers. Front end or listening side, accepts connections from a client. Back end is used for distribution to the targets.

# Load Balancer Architecture

Networking services that automatically distributes incoming traffic across multiple targets such as Amazon EC2 instances, AWS Lambda functions, Amazon EK2 containers, Amazon EC2 tasks, etc.

As the name implies, this service is primarily used in load balancing = distributing the incoming traffic load evenly to multiple underlying servers. 

Instead of just having a single server to process the load, you can launch multiple servers to handle the application requests and to provide high availability.

With an ELB, you can route the traffic to healthy resources running in different AZs. 

The user connects to a load balancer that is set to listens on port 80 and 443.

Within AWS, the configuration for which ports the load balancer listens on is called a **listener**.

The user is connected to the load balancer and not the actual server.

Behind the load balancer, there is an application server. At a high level when the user connects to the load balancer, it distributes that load to servers on the application server. The users client thinks it is talking directly to the application server.

LB will run health checks against all of the servers. If one of the servers does fail, the load balancer will realize this and stop sending connections to that server. From the users client, the application always works.

As long as 1+ servers are operational, the LB is operational. Clients shouldn't see errors that occur with one server.

An ELB offers [[Connection Draining]] that removes instances from services with care.

## Logging & Monitoring

Elastic Load Balancing provides **access logs** that capture detailed information about requests sent to your load balancer. Each log contains information such as the time the request was received, the client’s IP address, latencies, request paths, and server responses. You can use these access logs to analyze traffic patterns and troubleshoot issues.

Access logging is an optional feature of Elastic Load Balancing that is disabled by default. After you enable access logging for your load balancer, Elastic Load Balancing captures the logs and stores them in the [[Amazon S3#Bucket]] that you specify as compressed files. You can disable access logging at any time.

# Important Concepts

-   Clients connect to the **listener** of the load balancer.
-   The load balancer connects to one or more **targets** or servers.
-   Two connections in play.
    -   Listener connection: one connection between the client and listener.
    -   Backend connection: one connection between load balancer and target.
-   The LB abstracts the client away from individual servers.
-   Used for high availability, fault tolerance, and scaling

# ELB Types
[[Application Load Balancer]] is a layer 7 or Application Layer Load Balancer. It is capable of inspecting data that passes through it. It can understand the application layer `http` and `https` and take actions based on things in those protocols like paths, headers, and hosts.
A [[Network Load Balancer]] is used for load balancing TCP, UDP and TLS traffic.
A [[Gateway Load Balancer]] is primarily used for running third-party virtual appliances.
A [[Classic Load Balancer]] is intended for legacy applications that are still using the EC2-Classic network

![[Pasted image 20220217164127.png]]

# Cross-Zone Load Balancing
Each node that is part of the load balancer is able to distribute load across all instances across all AZ that are registered with that LB, even if its not in the same AZ. It is the reason we can achieve a balanced distribution of connections behind a load balancer.

It can also provide health checks on the target servers. If all instances are shown as healthy, it can distribute evenly.

[[Application Load Balancer]] can support a wide array of targets. Targets are grouped within target groups and an individual target can be a member of multiple groups. It's the groups which ALBs distribute connections to. You could create rules to direct traffic to different Target Groups based on their DNS.

## [[Route 53]]



____
tags:: [[AWS/efficency]] [[aws/route53]] [[review/dva]] [[Reliability]] 






