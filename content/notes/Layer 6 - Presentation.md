---
tags:
  - CS/networking/fundamentals
related:
  - "[[OSI Model]]"
---

## Overview

> [!Definition] Definition
>The presentation layer (layer 6) is the layer that presents data to the application layer. This layer is responsible for encryption/decryption, translation, and compression/decompression. When a stream of data comes from the lower layers, this layer is responsible for formatting the data and converting it back to the original intended application data.

Its basic function is to convert the data intended for or received from the application layer into another format. Such conversion is necessary because of how data is formatted so that it can be transported across the network.
Applications cannot read this conversion. Common data formats handled by the presentation layer:

- graphics files: JPEG, TIFF, GIF, etc. are file formats that require data to be formatted in a certain way
- text and data: ASCII, EBCDIC
- sound/video: MPEG, MP3, etc. all have their own data formats to and from which data must be converted

Another important function of this layer is [[Encryption|encryption]]. Given the basic role of the presentation layer - that of data-format translator - it's the obvious place for encryption and decryption to take place, i.e.: the cryptographic protocol [[Transport Layer Security (TLS)]] operates at the presentation layer.

Next [[Layer 5 - Session]]