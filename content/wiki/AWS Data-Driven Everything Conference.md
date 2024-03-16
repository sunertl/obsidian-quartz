# Problem

Business case: AnyCompanyCleaners

decline in subscriptions, trying to understand what's going on
using the Twitter API to query social media, unstructured data to understand what's going on

Case study here: https://catalog.us-east-1.prod.workshops.aws/workshops/5ae871d2-4b4d-41c8-9a1c-046426c8b090/en-US


# List of AWS services

- [[Amazon S3]]
	- Data lakes on S3
		- consolidate all your data
		- process and analyze
		- Simplified data lake formation
		- Machine learning
- [[AWS Glue]]
	- Data Catalog
		- Features include:
			- Search metadata for data discovery
			- Connections to [[Amazon S3]], [[Amazon RDS]], [[Amazon Redshift]], JDBC and [[Amazon DynamoDB]]
			- Classification for identifying and parsing files
			- Versioning of table metadata as schemas
		- Queryable by many services
			- Glue ETL
			- [[Amazon Athena]]
			- [[Amazon Redshift Spectrum]]
			- [[Amazon EMR]]
		- Crawlers
			- Features include:
				- Built in classifiers
					- Detect file type
					- Extract schema
					- Identify partitions
				- On Demand or scheduled execution
				- Build your own classifiers
					- Grok for ease of use
- [[Amazon Athena]]
	- Why?
		- Decouple storage from compute
		- Serverless
		- pay only for data scanned
		- schema on read - same data, many views
		- secure - IAM for authentication; encryption at rest & in transit
		- standard compliant and open storage file formats
		- built on powerful community supported OSS solutions

