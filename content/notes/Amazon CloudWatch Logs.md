---
tags:
  - aws/monitoring
up:
  - "[[Amazon CloudWatch]]"
related:
  - "[[Security Logging and Monitoring]]"
  - "[[CloudWatch Logs Subscriptions]]"
---
## Concepts
### Log streams

-A log stream is a sequence of log events that share the same source

### Log groups

- A log group is a **group of log streams that share the same settings**, such as retention, monitoring, and access control.
- You **define log groups and specify which streams to put into each group**.
- There is **no limit on the number of log streams that can belong to one log group**.

### Metric filters

- You can use metric filters to **extract metric observations from ingested events and transform them to data points in a CloudWatch metric**.
- Metric filters are assigned to log groups, and all of the filters assigned to a log group are applied to their log streams.

### Retention settings

- Retention settings can be used to **specify how long log events are kept** in CloudWatch Logs.
- Retention settings are also **assigned to log groups**.

### Log insights

- Logs Insights enables you to interactively **search and analyze your log data in Amazon CloudWatch Logs**.
- You can **perform queries to help you more efficiently and effectively respond to operational issues**.
- Logs Insights **includes a purpose-built query language**.

### Export
- Log data can take up to 12 hours to become available for export
- The API call is `CreateExportTask`
- Not near-real time or real-time... use [[CloudWatch Logs Subscriptions|Logs Subscriptions]] instead