# Overview
- Based on the **network adapter drivers** of the underlying physical host
- The network adapter drivers can be:
	- Intel Network Adapter Virtual Function Driver
	- AWS-built custom-based network adapter driver called **Elastic Network Adapter (ENA)**
	- Network drivers provided by AWS or other companies
- Similar to the "driver" or the software package that allows your computer to access a printer or other physical computer devices
- Uses **single root I/O virtualization** or SR-IOV
- Provides higher I/O performance and lower CPU utilization than the traditional virtualization techniques
- **Controlled by network drivers** (software)
- Provides:
	- Higher bandwidth
	- Consisten lower inter-instance latencies
	- Higher packer per second performance (PPS)



____

tags:: [[network]]  
