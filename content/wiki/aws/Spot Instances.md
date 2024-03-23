---
tags:
  - docs
---
## Overview

- Derives from Spot Market - buying a product on the spot (for lower prices)
- Essentially unused or spare EC2 instances -> surplus!
- buy spare resources from AWS at a high discounted rate
- The hourly price for a Spot Instance is called a Spot price. The Spot price of each instance type in each Availability Zone is set by Amazon EC2, and is adjusted gradually based on the long-term supply of and demand for Spot Instances.
- caveat: any point in time, when somebody wants to pay the full price for that capacity, AWS can shut down your instances!

## Use Cases

- large compute jobs that are normally very expense, batch processing. Essentially only to use when your workloads can be interrupted (non-essential) where each job:
	- is stateless in nature
	- can be started and stopped at any given time
	- typically takes upwards of 60 minutes or an hour in total to complete
- Servers on dev or test environments that do not require to be 100% up all the time
- Apps with flexible start and end times
- Interruptible workloads that can handle failures gracefully
- Handling peak load or the additional load of your apps on top of a Reserved or On-Demand EC2 instance
- Infrequent and interruptible jobs
- workloads that are infrequently executed
- for whenever you need the **MOST cost-effective** solution in running your interruptible workloads

## Different Types of Spot Instances

### Spot Fleet
- a collection, or fleet of Spot Instances
- can optionally have [[On-Demand Instances]]

### Spot Block
- Specify a "block of time" or the duration in which your instance will run continuously
- Rarely interrupted than your regular Spot Instances