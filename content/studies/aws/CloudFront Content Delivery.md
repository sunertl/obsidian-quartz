---
tags:
  - compsci/cloud/aws/network
up:
  - "[[Amazon CloudFront]]"
related: []
---
## Overview

- You specify **origin servers**, like an [[Amazon S3#Bucket|S3 bucket]] or your own HTTP server, from which CloudFront gets your files which will then be distributed from CloudFront edge locations all over the world.
- Upload your files to your origin servers. Your files, also known as **objects**.
- Create a **[[CloudFront Distribution]]**, which tells CloudFront which origin servers to get your files from when users request the files through your web site or application. At the same time, you specify details such as whether you want CloudFront to log all requests and whether you want the distribution to be enabled as soon as it’s created.
- CloudFront assigns a domain name to your new distribution that you can see in the CloudFront console.

## Caching

- CloudFront sends your distribution’s configuration (but not your content) to all of its **edge locations**—collections of servers in geographically dispersed data centers where CloudFront caches copies of your objects.
- CloudFront also has **regional edge caches** that bring more of your content closer to your viewers, even when the content is not popular enough to stay at a CloudFront edge location, to help improve performance for that content.

You can control how long your objects stay in a CloudFront cache before CloudFront forwards another request to your origin. Reducing the duration allows you to serve dynamic content. Increasing the duration means your users get better performance because your objects are more likely to be served directly from the edge cache. A longer duration also reduces the load on your origin.

Typically, CloudFront serves an object from an edge location until the cache duration that you specified passes — that is, until the object expires. After it expires, the next time the edge location gets a user request for the object, CloudFront forwards the request to the origin server to verify that the cache contains the latest version of the object.

The `Cache-Control` and `Expires` headers control how long objects stay in the cache. The `Cache-Control max-age` directive lets you specify how long (in seconds) you want an object to remain in the cache before CloudFront gets the object again from the origin server. The minimum expiration time CloudFront supports is 0 seconds for web distributions and 3600 seconds for RTMP distributions.


- You can use a zone apex name on CloudFront
- CloudFront supports wildcard CNAME
- Different CloudFront Origins
    - **Using S3 buckets for your origin** – you place any objects that you want CloudFront to deliver in an S3 bucket.
    - **Using S3 buckets configured as website endpoints for your origin**
    - **Using a media store container or a media package channel for your origin** – you can set up an S3 bucket that is configured as a MediaStore container, or create a channel and endpoints with MediaPackage. Then you create and configure a distribution in CloudFront to stream the video.
    - **Using EC2 or other custom origins** – A custom origin is an HTTP server, for example, a web server.
    - **Using CloudFront Origin Groups for origin failover** – use origin failover to designate a primary origin for CloudFront plus a second origin that CloudFront automatically switches to when the primary origin returns specific HTTP status code failure responses.
        - To increase high-availability and do failover
        - Origin Group: one primary and one secondary origin
        - If the primary origin fails, the second one is used
- CloudFront - Multiple Origins
	- To route to different kind of origins based on the content type
	- Based on path pattern:
		- /images/*
		- /api/*
		- /*![[Pasted image 20220817163514.png]]
- Objects are cached for 24 hours by default. You can invalidate files in CloudFront edge caches even before they expire.
- You can configure CloudFront to automatically compress files of certain types and serve the compressed files when viewer requests include _Accept-Encoding: gzip_ in the request header.
- CloudFront can cache different versions of your content based on the values of query string parameters.