A route table **contains a set of rules**, called routes, that are **used to determine where network traffic from your subnet or gateway is directed**.

- Implicit router in Amazon VPC
- Controls the network traffic in your VPC through subnet routing
- all subnets in VPC must be associated with a route table
- A route table can either be the main route table or a custom route table
	- you cannot delete the main route table!
- A subnet in your VPC can only be associated with one route table at a time but you can associate multiple subnets with the same subnet route table.

___
tags:: [[network]]  