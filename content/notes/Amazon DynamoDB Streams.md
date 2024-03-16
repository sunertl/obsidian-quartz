---
tags:
  - docs
up:
  - "[[Amazon DynamoDB]]"
---
# Overview

- A data stream that captures each and every data change made to the items
- If an item was added, modified, or deleted, then that item will be included in the DynamoDB stream
- Can be associated with AWS Lambda. The function can poll the stream and execute a set of actions whether it detects new stream records
- Can also be integrated with Kinesis Data Streams
- Important component that needs to be enabled when using [[Amazon DynamoDB Global Tables]]
