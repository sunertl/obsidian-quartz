---
tags:
  - compsci/cloud/aws/architecture
up:
  - "[[Amazon CloudFront]]"
related:
---
## Overview

 You create a **CloudFront distribution** to tell CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery
- You create a distribution and choose the configuration settings you want:
	- Your content origin—that is, the Amazon S3 bucket, MediaPackage channel, or HTTP server from which CloudFront gets the files to distribute. You can specify any combination of up to 25 S3 buckets, channels, and/or HTTP servers as your origins.
        - Access—whether you want the files to be available to everyone or restrict access to some users.
        - Security—whether you want CloudFront to require users to use HTTPS to access your content.
        - Cookie or query-string forwarding—whether you want CloudFront to forward cookies or query strings to your origin.
        - Geo-restrictions—whether you want CloudFront to prevent users in selected countries from accessing your content.
        - Real Time Access logs—whether you want CloudFront to create access logs that show viewer activity, which are recorded in real time.

- You can use distributions to serve the following content over HTTP or HTTPS:
	- Static and dynamic download content.
        - Video on demand in different formats, such as Apple HTTP Live Streaming (HLS) and Microsoft Smooth Streaming.
        - A live event, such as a meeting, conference, or concert, in real time.
        - CloudFront supports the **WebSocket protocol** as well as the **HTTP protocol** with the following HTTP methods:
	    -   GET
	    -   HEAD
	    -   POST
	    -   PUT
	    -   DELETE
	    -   OPTIONS
	    -   PATCH.


- Values that you specify when you create or update a distribution
	- Delivery Method – Web HTTP or protocols.
	- Origin Settings – information about one or more locations where you store the original versions of your web content.
	- Cache Behavior Settings – lets you configure a variety of CloudFront functionality for a given URL path pattern for files on your website.
	- Custom Error Pages and Error Caching
	- Restrictions – if you need to prevent users in selected countries from accessing your content, you can configure your CloudFront distribution either to allow users in a **whitelist** of specified countries to access your content or to not allow users in a **blacklist** of specified countries to access your content.

- Using [[AWS Lambda@Edge]] with CloudFront enables a variety of ways to customize the content that CloudFront delivers. It can help you configure your CloudFront distribution to serve private content from your own custom origin, as an option to using signed URLs or signed cookies. 