---
tags:
  - aws/security
up:
  - "[[Amazon S3]]"
related:
  - "[[Identity and Access Management]]"
---
## Overview

A way to give another person or application access to an [[S3 Object|object]] inside an S3 bucket using your credentials in a safe way.

IAM admin can make a request to S3 to generate a pre-signed URL by providing:

-   security credentials
-   bucket name
-   object key
-   expiry date and time
-   indicate how the object or bucket will be accessed

S3 will create a pre-signed URL and return it. This URL will have encoded inside it the details that IAM admin provided. It will be configured to expire at a certain date and time as requested by the IAM admin user.

- You can create a pre-signed URL for an object you have do not have access to. The object will not allow access because your user does not have access.
- When using the URL the permission that you have access to, match the identity that generated it at the moment the item is being accessed.
- If you get an access deny it means the ID never had access, or lost it.
- Don't generate pre-signed URLs with an IAM role.
    -   The role will likely expire before the URL does.