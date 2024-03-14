Multi-value answer routing lets you configure Amazon Route 53 to return multiple values, such as IP addresses for your web servers, in response to DNS queries. You can specify multiple values for almost any record, but multi-value answer routing also lets you check the health of each resource, so Route 53 returns only values for healthy resources. It's not a substitute for a load balancer, but the ability to return multiple health-checkable IP addresses is a way to use DNS to improve availability and load balancing.

To route traffic approximately randomly to multiple resources, such as web servers, you create one multi-value answer record for each resource and, optionally, associate a Route 53 health check with each record. Route 53 responds to DNS queries with up to eight healthy records and gives different answers to different DNS resolvers. If a web server becomes unavailable after a resolver caches a response, client software can try another IP address in the response.

Note the following:

-   If you associate a health check with a multi-value answer record, Route 53 responds to DNS queries with the corresponding IP address only when the health check is healthy.
    
-   If you don't associate a health check with a multi-value answer record, Route 53 always considers the record to be healthy.
    
-   If you have eight or fewer healthy records, Route 53 responds to all DNS queries with all the healthy records.
    
-   When all records are unhealthy, Route 53 responds to DNS queries with up to eight unhealthy records.


___
tags:: [[network]]  