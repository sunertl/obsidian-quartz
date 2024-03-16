⬆️ [[Amazon S3]]
tags:: [[AWS Storage]]
___

# S3 Replication

Enables automatic, asynchronous copying of objects across Amazon S3 buckets which means that buckets that are configured for object replication can be owned by the same AWS account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different AWS Regions or within the same Region as the source bucket. 

>[!important]
>Replicating objects to the destination bucket takes about 15 minutes and is not the fastest option if you want to copy/aggregate data in the fastest way. Use Transfer Acceleration instead!


There are two types of S3 replication available.

-   Cross-Region Replication (CRR)
    -   Allows the replication of objects from a source bucket to a destination bucket in **different** AWS regions.
-   Same-Region Replication (SRR)
    -   Allows the replication of objects from a source bucket to a destination bucket in the **same** AWS region.

Architecture for both is similar, only difference is if both buckets are in the same account or different accounts.

The replication configuration is applied to the source bucket and configures S3 to replicate from this source bucket to a destination bucket. It also configures the IAM role to use for the replication process. The role is configured to allow the S3 service to assume it based on its trust policy. The role's permission policy allows it to read objects on the source bucket and replicate them to the destination bucket.

When different accounts are used, the role is not by default trusted by the destination account. If configuring between accounts, you must add a bucket policy on the destination account to allow the IAM role from the source account access to the bucket.

## S3 Replication Options

-   Which objects are replicated.
    -   Default is all source objects, but can select a smaller subset of objects.
-   Select which storage class the destination bucket will use.
    -   Default is the same type of storage, but this can be changed.
-   Define the ownership of the objects.
    -   The default is they will be owned by the same account as the source bucket.
    -   If the buckets are in different accounts, the objects in the destination could be owned by the source account and not allowed access.
-   Replication Time Control (RTC)
    -   Adds a guaranteed level of SLA within 15 minutes for extra cost.
    -   This is useful for buckets that must be in sync the whole time.

## S3 Replication - Important Tips
-   Replication is not retroactive.
    -   If you enable replication on a bucket that already has objects, the old objects will not be replicated.
-   Both buckets must have versioning enabled.
-   It is a one way replication process only.
-   Replication by default can handle objects that are unencrypted or SSE-S3.
    -   With configuration it can handle SSE-KMS, but KMS requires more configuration to work.
    -   It cannot replicate objects with SSE-C because AWS does not have the keys necessary.
-   Source bucket owner needs permissions to objects. If you grant cross-account access to a bucket. It is possible the source bucket account will not own some of those objects.
-   Will not replicate system events, glacier, or glacier deep archive.
-   No deletes are replicated.