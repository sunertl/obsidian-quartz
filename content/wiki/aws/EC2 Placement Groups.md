---
tags:
  - docs
---

# Overview


>[!Important] Important
>When you launch a new EC2 instance, the EC2 service attempts to place the instance in such a way that all of your instances are spread out across underlying hardware to minimize correlated failures. You can use _placement groups_ to influence the placement of a group of _interdependent_ instances to meet the needs of your workload.


Can provide low latency network performance and high network throughput which is helpful for multi application networks that require node-to-node communication.

It will significantly reduce the latency between multiple instances and improve network performance.

This is perfect if your application requires minimal latency between the EC2 instances that host your related components.

# Three types of placement groups

## Cluster
- packs the EC2 instances close together inside an AZ
	- Cluster placements need to be part of the same AZ. Cluster placement groups are generally the same rack, but they can even be the same EC2 host.
- Achieves the highest level of performance possible inside EC2.
- Best practice is to launch all of the instances within that group at the same time. If you launch with 9 instances and AWS places you in a place with capacity for 12, you are now limited in how many you can add.
- enables workloads to achieve low-latency network performance which is necessary for HPC applications with tightly coupled node-to-node communication
- Suitable for designing an architecture that require low latency and high network throughput between EC2 instances
- All members have direct connections to each other. They can achieve **10 Gbps single stream** vs 5 Gbps normally. They also have the lowest latency and max packets-per-second (PPS) possible in AWS.
- **If the hardware fails, the entire cluster will fail.**

### Important Concepts for Cluster Placement
-   **Clusters can't span AZs**. The first AZ used will lock down the cluster.
-   They can span VPC peers.
-   Requires a supported instance type.
-   Best practice to use the same type of instance (not mandatory).
-   Best practice to launch all instances at once (not mandatory).
-   This is the only way to achieve **10Gbps SINGLE stream performance**, other data metrics assume multiple streams.
-   Use cases: Performance, fast transfer speeds, and low consistent latency.

## Partition
- spreads your EC2 instances across logical partitions
- In this way, a group of one partitions do not share the underlying hardware with groups of instances in different partitions
	- If a problem occurs with one rack's networking or power, it will at most take out one instance.
- The main difference is you can launch as many instances in each partition as you desire.
- When you launch a partition group, you can allow AWS decide or you can specifically decide.
- This is commonly used by large distributed and replicated workloads such as [[Hadoop]], [[$ References/LYT Kit 6/Cards/Cassandra]] and [[Kafka]]
### Important Concepts for Partition Placement
- 7 partitions maximum for each AZ
- Instances can be placed into a specific partition, or AWS can pick.
- This is not supported on dedicated hosts.
- Great for HDFS, HBase, and Cassandra
- If you're running a large application which uses 100's of EC2 instances and it needs exposure to physical location for performance and availability reasons.

## Spread 
- Keep instances separated
	- strictly places a small group of EC2 instances across distinct underlying hardware
- This provides the best resilience and availability. Spread groups can span multiple AZs. Information will be put on distinct racks with their own network or power supply. There is a limit of 7 instances per AZ. The more AZs in a region, the more instances inside a spread placement group.
### Important Concepts for Spread Placement
-   Provides the highest level of availability and resilience.
      Each instance by default runs from a different rack.
-   **7 instances per AZ is a hard limit**.
      Not supported for dedicated instances or hosts.
- Use case: small number of critical instances that need to be kept separated from each other. Several mirrors of an application; different nodes of an application; etc.
