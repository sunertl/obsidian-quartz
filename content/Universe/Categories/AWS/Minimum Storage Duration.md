Usually, [[S3 Glacier Flexible Retrieval]] is way more cost-effective than [[S3 Standard]]. However, there are scenarios where this is not applicable.

Minimum Storage Duration = objects must be stored in a particular storage class for a specific amount of time. 

Deleting your objects won't affect the minimum storage duration. You will still have to pay the remaining days of the mandatory minimum period. 

A minimum storage duration of 30 days means that you will be charged for the entire 30 days even if you deleted or changed the storage class of your objects before that period. 

For example, you stored an object in the [[S3 Standard-Infrequent Access]] for just 10 days and then you immediately deleted it. In this case, you will still be billed for the entire 30 days, even if you didn't store your data for that 30-day duration. 

You will incur a pro-rated charge that is equal to the storage charge for the remaining days, which in this example, is the remaining 20 days. The same concept applies if you decided to change the current storage class of your objects in [[Amazon S3]] before its designated minimum storage duration. 

All storage classes in [[Amazon S3]] have a minimum storage duration except for the [[S3 Standard]] class. Amazon [[S3 Glacier Flexible Retrieval]] has a minimum storage duration of 90 days or 3 months. 

[[S3 Intelligent-Tiering]], [[S3 Standard-Infrequent Access]] and [[S3 One Zone-Infrequent Access]] have the same minimum storage duration of 30 days while the Amazon [[S3 Glacier Deep Archive]] class has a storage duration of 180 days. 

**When is the [[S3 Standard]] class cheaper than [[S3 Glacier Flexible Retrieval]]?**

Suppose you need to store temporary, yet frequently accessed data in an S3 bucket. For this task, you can use the [[S3 Standard]] class instead of [[S3 Glacier Flexible Retrieval]]. This is perfect for storing non-reproducible and short-lived objects for a few hours or days. If your data is reproducible and less frequently accessed, then you can use the [[S3 Standard-Infrequent Access]] or [[S3 One Zone-Infrequent Access]] tiers. 

It's not a good option if you use Amazon [[S3 Glacier Flexible Retrieval]] for this use case since this entails a significant cost. You have to pay the minimum storage duration fee as well as well its data retrieval fee. In the same token, you should also be aware of the type of objects that you store in an [[S3 Glacier Deep Archive]] storage class. 

![[Pasted image 20220218191614.png]]

___
tags:: [[AWS Storage]]  