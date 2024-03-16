---
tags:
  - aws/security
up:
  - "[[Amazon S3]]"
related:
  - "[[Identity and Access Management]]"
---
## Overview

>[!definition] Defintion
With S3 Object Lock, you can store objects using a _write-once-read-many_ (WORM) model. Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely. You can use Object Lock to help meet regulatory requirements that require WORM storage, or to simply add another layer of protection against object changes and deletion.

>[!important] Important
>The feature requires versioning to be enabled on a bucket.

- It is actually individual object versions which are locked

## Object Retention

### Retention Period

>[!definition] Defintion
>Specifies a fixed period of time during which an object remains locked. During this period, your object is WORM-protected and can't be overwritten or deleted.


### Legal Hold

>[!definition] Defintion
>Provides the same protection as a retention period, but it has no expiration date. Instead, a legal hold remains in place until you explicitly remove it. Legal holds are independent from retention periods.