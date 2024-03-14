# Overview

- Usually only involves one server or just a single resource -> this is perfect for your monolithic or legacy applications that don't have a distributed architecture.
- You can scale up or scale down a single server to properly match the actual load that it is receiving
- Scale up = incrementing the number of CPUs, storage and other capabilities of a single server (think of upgrading your existing laptop or desktop to have better specs. In this case, you don't launch two or more servers in order to upgrade your application performance)
# Related Examples

- You have an EC2 instance with 10 virtual CPUs and 100 GB of storage. You can scale up this instance by topping up 20 additional CPUs and 200 GB of extra storage.
- After the scale up operation, your upgraded server now has 30 virtual CPUs and a total storage of 300 GBs.
- This can be done in EC2 by replacing the instance type of your EC2 instance with a larger size.
- Reversly, you can also scale down your EC2 instance to a smaller instance type.
	- This is applicable if you overprovisioned your application server that only uses a fraction of its allocated CPU or storage.
	- Scaling down your application will also help you reduce your costs.
- Often times vertical scaling can only occur during planned outages.
- Larger instances also carry a **$ premium** compared to smaller instances.
- Instance size is an upper cap on performance.
- No application modification is needed.
    -   Works for all applications, even monoliths (all code in one app)

___
tags:: [[aws/scaling]]  