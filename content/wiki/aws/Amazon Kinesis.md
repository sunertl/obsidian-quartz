---
tags:
  - CS/cloud/aws/serverless
  - CS/cloud/aws/intelligence
up: "[[AWS Analytics]]"
related: "[[Amazon SQS]]"
---
# Overview

>[!definition]
>Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. Amazon Kinesis offers key capabilities to cost-effectively process streaming data at any scale, along with the flexibility to choose the tools that best suit the requirements of your application. With Amazon Kinesis, you can ingest real-time data such as video, audio, application logs, website clickstreams, and IoT telemetry data for machine learning, analytics, and other applications. Amazon Kinesis enables you to process and analyze data as it arrives and respond instantly instead of having to wait until all your data is collected before the processing can begin.

- Scalable streaming service. It is designed to inject data from lots of devices or lots of applications.
- Many producers send data into a Kinesis Stream. Streams are the basic unit of Kinesis.
- The stream can scale from low to near infinite data rates.
- Highly available public service by design.
- **Streams store a 24-hour moving window of data**.
    - Can be increased to 7 days.
    - Data 24 hours + 1s is replaced by new data entering the stream.
- Kinesis includes the storage costs within it for the amount of data that can be ingested during a 24 hour period. However much you ingest during 24 hours, that's included.
- Multiple consumers can access data from that moving window.
    - One might look at data points once per hour
    - Another looks at data 1 per minute.
- Kinesis stream starts with 1 shard and expands as needed.
    - Each shard can have 1MB/s for ingestion and 2MB/s consumption.

**Kinesis data records (1MB)** are stored across shards and are the blocks of data for a stream.

# Kineses Data Firehose
[[Amazon Kinesis Data Firehose]] connects to a Kinesis stream. It can move the data from a stream onto S3 or another service. Kinesis Firehose allows for the long term persistence of storage of kinesis data into services like S3.

# Kinesis Data Streams
[[Amazon Kinesis Data Streams]] is a serverless streaming data service that makes it easy to capture, process, and store data streams at any scale.

# Important Concepts

-   Large throughput or large numbers of devices
-   Huge scale ingestion with multiple consumers
-   Rolling window for multiple consumers
-   Designed for data ingestion, analytics, monitoring, app clicks
