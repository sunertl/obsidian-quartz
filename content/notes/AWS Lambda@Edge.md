---
tags:
  - docs
  - docs
up:
  - "[[AWS Lambda]]"
related:
---
# Overview

- Lets you run Lambda functions to customize content that CloudFront delivers, executing the functions in AWS locations closer to the viewer. The functions run in response to CloudFront events, without provisioning or managing servers.
- You can use Lambda functions to change CloudFront requests and responses at the following points:
    -   After CloudFront receives a request from a viewer (viewer request)
    -   Before CloudFront forwards the request to the origin (origin request)
    -   After CloudFront receives the response from the origin (origin response)
    -   Before CloudFront forwards the response to the viewer (viewer response)
- You can automate your serverless application’s release process using AWS CodePipeline and AWS CodeDeploy.
- Lambda will automatically track the behavior of your Lambda function invocations and provide feedback that you can monitor. In addition, it provides metrics that allows you to analyze the full function invocation spectrum, including event source integration and whether downstream resources perform as expected.

# Use Cases
-   A/B Testing - Viewer Request
-   Migration Between S3 Origins - Origin Request
-   Different objects based on Device - Origin Request
-   Content By Country - Origin Request
