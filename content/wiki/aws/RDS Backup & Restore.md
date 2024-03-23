---
tags:
  - docs
---


# Overview
First snap is full copy of the data used on the RDS volume. From then on, the snapshots are incremental and only store the change in data.

When any snapshot occurs, there's a brief interruption to the flow of data between the compute resource and the storage. If you are using single AZ, this can impact your application. If you are using Multi-AZ, the snapshot occurs on the standby replica.

**Manual snapshots don't expire**, you have to clean them yourself. Automatic Snapshots can be configured to make things easier.

In addition to automated backup, every 5 minutes database transaction logs are saved to S3. Transaction logs store the actual data which changes inside a database so the actual operations that are executed. This allows a database to be restored to a point in time often with 5 minute granularity.

Automatic cleanups can be anywhere from _0 to 35_ days. This means you can restore to any point in that time frame. This will use both the snapshots and the translation logs.

When you delete the database, they can be retained but they will expire based on their retention period.

The only way to maintain backups is to create a final snapshot which will not expire automatically.

# Important Concepts
- Backups are automatically enabled in RDS
- Automated backups
	- Daily full backups of the database (during the maintenance window)
	- Transaction logs are backed-up by RDS every 5 minutes
	- 7 days retention (can be increased to 35 days)

>[!Important]
>Ability to restore to any point in time (from oldest backup to 5 minutes ago)

- DB Snapshots
	- Manually triggered by the user
	- Retention of backups for as long as you want
- When performing a restore, RDS creates a new RDS with a new endpoint address.
- When restoring a manual snapshot, you are setting it to a single point in time. This influences the [[RPO - Recovery Point Objective]] value.
- Automated backups are different, they allow any 5 minute point in time.
- Backups are restored and transaction logs are replayed to bring DB to desired point in time.
- Restores aren't fast, think about [[RTO - Recovery Time Objective]]