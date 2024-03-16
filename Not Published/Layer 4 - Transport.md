---
tags:
  - CS/networking
related:
  - "[[OSI Model]]"
---

## Overview


> [!Defintion] Definition
> The basic function of the transport layer is to provide mechanisms to transport data between network devices.

- Error checking: protocols at the transport layer ensure that data is correctly sent or received
- Service addressing: a number of protocols support many network services. The transport layer ensures that data is passed to the right service at the upper layers of the OSI model.
- Segmentation: to traverse the network, blocks of data need to be broken into packets of a manageable size for the lower layers to handle. This process, called segmentation, is the responsibility of the transport layer.

Protocols that operate at the transport layer can either be connectionless, such as [[User Datagram Protocol (UDP)]], or connection oriented, such as [[Transmission Control Protocol (TCP)]]. 


> [!Note] Note
> At this layer, the OS presents the application with a socket to communicate with on the network. A socket in the context of networking, it's called a *port*.

The transport layer is also responsible for data flow control, which refers to how the receiving device can accept data transmissions. Two common methods of flow control are used:

1. Buffering: When buffering flow control is used, data is temporarily stored and waits for the destination device to become available. Buffering can cause a problem if the sending device transmits data much faster than the receiving device can manage.
2. Windowing: In a windowing environment, data is sent in groups of segments that require only one acknowledgment. The size of the window (that is, how many segments fit into one acknowledgment) is defined when the session between the two devices is established.


## Protocols & Technologies

connectionless, such as [[User Datagram Protocol (UDP)]], or connection oriented, such as [[Transmission Control Protocol (TCP)]].

Next [[Layer 3 - Network]]