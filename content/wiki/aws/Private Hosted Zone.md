---
tags:
  - docs
---


Same as [[Public Hosted Zone]]s except these are not public. They are associated with VPCs and are only accesible within those VPCs via the [[Route 53]] resolver.

It's possible to use a technique called Split-view for public and internal use with the same zone name. A common architecure is to make the public hosted zone a subset of the private hosted zone containing only those records that are meant to be accessed from the Internet, while inside VPCs associated with the private hosted zone all resource records can be accessed.