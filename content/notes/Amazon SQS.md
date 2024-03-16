---
tags:
  - "#docs"
related:
  - "[[Amazon Kinesis]]"
---
# Overview

> [!Definition] Definition
> Fully managed queuing service that allows you to decouple tightly-coupled architecture and process workloads asynchronously.
> 
> **Concepts:**
> - [[Decoupling]]
> - [[Asynchronous Processing]]


> [!Example] Example
> Use Amazon SQS to transmit any volume of data, at any level of throughput, without losing messages or requiring other services to be available. SQS lets you decouple application components so that they run and fail independently, increasing the overall fault tolerance of the system. Multiple copies of every message are stored redundantly across multiple availability zones so that they are available whenever needed.

- Decoupling improves the system reliability of your application and makes scaling easier too.
- The asynchronous method of processing provides the necessary delay that lessens the incoming load to your web servers.  It also provides a way to reprocess failed requests in case of a system failure. 
- Immediately after the message is received, it remains in the queue. 
- To prevent other consumers from processing the message again, Amazon SQS sets a _visibility timeout_, a period of time during which Amazon SQS prevents other consumers from receiving and processing the message.

> [!Example] Example 
> When a consumer receives and processes a message from a queue, the message remains in the queue. Amazon SQS doesn’t automatically delete the message. Because Amazon SQS is a distributed system, there’s no guarantee that the consumer actually receives the message (for example, due to a connectivity issue, or due to an issue in the consumer application). Thus, the consumer must delete the message from the queue after receiving and processing it.

- The default visibility timeout for a message is 30 seconds. The maximum is 12 hours.
- The default message retention period is 4 days. You can increase the message retention period to a maximum of 14 days using the `SetQueueAttributes` action.

>[!Important] Important
>- Items are stored sequentially (order of arrival)
>- The processing is done by a consumer
>- Amazon SQS is a mesage queue service that is fully managed by AWS
>- Perfect for workloads with long-running requests 

| Standard Queue                                                                                                                                                                                                                                                    | FIFO (First in, First Out) Queue                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| At least once delivery with best-effort ordering                                                                                                                                                                                                                  | Exactly-once delivery and messages are stored in the exact order they were added into the queue                                                                                                                                                    |
| Higher throughput than FIFO since it does not check the order of messages.                                                                                                                                                                                        | Lower throughput                                                                                                                                                                                                                                   |
| It may deliver duplicate messages to your consumers which can affect the integrity of your data. To solve this, you can change the visibility timeout of your messages in your queue using the ChangeMessageVisibility API or through the AWS Management Console. | Suitable for applications where messages must be processed exactly once without any duplicate records and in the order in which they are received in the queue. Method of eliminating redundant messages in the SQS queue is called deduplication. |


Amazon SQS uses **short polling by default**, querying only a subset of the servers (based on a weighted random distribution) to determine whether any messages are available for inclusion in the response. Short polling works for scenarios that require higher throughput. However, you can also configure the queue to use Long polling instead, to reduce cost.

The ReceiveMessageWaitTimeSeconds is the queue attribute that determines whether you are using Short or Long polling. By default, its value is zero which means it is using Short polling. **If it is set to a value greater than zero, then it is Long polling.**

# Long Polling Concepts

- Long polling helps reduce your cost of using Amazon SQS by reducing the number of empty responses when there are no messages available to return in reply to a _ReceiveMessage_ request sent to an Amazon SQS queue and eliminating false empty responses when messages are available in the queue but aren’t included in the response.
- Long polling reduces the number of empty responses by allowing Amazon SQS to wait until a message is available in the queue before sending a response. Unless the connection times out, the response to the `ReceiveMessage` request contains at least one of the available messages, up to the maximum number of messages specified in the `ReceiveMessage` action.
- Long polling eliminates false empty responses by querying all (rather than a limited number) of the servers. Long polling returns messages as soon any message becomes available.


# Important Concepts

- 1 thing sending messages to the queue
- One consumption group from that tier
- Allow for async communications
- Once the message is processed, it is deleted
