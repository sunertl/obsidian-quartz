---
tags:
  - compsci/cloud/aws/security
up:
  - "[[Amazon RDS]]"
related:
  - "[[Data Protection]]"
---
## Overview

- At rest encryption ([[Encryption at Rest]])
	- Possibility to encrypt the master & read replicas with [[AWS Key Management Service (KMS)]] AES-256 encryption
	- Encryption has to be defined at launch time
	- If the master is not encrypted, the read replicas cannot be encrypted
	- Transparent Data Encryption (TDE) available for Oracle and SQL Server
- In-flight encryption ([[Encryption in Transit]])
	- SSL certificates to encrypt data to RDS in flight
	- Provide SSL options with trust certificate when connecting to database
	- To enforce SSL:
		- PostgreSQL: ``rds.force_ssl=I`` in the AWS RDS console (parameter groups)
		- MySQL: within the DB:
			- `GRANT USAGE ON *.* TO 'mysqluser'@'%' REQUIRE SQL;`
- Encrypting RDS backups
	- Snapshots of un-encrypted RDS databases are un-encrypted
	- Snapshots of encrypted RDS databases are encrypted
	- Can copy a snapshot into an encrypted one
- To encrypt an un-encrypted RDS database:
	- Create a snapshot of the un-encrypted database
	- Copy the snapshot and enable encryption for the snapshot
	- Restore the database from the encrypted snapshot
	- Migrate applications to the new database, and delete the old database