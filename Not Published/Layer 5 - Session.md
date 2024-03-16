---
tags:
  - docs
related:
  - "[[OSI Model]]"
---

## Overview

> [!Definition] Definition
> The session layer is responsible for managing and controlling the synchroniza- tion of data between applications on two devices. It does this by establishing, maintaining, and breaking sessions. Whereas the transport layer is responsible for setting up and maintaining the connection between the two nodes, the session layer performs the same function on behalf of the application.

There are three basic forms of communications a network application can use at the session layer:

- *Half-duplex* is a two-way communications between two hosts where only one side can communicate at a time. A web browser will request a page from the web server and the web server will return the page. Then the web browser asks for the other elements contained in the HTML web page.
- *Full-duplex* is two-way communications between two hosts, where both sides can communicate simultaneously. Not only is this type of communications similar to a telephone call, but it is used by VoIP to make telephone calls over a network.
- *Simplex* is a one-way communication between two hosts. This type of communications is similar to tuning to a radio station—you do not have any control of the content or communications received.

## Protocols & Technologies

NetBIOS, Network File System (NFS), and Server Message Block (SMB).


Next [[Layer 4 - Transport]]