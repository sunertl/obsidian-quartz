---
tags:
  - compsci/cloud/aws/security
up:
  - "[[Amazon S3]]"
related:
  - "[[Identity and Access Management]]"
---
## Overview

- Enabled in versioning configuration on a bucket
- When you enable it, it means that MFA is required to change bucket versioning state
	- If you move from enabled to suspended or vice versa, you need this MFA to be able to do that
- MFA is required to delete versions of an object
- If you want to make an API call to delete a version, you need the MFA serial number as well as the code that it generates

