---
tags:
  - aws/security
up:
  - "[[Amazon CloudFront]]"
related:
  - "[[Amazon S3]]"
---
## Overview

To restrict access to content that you serve from Amazon S3 buckets, you create CloudFront signed URLs or signed cookies. Then you create a special CloudFront user called an origin access identity (OAI) and associate it with your distribution. Then you configure permissions so that CloudFront can use the OAI to access and serve files to your users, but users can’t use a direct URL to the S3 bucket to access a file there. Taking these steps help you maintain secure access to the files that you serve through CloudFront.

In general, if you’re using an Amazon S3 bucket as the origin for a CloudFront distribution, you can either allow everyone to have access to the files there, or you can restrict access. If you restrict access by using, for example, CloudFront signed URLs or signed cookies, you also won’t want people to be able to view files by simply using the direct URL for the file. Instead, you want them to only access the files by using the CloudFront URL, so your protections work.

To specify an OAI as the Principal in an Amazon S3 bucket policy, use the OAI’s ID. For example:

```
"Principal": {
  "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity EH1HDMB1FH2TC"
}
```

You can also specify an OAI as the Principal by using its Amazon S3 canonical ID. For example:

```
"Principal": {
  "CanonicalUser": "79a59df900b949e55d96a1e698fbacedfd6e09d98eacf8f8d5218e7cd47ef2be"
}
```

