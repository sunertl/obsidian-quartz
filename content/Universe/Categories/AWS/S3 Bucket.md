- a resource that acts as a container for objects
- potentially can store unlimited amount of files to a bucket, such as text files, office documents, videos, DB backups, [[EBS Snapshots]], etc.
- You can upload different objects to an S3 bucket that you own or are owned by others.
- Naming convention for S3 bucket:
	- globally unique
	- namespace is shared by all AWS accounts around the world
	- Example:
		- if you created an S3 bucket named "xyz" then no other AWS user can create a bucket with that same name.
- Regional resource that uses all available data centers of the AWS region that you choose.
- The bucket is not hosted on your [[Amazon VPC]] or in a single Availability Zone.
- By default, Amazon S3 automatically replicates your objects to all Availability Zones of an AWS region to ensure high data durability and availability (i.e. if one region 100 data centers, then your files are replicated 100 times.)
- A bucket is designed to provide 99.99% [[Availability]] over a given year and eleven 9s of [[Durability]]. 

___
tags:: [[AWS Storage]]  