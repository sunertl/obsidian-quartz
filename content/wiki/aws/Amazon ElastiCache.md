---
tags:
  - docs
---
# Overview

Amazon ElastiCache is a web service that makes it easy to set up, manage, and scale a distributed in-memory data store or cache environment in the cloud. It provides a high-performance, scalable, and cost-effective caching solution. At the same time, it helps remove the complexity associated with deploying and managing a distributed cache environment.

- The same way RDS is to get managed Relational Databases, ElastiCache is to get managed Redis or Memcached 

>[!Definition]
>Caches are in-memory databases with really high performance, low latency

- Helps reduce load off of databases for read-intensive workloads
- Helps make your application stateless
- AWS takes care of OS maintenance / patching, optimizations, setup, configuration, monitoring, failure recovery and backups
- Using ElastiCache involves heavy application code changes

# DB Cache

- Application queries ElastiCache
	- if not available ('Cache Miss'), get from RDS and store in ElastiCache
	- if available, it's called 'Cache Hit'
- Helps relieve load in RDS
- Cache must have an invalidation strategy to make sure only the most current data is used in there

# User Session Store

- User logs into any of the application
- The app writes the session data into ElastiCache
- The user hits another instance of our app
- The instance retrieves the data and the user is already logged in

# Redis vs Memcached

## Redis

- Multi AZ w/ auto failover
- Read replicas to scale reads and have high availability
- data durability
- backup and restore features

## Memcached

- Multi-node for partitioning of data (sharding)
- No high availability (replication)
- Non persistent
- no backup and restore
- Multi-threaded architecture

# Strategies

## Lazy Loading / Cache-Aside / Lazy Population

- If application wants to read something, it communicates first w/ ElastiCache. If it has something for the application, it's a Cache Hit. 
	- If the cache does not have information for the application, it's called a Cache Miss. The application still needs to make a request to get that data.
	- The application makes a request to a DB (RDS, i.e.)
		- If the application gets the data, it writes it to cache

This architecture is great because only the requested data is going to be cached. If there's no data that is requested from RDS, it will not end up in the cache -> very efficient!



