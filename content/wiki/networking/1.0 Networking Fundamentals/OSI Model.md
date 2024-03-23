---
tags:
  - docs
up:
  - "[[1.1 Compare and contrast the Open Systems Interconnection (OSI) model layers and encapsulation concepts]]"
related:
  - "[[content/wiki/networking/1.0 Networking Fundamentals/index]]"
---
## Overview

> [!Intro] Intro
> The Open Systems Interconnection (OSI) reference model was created to standardize network connectivity between applications, devices, and protocols. Before the OSI was created, every system was proprietary. The OSI layers are used to build standards that allow for interoperability between different vendors.

Advantages that the OSI layers provide:

- reference model helps facilitate communications between various types of hard- and software
- change in one layer doesn't affect other layers
- multivendor deployment of hard- and software based on network standards
- encourages industry standardization because it defines functions of each layer
- divides a complex communications process into smaller pieces to assist with design, development, and troubleshooting
- network protocols and connectivity options can be changed without affecting applications


## OSI Model Layers

[[Layer 1 - Physical]]
The physical layer is the layer at which data is transmitted via air, light, or electricity. The physical layer is where connection types and media are defined.

[[Layer 2 - Data Link]]
The data link layer is the layer responsible for the framing of data for transmission via a physical media. The data link layer is composed of two sublayers: the LLC sublayer and the MAC sublayer. The LLC sublayer is responsible for communicating with the upper layers, and the MAC sublayer is responsible for synchronizing communications on the physical media, addressing transporting of data and error detection of the data received. 

[[Layer 3 - Network]]
The network layer is responsible for the logical assignment and routing of network and host addresses. The network layer is where the IP protocol for the TCP/IP suite of protocols functions. 

[[Layer 4 - Transport]]
The transport layer is responsible for flow control of network segments from the upper layers. The two protocols for TCP/IP that operate at the transport layer are UDP and TCP. 

[[Layer 5 - Session]]
The session layer has three main methods of communication for applications: half-duplex, full-duplex, and simplex communications. 

[[Layer 6 - Presentation]]
The presentation layer converts data formats, encrypts and decrypts, and provides compression and decompression of data. The session layer is responsible for setup, maintenance, and teardown of the communications for an application as well as dialogue control. 

[[Layer 7 - Application]]
The application layer is the beginning of the communication process with the user and is where applications are defined as client or server. The application layer is also where events, such as network requests, clicks on a GUI, or commands in a console application, are acted on.

