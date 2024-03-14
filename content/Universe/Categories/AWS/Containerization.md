#compsci/development/engineering/virtualization

>[!definition]
>Operating system feature in which the kernel allows the existence of multiple isolated user-space instances. Those instances are called [[Containers]], partitions, virtual environments (VE) or jails. 

# Architecture

We still have a host hardware but instead of [[Virtualization]] we have an operating system running on this hardware. Running on top of this is a container engine (i.e. [[Docker]]).

A container in some ways is similar to a virtual machine in that it provides an isolated environment, which an application can run within. A container runs as a process within the host operating system. 

It's isolated from all of the other processes but it can use the host operating system for networking and file I/O e.g. 

>[!example]
>If the host OS was Linux, it could run Docker as a container engine, Linux plus the Docker container engine can run a container. That container would run as a single process within that operating system, potentially one of many but inside that process, it's like an isolated operating system. It has its own file system, isolated from everything else, and it can run child processes inside it, which are also isolated from everything else.

Since you don't need an operating system for every application you are running, the applications are much lighter and consume less resources. 

# Image Anatomy

A server or [[Amazon EC2]] is a running copy of its [[Elastic Block Store (EBS)]] volumes or virtual disks. An EC2 instance's boot volume is used, it's booted and using this, you end up with a running copy of an operating system running in a virtualized environment.

A container is no different in this regard, a container is a running copy of what's known as a [[Docker]] image. 

[[Docker]] images are made up of multiple independent layers. Docker images are stacks of these layers and not a single monolithic disk image. Docker images are created initially by using a Dockerfile. A dockerfile creates this docker image. Each line in a Dockerfile is processed one by one and each line creates a new file system layer inside the Docker image that it creates.

# Container Anatomy

A docker image is how we create a Docker container which is just a running copy of a Docker image. A Docker container has an additional read-write file system layer. File system layers, so the layers that make up a Docker image, they're read only. They never change after they're created and so this special read-write layer is added which allows containers to run. If you have lots of containers with very similar base structures, they will share the parts that overlap. The other layers are reused between containers.

The reuse architecture that is offered by the way containers do their disk images scales really well. Disk space when you have lots of containers is minimized because of this layered architecture. The base layer -- the OS -- they are generally made available by the OS vendors through something called a _container registry_ and a popular one is _docker hub_.

# Container Registry

*(see also [[Docker#Docker Storage|docker storage]])*

A container registry or hub is a hub of container images. As a developer or solution architect, you use a dockerfile to create a container image. Then you upload that image to a private/public repository such as the docker hub. In the case of a public hub, other people will likely do the same including vendors of the base OS such as the CentOS example shown above. From there, these container images can then be deployed to docker hosts, which are just services running a container engine (e.g. docker).

A docker host can run many containers based on or more images. A single image can be to generate containers on many docker hosts. Dockerfile can create a container image where it gets stored in the container registry.

# Important Concepts

-   Docker files are used to build Docker images
-   Containers are portable and always run as expected.
    -   Anywhere there is a compatible host, it will run exactly as you intended.
-   Containers are lightweight, use the host OS for the heavy lifting.
    -   File system layers are shared when possible.
-   Containers only run the application and environment it needs to run.
-   Ports need to be **exposed** to allow outside access from the host and beyond.
-   Application stacks can be multi container
