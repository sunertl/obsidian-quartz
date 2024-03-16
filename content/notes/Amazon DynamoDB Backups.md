---
tags:
  - docs
up:
  - "[[Amazon DynamoDB]]"
---
# Overview

**On-demand Backups**: Similar to manual RDS snapshots. Full backup of the table that is retained until you manually remove that backup. This can be used to restore data in the same region or cross-region. You can adjust indexes, or adjust encryption settings.

**Point-in-time Recovery**: Must be enabled on each table and is off by default. This allows continuous record of changes for 35 days to allow you to replay any point in that window to a 1 second granularity.

