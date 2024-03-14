---
tags:
  - compsci/networking/fundamentals
related:
  - "[[1.2 Explain the characteristics of network topologies and network types]]"
---

>[!Defintion] Definition
> A single server uses a network operating system for managing the whole network.

- Client machine's request for a resource goes to the main server which responds by handling security and directing the client to the desired resource
- happens instead of the request going directly to the machine with the desired resource
- lots of advantages:
	- network is better organized - doesn't depend on users remembering where needed resources are
	- a lot easier to find the files you need - everything is stored in one spot
	- security gets tighter - all usernames and pwds are on that specific server which is never used a [[Workstations|workstation]]
	- gain scalability - client-server networks can have legions of workstations

![[Pasted image 20240218170604.png]]