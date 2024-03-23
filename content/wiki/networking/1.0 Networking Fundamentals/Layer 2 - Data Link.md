---
tags:
  - docs
up:
  - "[[OSI Model]]"
related:
  - "[[content/Wiki/Networking/1.0 Networking Fundamentals/index]]"
---
## Overview


> [!Defintion] Definition
> The data link layer is responsible for physically transmitting data over the network through the use of a variety of protocols, such as [[Ethernet]], [[Wi-Fi]], and [[Bluetooth]]. It is also responsible for organizing the data into **frames** and providing error checking to ensure the integrity of the transmitted data, and uniquely identifying network devices with an address (MAC), and flow control. 

Data link layer is divided into two sublayers: LLC & MAC

![[Screenshot 2024-02-17 at 7.33.57 PM.png]]

- LLC: 
	- responsible for communicating with [[Layer 3 - Network|the network layer]]. This is the layer where CPU cycles are consumed for the processing of data.
	- communicates with the network layer by coding a type of protocol field in the frame itself. This field is called the Ethernet type field.
		- ![[Screenshot 2024-02-17 at 7.37.18 PM.png]]
		- It carries the protocol number for which traffic is destined
- MAC: 
	- responsible for the hardware processing of frames and the error checking of frames. Only relevant frames are passed to the LLC layer. 
	- The MAC layer saves CPU cycles by processing these checks independently from the CPU. 
	- The MAC layer is the layer responsible for the transmission of data on a physical level.

## Protocols & Technologies

High-Level Data Link Control (HDLC), Layer 2 Tunneling Protocol (L2TP), Point-to-Point Protocol (PPP), Point-to-Point Tunneling Protocol (PPTP), Spanning Tree Protocol (STP), and virtual LANs (VLANs)

Next: [[Layer 1 - Physical]]