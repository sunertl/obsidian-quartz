---
tags:
  - "#CS/networking/fundamentals"
up:
  - "[[OSI Model]]"
related:
  - "[[1.1 Compare and contrast the Open Systems Interconnection (OSI) model layers and encapsulation concepts]]"
---
## Overview

The physical layer is responsible for the transmission and reception of unstructured raw data/information between a device, such as a network interface controller, Ethernet hub or network switch.  

The transmission/physical medium can be copper (electrical), fibre (light) or [[Wi-Fi]] (RF)

Layer 1 specifications define the transmission and reception of raw bit streams between a device and a shared physical medium. It defines things like voltage levels, timing, rates, distances, modulation and connectors.

>[!Example]
>Two laptops are connected through a LAN cable (a copper shared medium) and since they are based on the same standard (they use network interface cards), they can understand the binary 1's and 0's that are transmitted through the physical shared medium. 

- There are no individual device addresses which means that all data is processed by all devices
- If multiple devices transmit at once - a collision occurs. This corrupts any transmission on the shared medium making it useless.
- Layer 1 has no media access control and no collision detection

>[!Important]
>- Physical shared medium
>- Standards for transmitting onto the medium
>- Standards for receiving from the medium
>- No access control
>- No uniquely identified devices
>- No device to device communications

## Protocols & Technologies

USB, Ethernet, DSL, ISDN, T-carrier links (T1 and T3), GSM, and SONET
