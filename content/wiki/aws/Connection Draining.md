---
tags:
  - docs
---
>[!TL;DR]
>Any back-end instances that are being deregistered will complete requests that are in progress before deregistration. If a back-end instance failts. health checks, the load balancer will not send any new requests to the unhealthy instances, but will allow existing requests to complete

In order to provide a first-class use experience, you’d like to avoid breaking open network connections while taking an instance out of service, updating its software, or replacing it with a fresh instance that contains updated software. Imagine each broken connection as a half-drawn web page, an aborted file download, or a failed web service call, each of which results in an unhappy user or customer.

You can now avoid this situation by enabling the new **Connection Draining** feature for your Elastic Load Balancers. You can do this from the AWS Management Console, the AWS Command Line Interface, or by calling the **ModifyLoadBalancerAttributes** function in the Elastic Load Balancing API .You simply enable the feature and enter a timeout between one second and one hour. Connection Draining is enabled by default for load balancers that are created using the Console.

When Connection Draining is enabled and configured, the process of deregistering an instance from an Elastic Load Balancer gains an additional step. For the duration of the configured timeout, the load balancer will allow existing, in-flight requests made to an instance to complete, but it will not send any new requests to the instance. During this time, the API will report the status of the instance as **InService**, along with a message stating that “Instance deregistration currently in progress.” Once the timeout is reached, any remaining connections will be forcibly closed.