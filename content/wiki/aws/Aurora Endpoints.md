---
tags:
  - docs
---
Aurora clusters like RDS use endpoints, so these are DNS addresses which are used to connect to the cluster. Unlike RDS, Aurora clusters have multiple endpoints that are available for an application.

Minimum endpoints

-   **Cluster endpoint** always points at the primary instance.
    -   This is used for read and write applications.
-   **Reader endpoint**
    -   Will point at primary instance if that is all there is.
    -   Will load balance across all available replicas for read operations.
    -   Additional replicas which are used for reads will be load balanced automatically.