---
tags:
  - "#docs"
---
## Overview

- Docker is a software development platform to deploy apps
- Apps are packaged in [[Containers]] that can be run on any OS
- Apps run the same, regardless of where they run
	- Any machine
	- No compatibility issues
	- Predictable behavior
	- Less work
	- Easier to maintain and deploy
	- Works with any language, any OS, any technology
- Use cases: [[Microservice]] architecture, lift-and-shift apps from on-premises to the AWS cloud.
	- You can run various applications in different languages inside a Docker container. Even databases.


## Docker Storage
- Docker images are stored in Docker Repositories
- [Docker Hub](https://hub.docker.com)
	- Public repository
	- Find base images for many technologies or OS (e.g. Ubuntu, MySQL,...)
- [[Amazon Elastic Container Registry (ECR)]]
	- Private repository
	- Public repository ([Amazon ECR Public Gallery](https://gallery.ecr.aws))


## Docker vs. Virtual Machines

- Docker is "sort of" a virtualization technology, but not exactly
- Resources are shared with the host => many containers on one server

## AWS Relevancy

Docker containers management on AWS: [[Amazon Elastic Container Service (ECS)]]