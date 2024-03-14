Geoproximity routing lets Amazon Route 53 route traffic to your resources based on the geographic location of your users and your resources. You can also optionally choose to route more traffic or less to a given resource by specifying a value, known as a _bias_. A bias expands or shrinks the size of the geographic region from which traffic is routed to a resource.

To use geoproximity routing, you must use Route 53 [traffic flow](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-flow.html). You create geoproximity rules for your resources and specify one of the following values for each rule:

-   If you're using AWS resources, the AWS Region that you created the resource in
    
-   If you're using non-AWS resources, the latitude and longitude of the resource
    

To optionally change the size of the geographic region from which Route 53 routes traffic to a resource, specify the applicable value for the bias:

-   To expand the size of the geographic region from which Route 53 routes traffic to a resource, specify a positive integer from 1 to 99 for the bias. Route 53 shrinks the size of adjacent regions.
    
-   To shrink the size of the geographic region from which Route 53 routes traffic to a resource, specify a negative bias of -1 to -99. Route 53 expands the size of adjacent regions.

___
tags:: [[network]] 