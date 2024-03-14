# Overview

-   Move the AWS network closer to customers.
-   Designed to optimize the flow of data from users to your AWS infrastructure.
-   While CloudFront caches your application at Edge Locations, Global Accelerator moves the AWS infrastructure closer to your customers.
-   Generally customers who are further away from your infrastructure go through more internet based hops and this means a lower quality connection.
-   Normal IP addresses are unicast IP addresses. These refer to one thing.
-   Global Accelerator starts with 2 **anycast** IP address
    -   Special IP address
    -   Anycast IPs allow a single IP to be in multiple locations.
    -   Traffic initially uses public internet and enters Global Accelerator at the closest edge location.
    -   Traffic then flows globally across the AWS global backbone network.
-   Global accelerator is a network product, and it uses non HTTP/S (TCP/UDP) protocols.
-   If you see questions that mention _caching_ that will most likely be CloudFront but, if you see questions that mention TCP or UDP and the requirement for _global performance optimization_ then possibly it's going to be global accelerator which is the right answer.