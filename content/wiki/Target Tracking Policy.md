# Overview

- Automatically increases or decreases the current capacity of your Auto Scaling Group based on a target value for a specific metric
- Maintains and adjusts the number of EC2 instances in your Auto Scaling Group based on the target that you specify

# Use Cases
   
- If you’ve determined the optimal performance of your web application and you want to maintain its desired performance across all EC2 instances of your Auto Scaling group 
- If your application works best when the combined CPU utilization of your Amazon EC2 instances is at or near a certain percentage (e.g. 40% ). You can set up a target tracking policy with a metric type of “Average CPU utilization” and a 40% target value
- Tracking of a certain metric that is produced by your application. You can track the average network in or network out of all your instances
- You can use the request count per target (ALBRequestCountPerTarget) metric of your Application Load Balancer as the metric type for your Target Tracking policy


```ad-info

With a target tracking scaling policy, you can increase or decrease the current capacity of the group based on a target value for a specific metric. This policy will help resolve the over-provisioning of your resources. The scaling policy adds or removes capacity as required to keep the metric at, or close to, the specified target value. In addition to keeping the metric close to the target value, a target tracking scaling policy also adjusts to changes in the metric due to a changing load pattern.

```


# Pre-Defined Metrics

- **ASGAverageCPUUtilization**    –   Average   CPU   utilization   of   the   Auto   Scaling   group.
- **ASGAverageNetworkIn**    –   Average   number   of   bytes   received   on   all   network  interfaces   by   the   Auto Scaling   group.
- **ASGAverageNetworkOut**    –   Average   number   of   bytes   sent   out   on   all   network  interfaces   by   the   Auto Scaling   group.
- **ALBRequestCountPerTarget**    –   If   the   auto   scaling   group  i s   associated   with   an   ALB   target   group,   this  i s the   number   of   requests   completed   per   target  in   the   target   group.



____
tags:: [[aws/scaling 