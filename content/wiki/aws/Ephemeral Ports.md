---
tags:
  - docs
up:
  - "[[Amazon VPC]]"
related:
---
## Overview


- Short-lived port numbers
- Are allocated automatically from a predefined range by an IP stack software
- the predefined range is different from one OS to another

For example, you want to allow an IP address to access one of your subnets using port 80. You have added the IP address in port 80 in the Inbound Rules of your NACL. The question is, should you also use the same port number for your Outbound Rules? Meaning adding port 80 on your outbound ACL? This is where the Ephemeral Ports come in. You have to configure your Outbound Rule with the different port number to allow the response traffic to flow out of your subnet. The users of you application won't receive any response if you don't have an Outbound Rule for these ephemeral ports of if you didn't explicitly allow all outbound traffic. The response traffic of your request is actually using another exit port that is different from the original one. 
In this example, the HTTP request does not necessarily use the port 80 to deliver the response.

