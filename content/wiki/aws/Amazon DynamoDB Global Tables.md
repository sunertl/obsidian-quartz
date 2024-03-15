---
tags:
  - CS/cloud/aws/database
up:
  - "[[Amazon DynamoDB]]"
---
# Overview


Global tables build on the global [[Amazon DynamoDB]] footprint to provide you with a fully managed, multi-region, and multi-active database that delivers fast, local, read and write performance for massively scaled, global applications. Global tables replicate your DynamoDB tables automatically across your choice of AWS Regions.

Global tables eliminate the difficult work of replicating data between Regions and resolving update conflicts, enabling you to focus on your application's business logic. In addition, global tables enable your applications to stay highly available even in the unlikely event of isolation or degradation of an entire Region.

You can set up global tables in the AWS Management Console or AWS CLI. No application changes are required because global tables use existing DynamoDB APIs. There are no upfront costs or commitments for using global tables, and you pay only for the resources provisioned. 

# How it works

When you create a DynamoDB global table, it consists of multiple replica tables (one per AWS Region) that DynamoDB treats as a single unit. Every replica has the same table name and the same primary key schema. When an application writes data to a replica table in one Region, DynamoDB propagates the write to the other replica tables in the other AWS Regions automatically.

For example, suppose that you have a large customer base spread across three geographic areas—the US East Coast, the US West Coast, and Western Europe. Customers can update their profile information by using your application. Without a managed replication solution, you could write code to replicate data changes among the tables for each of these Regions. However, doing this would be a time-consuming and labor-intensive effort.

Instead of writing your own code, you could create a global table referencing your three Region tables and DynamoDB would then automatically replicate data changes among those tables so that changes to one Region would seamlessly propagate to the other Regions. In addition, if one of the AWS Regions were to become temporarily unavailable, your customers could still access the same data in the other Regions.

# Benefits

**Read and write locally, access your data globally**
Multi-active replication ensures that updates performed in any Region are propagated to other Regions, and that data in all Regions is eventually consistent. This means tables accessed locally by your globally distributed application are always up to date.

**Performance**
Global tables enable you to read and write your data locally providing single-digit-millisecond latency for your globally distributed application at any scale.

**Easy to set up and operate**
Global tables eliminate the complexity and operational burden of deploying and managing globally available tables in DynamoDB. You can simply select the Regions where you need your data replicated, and DynamoDB handles the rest. Applications access global tables via the existing DynamoDB APIs and endpoints.  

**Availability, durability, and multi-region fault tolerance**
Global tables can help applications stay available and high performing for business continuity. If a single AWS Region becomes isolated or degraded, your application can redirect to a different Region and perform reads and writes against a different replica table. You can apply custom business logic to determine when to redirect requests to other Regions. DynamoDB keeps track of any writes that have been performed, but have not yet been propagated to all of the replica tables. When the Region comes back online, DynamoDB resumes propagating any pending writes from that Region to the replica tables in other Regions and vice versa.  

**Consistency and conflict resolution**
Any changes made to any item in any replica table are replicated to all the other replicas within the same global table. In a global table, a newly written item is usually propagated to all replica tables within a second. With a global table, each replica table stores the same set of data items. DynamoDB does not support partial replication of only some of the items. If applications update the same item in different Regions at about the same time, conflicts can arise. To help ensure eventual consistency, DynamoDB global tables use a last-writer-wins reconciliation between concurrent updates, in which DynamoDB makes a best effort to determine the last writer. With this conflict resolution mechanism, all replicas agree on the latest update and converge toward a state in which they all have identical data.