---
tags:
  - docs
up:
  - "[[Amazon S3]]"
related:
---
## Overview

Once the object has been uploaded to the bucket, its [[Metadata]] would be permanent and cannot be modified

This object can be downloaded by multiple EC2 instances or by millions of users worldwide

Objects can be organized inside a [[Folder]], however, [[Amazon S3]] has a flat structure.

By default, an S3 object is owned by the account that uploaded the object. That’s why granting the destination account the permissions to perform the cross-account copy makes sure that the destination owns the copied objects. You can also change the ownership of an object by changing its access control list (ACL) to bucket-owner-full-control.

However, object ACLs can be difficult to manage for multiple objects, so it’s a best practice to grant programmatic cross-account permissions to the destination account. Object ownership is important for managing permissions using a bucket policy. For a bucket policy to apply to an object in the bucket, the object must be owned by the account that owns the bucket. You can also manage object permissions using the object’s ACL. However, object ACLs can be difficult to manage for multiple objects, so it’s best practice to use the bucket policy as a centralized method for setting permissions.
