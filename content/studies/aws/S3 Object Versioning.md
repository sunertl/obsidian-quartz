---
tags:
  - compsci/cloud/aws/security
up:
  - "[[Amazon S3]]"
related:
  - "[[Identity and Access Management]]"
---
## Overview

Use Amazon S3 to keep multiple versions of an object in one bucket which protects you from the consequences of unintended overwrites or deletions. You can also use it to archive an [[S3 Object]] so that you have access to previous version. 

>[!EXAMPLE]
>For example, you could store `my-image.jpg` (version 111111) and `my-image.jpg` (version 222222) in a single bucket.

**It is defined at the bucket level; not at the object level - you must explicitly enable it on your bucket. By default, it's disabled.**  **Once it is enabled on a bucket, you can NEVER disable it** - you can suspend it, and, if desired, you can re-enable it. 

If S3 Versioning is enabled, Amazon **S3 assigns a version ID value for the object**. Space is consumed by ALL versions
and you are billed for ALL versions. Only way to 0 costs - is to delete the bucket.