links:: [[+ AWS]]
____

# Introduction

Hi everyone, it's a pleasure being here with all of you today and welcome to the Cloud Audit Academy - An Approach to Security Auditing in AWS. Before we start and kick off with the content, let's give everyone a chance to introducte themselves. I am curious about your backgrounds and why you chose this specific training. 

Let me introduce myself first so you also know who this guy with the funny accent is: my name is Stefan, I am a Manager in Deloitte's Risk and Financial Advisory practice, out here in sunny California in San Francisco (which is half foggy and half sunny). I have been working at Deloitte for almost seven years now and have been part of various SOX engagements (on the external / assurance perspective, internal audit / co-sourcing *explain*), multi-year projects related to 2nd line of defense ([[Three Lines of Defense]]). I am a certified information systems auditor (CISA for short) and I hold two AWS certifications: the certified cloud practitioner and the solutions architect associate. I am currently studying for the certified developer associate and one of my goals this year is to pass all associate level certificates for AWS. A fun fact about me is that I spent a week in a Buddhist center of silence in the Austrian Alps - for a week, our group did not say a single word, we meditated a couple of hours every day and went hiking. It was a fantastic experience, I highly recommend it to all of you!

Also, after this training, I am happy to give you all my contact information, so please feel free to reach out via email or on LinkedIn!

But enough about me, would love to hear more about you all, your backgrounds, which company are you representing today, I am also curious about your companies or your experience/exposure with/to AWS, why did you specifically choose this training, any challenges you are facing you want to discuss during this training, etc.

*Give everyone a chance to introduce themselves*

# Slide 2
Here you'll see a quick overview of the various domains we are covering in this training series - if you have been in other trainings offered by AWS, that's great - welcome back! Today's training will be about Data Security and Privacy. 

Just FYI - you should have received a package with additional documents - one of them is the attendee guide which is a bit more fleshed out than the content on these slides. In any case, feel free to follow along with the slides as we go and you can review the details in your attendee guide after this session.

Let's move on to the next slide.

# Slide 3
A quick note –  you’ll see this bookmark icon at the top right corner of most slides – this is the page number in your attendee workbook where you can find the slide content. 

For today's agenda, we'll start with the learning objectives, we want to understand the concepts that AWS found to be important with their customers when it comes to auditing for Data Security and Privacy.
For the domain overview, I will just give a brief introduction what DSP looks like and how we can locate it in the shared responsibility model. 
Then we will talk about key AWS services that are crucial when we want to understand DSP from an auditors and control owners perspective.
And then finally we will talk about a specific use case we have prepared for you to understand risks, control objectives, controls & control activities, AWS best practices related to DSP. 

Let's move on to the next slide

# Slide 4
I also want to highlight some expectations and assumptions for this session. This is not a [[cloud-agnostic]] session - we will be talking specifically about AWS and its services today. If you were sent from your company today and that company uses infrastructure-as-a-service provider other than AWS, please stay so you can see how amazing AWS's services are! Go back to your company after this session, talk to executives, and persuade them!

Since this session is about security and audit concepts when operating in AWS, it is definitely recommended to have a basic understanding of security, networking and AWS services. Don't be alarmed, I am more than happy to explain complex concepts in an easy way to understand!
We will be hearing on one of the next slides the concept of CSC and CSP

Also, just as an FYI - what we are talking about in terms of risks, controls, best practices - these are all illustrative examples and are definitely not exhaustive

Let's move on to the next slide

# Slide 5
On slide 5, learning objectives, we will understand approaches for assessing AWS controls intended to address three major risks. As mentioned previously, these are just illustrative examples and are not exhaustive. These three risks are part of an increased focus of an audit we will later see in our use case: 
- how a lack of workload classification and data governance processes could result in inappropriate access to data or improper use of AWS services to meet regulatory requirements
- the importance of inappropriate access or management of encryption keys  and /or access to encryption services to perform encryption, decryption, or management activities.
- the importance of tracking or identifying sensitive data within the AWS environment to help meet privacy regulations.

When we talk about DSP, we care most about how systems that process data are designed to classify and ensure its confidentiality and integrity during handling.


We will talk more in detail about each individual risk in the upcoming slides but let me quickly talk about the Shared Responsibility Model on the next slide.

# Slide 6
Some of you may have seen this before, some of you haven't - this is very crucial to understand responsibility and ownership when using cloud services. [[Shared Responsibility Model]]

**AWS responsibility “Security of the Cloud”** - AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud. This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services.

**Customer responsibility “Security in the Cloud”** – Customer responsibility will be determined by the AWS Cloud services that a customer selects. This determines the amount of configuration work the customer must perform as part of their security responsibilities. For example, a service such as Amazon Elastic Compute Cloud (Amazon EC2) is categorized as Infrastructure as a Service (IaaS) and, as such, requires the customer to perform all of the necessary security configuration and management tasks. Customers that deploy an Amazon EC2 instance are responsible for management of the guest operating system (including updates and security patches), any application software or utilities installed by the customer on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance. For abstracted services, such as Amazon S3 and Amazon DynamoDB, AWS operates the infrastructure layer, the operating system, and platforms, and customers access the endpoints to store and retrieve data. Customers are responsible for managing their data (including encryption options), classifying their assets, and using IAM tools to apply the appropriate permissions.  

Let's move on to the next slide

# Slide 8

As I mentioned previously when I talked about expectations and assumptions, this is an AWS specific training which means we will talk about AWS specific services. I want to spend a couple of minutes on this slide here to walk you through services that a cloud service customer can utilize to manage DSP on AWS:

- [[AWS Key Management Service (KMS)]] 
- [[AWS Certificate Manager]]
- [[AWS CloudHSM]]
- [[Amazon Macie]]
- [[AWS Secrets Manager]]

Maybe do a demo on AWS with these services

# Slide 9

Watch the video. Transcrypt:

The very first AnyCompany Restaurant was opened in Springfield, IL 15 years ago by Li Juan, president and CEO, who saw a need in the market for health-conscious or dietary restricted patrons. Her inspiration was her son, Richard Roe (now the IT security administrator), who had many allergy issues in his childhood that prevented the family from having the option for fast food. At the beginning of 2010, the company owned 20 restaurants across four states, and expanded into a fifth state, adding five restaurants during the year.

In order to bring in the freshest ingredients, AnyCompany Restaurant has partnered with many local vendors and farmers who sell and ship directly to each AnyCompany Restaurant. In addition, AnyCompany Restaurant has two large warehouses to house and ship its restaurants’ non-perishable items (that is, food containers, condiments, replacement dining equipment, and so on).

Because of the complexity and volatility of the restaurant business, AnyCompany Restaurant was struggling to scale their IT operations while expanding the use of their on-premises servers and data storage solutions. So, in January 2019, they partnered with AWS to provide IT solutions that would help ease their costs of expanding by creating an environment that is easier to scale and maintain.


# Slide 11

For this slide, I want to break down the use case in three different scenarios: planning, fieldwork and reporting. If you have been involved in any type of audit, you should be familiar with these threee scenarios which essentially are the most crucial milestones in an audit life cycle. 

Let's go over the first scenario, Planning, to get an understanding of what the expectation of the Director of IA at AnyCompany is.

After the risk assessment process was evaluated and the issues noted had remediation plans in place, the company decided to move forward in the process of launching the mobile application: securing financing. During a 1 February, 2020 meeting with the audit committee, Jikesh Patel, Chief Audit Executive, learned that the investment company floating the loan to develop the mobile app requires a SOC 2 Type 1 report in order to approve the incremental spend (this is the second request for incremental spend). After a conversation with **Ana Carolina Silva, Director of Internal Audit** at AnyCompany Restaurant, she identifies you, the audit supervisor, as being responsible for preparing the business or control owners to address the risks associated with the following domains: Data Security and Privacy; Identity and Access Management; Configuration Management; and Logging and Monitoring. When looking at the detailed project plan, you note that **Data Security and Privacy is the first planned [[SOC 2]] Type 1 report**. You ask your boss, Akua Mansa, Internal Audit Manager at AnyCompany Restaurant, **if there are any areas of increased focus. She responds that the risk of a lack of workload classification and data governance processes that result in inappropriate access to data or regulatory requirements, is the most critical risk in this domain.**

Based on your previous work over the Introduction to AWS and GRC domains this year, you know the following:

·       The mobile application will be built using:

o   AWS Amplify

o   Amazon Simple Storage Service (Amazon S3)

o   Amazon Elastic Compute Cloud (Amazon EC2)

·       AnyCompany Restaurant has defined, documented, and distributed data governance standards

·       The IT infrastructure team performs quarterly risk assessments over data governance

·       The compliance team performs a review of the AWS SOC 1 and 2 reports annually

You have a meeting with Mary Major, lead security manager, in preparation for putting together a SOC 2 Type 1 strategy for this risk.

# Slide 12

We learned that the risk of a lack of [[Workload]] classification and data governance processes that result in inappropriate access to data or regulatory requirements is the most critical risk in this domain. Before we move further, does anyone of you have any questions on this particular risk? 

Show of hands, can someone tell me what is your understanding of workload classification?

*Best Practices:*
-   **Identify the data within your [workload](https://wa.aws.amazon.com/wat.concept.workload.en.html "The set of components that together deliver business value.")**: This includes the type and classification of data, the associated business processes. data owner, applicable legal and compliance requirements, where it’s stored, and the resulting controls that are needed to be enforced. This may include classifications to indicate if the data is intended to be publicly available, if the data is internal use only such as customer personally identifiable information (PII), or if the data is for more restricted access such as intellectual property, legally privileged or marked sensititve, and more.
	- Consider discovering data using [[Amazon Macie]]
-   **Define data protection controls**: Protect data according to its classification level. For example, secure data classified as public by using relevant recommendations while protecting sensitive data with additional controls.
-   **Automate identification and classification**: Automate identification and classification of data to reduce the risk of human error from manual interactions.
	- Use [Amazon S3](https://wa.aws.amazon.com/wat.concept.amazonsimplestorageservice.en.html "Storage for the internet. You can use it to store and retrieve any amount of data at any time, from anywhere on the web.") Inventory: [Amazon S3](https://wa.aws.amazon.com/wat.concept.amazonsimplestorageservice.en.html "Storage for the internet. You can use it to store and retrieve any amount of data at any time, from anywhere on the web.") Inventory [Amazon S3](https://wa.aws.amazon.com/wat.concept.amazonsimplestorageservice.en.html "Storage for the internet. You can use it to store and retrieve any amount of data at any time, from anywhere on the web.") inventory is one of the tools you can use to audit and report on the replication and encryption status of your objects.
	- Consider [Amazon Macie](https://wa.aws.amazon.com/wat.concept.macie.en.html "A security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS."): [Amazon Macie](https://wa.aws.amazon.com/wat.concept.macie.en.html "A security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS.") uses machine learning to automatically discover and classify data stored in [Amazon S3](https://wa.aws.amazon.com/wat.concept.amazonsimplestorageservice.en.html "Storage for the internet. You can use it to store and retrieve any amount of data at any time, from anywhere on the web.").  
-   **Define data lifecycle management**: Your defined lifecycle strategy should be based on sensitivity level, as well as legal and organization requirements. Aspects including the duration you retain data for, data destruction, data access management, data transformation, and data sharing should be considered.

Now, since we have a meeting lined up with Mary who is the lead security manager, what would you think would be the questions we should be asking Mary? While thinking of the questions, maybe it would also be a good idea to think of requests as well you need to inspect on how to test the controls we mapped to the risk. 

![[Pasted image 20220614171355.png]]

**Questions**

1. What risk factors are considered when performing the data governance risk assessment?
2. Who is involved in the risk assessment review and what approvals are required?
3. How often does AnyCompany Restaurant update/review the data governance policy that is distributed to the company?
4. Does the policy detail where sensitive data is stored and transmitted across applications, databases, servers, and network infrastructure?
5. Does the policy define data retention periods and end-of-life disposal requirements?
6. How are changes to the data classification/governance communicated and enforced?
7. How are instances not aligned with regulatory requirements remediated? Is there a timeline in which these instances should be remediated?
8. Who is responsible and/or accountable to verify the following:
	1. Mechanisms used to allow connection to the AWS environment including:
	2. Access to the AWS environment via the network
	3. Access to the AWS environment via remote connection (if applicable)
9. What are the policies and procedures in place, which govern administration over the technology identified to support connections to the AWS environment?

**Requests**

1. AnyCompany Restaurant’s key storage procedures through AWS KMS
2. Policies in place for data governance
3. Policies, which govern administration over the technology identified to support connections to the AWS environment
4. List of encryption implementation and changes for the period
5. Evidence that implementation and changes were designed, reviewed, approved, and tested in accordance with company policy for sample selected
6. Evidence that encrypted technology exists to connect to the AWS environment both remotely and via the network
7. Evidence that technology configurations are configured in line with policies (for a sample).

# Slide 16

Let's move on to the next part of the use case, fieldwork 

During your meeting with Mary on 1 February, 2020, you learned the following:

- The company’s policy document contains detailed procedures over data classification and encryption procedures and is reviewed annually.
- The IT infrastructure department performs a quarterly risk assessment, but it did not include an inventory of where sensitive data is stored.
- Data deletion is performed manually and alignment with retention period and disposal or deletion is not formally tracked.
- [[Amazon CloudWatch]], [[AWS CloudTrail]], and [[VPC Flow Logs]] have been enabled for all AWS tools and applications. Alerts are configured for application errors and addressed by the security administrators as needed.
- The compliance team has reviewed the AWS SOC 1 or SOC 2 reports and has mapped internal controls to the identified complementary user entity controls, or CUECs, and determined the staff responsible for mapping controls were not qualified so the opinion was unqualified. Mary states that you must work with the compliance team to obtain the annual review. You note that your team has performed procedures around the SOC 1 or SOC 2 review during your Introduction to AWS project.

The security manager supplies you with the following evidence:

- CloudWatch configurations for error alerting
- A copy of data governance policy documents
- A sample of the company’s risk assessment performed over data governance

What would you do next? What testing would you perform? What other evidence might you need?

**Assessing data classification**

1. Obtain an understanding of management's approach to data governance, and how data classification is performed
2. Ensure that there is an awareness and documentation of where exactly sensitive data is stored and how it's transmitted across applications, databases, servers, and network infrastructure
3. Verify alignment with defined retention periods and end-of-life disposal requirements
4. Data protection controls are in place to guard against unauthorized use, access, loss, destruction, and falsification 
5. Obtain and inspect data governance/classification policies and procedures
6. Review to determine if the relevant topics identified through inquiry are covered at an adequate level of detail to allow for an effective data classification assessment
7. Based on the frequency that data classification assessments are performed, select a sample of management data classification assessments performed
8. Inspect that the sample data classification assessment(s) were performed in a timely manner and by the appropriate personnel (based on frequency and ownership established by policy)
9. Inspect the data classification assessment for evidence that an inventory of where sensitive data is stored and transmitted was included, reviewed, and any necessary updates were documented in a timely manner
10. Inspect that data was classified per company policy
11. Inspect that alignment with retention period and disposal/deletion was review by management and that misaligned items were tracked to resolution

**Periodic review**

1. Inquire with responsible and/or accountable individuals to verify the following:
2. Mechanisms used to allow connection to the AWS environment including:
3. Access to the AWS environment via the network
4. Access to the AWS environment via remote connection (if applicable)
5. Policies and procedures in place, which govern administration over the technology identified to support connections to the AWS environment
6. Obtain a list of encryption implementation and changes for the period
7. Obtain assurance over the completeness and accuracy of the list of encryption implementation/changes for the period (for example, no inappropriate filters, parameters or exclusions)
8. For the sample selected, inspect that implementation and changes were designed, reviewed, approved, and tested in accordance with company policy
9. For the sample selected, observe evidence that encrypted technology exists to connect to the AWS environment both remotely and via the network
10. For the sample selected, inspect the technology configurations for evidence that the technology is configured per policies


Let's move over to slide 19 where we start documenting the control activity based on our understanding of the control objective:

# Slide 19

![[Pasted image 20220614173258.png]]

**Control Activity**

**Assessing data classification**

Per the company's defined frequency, management assesses data classification in accordance with company policy.

**Example Test Plan for Auditors**
**Management Inquiry**
1. Obtain an understanding of management's approach to data governance, and how data classification is performed.
	1. Ensure that there is an awareness and documentation of where exactly sensitive data is stored and how it is transmitted across applications, databases, servers, and network infrastructure
	2. Verify alignment with defined retention periods and end-of-life disposal requirements
	3. Data protection controls are in place to guard against unauthorized use, access, loss, destruction, and falsification

**Obtain data classification policies**
1. Obtain and inspect data governance/classification policies and procedures.
	1. Review to determine if the relevant topics identified through inquiry are covered at an adequate level of detail to allow for an effective data classification assessment

**Inspect Sample**
1. Based on the frequency that data classification assessments are performed, select a sample of data classification assessments performed by management. Inspect the review artifacts to determine:
	1. that the sample data classification assessment(s) were performed in a timely manner and by the appropriate personnel (based on frequency and ownership established by policy)
	2. that the data classification assessment for evidence that an inventory of where sensitive data is stored and transmitted was included, reviewed, and any necessary updates were documented in a timely manner.
	3. that data was classified per company policy alignment with retention period and disposal/deletion was reviewed by management and that items not aligning were tracked to resolution



# Slide 21

![[Pasted image 20220614173551.png]]


**Control Activity**
**Periodic review**

Management periodically reviews the setup of relevant infrastructure services to determine relevant legal and regulatory requirements were met.


**Example Test Plan for Auditors**

**Understand Reviews**
1. Inquire with responsible and/or accountable individuals to verify the following:
	1. Mechanisms used to facilitate the connection from the on-premises environment to the AWS environment, including:
		1. Access to the AWS environment via the network
		2. Access to the AWS environment via remote connection (if applicable)
		3. Policies and procedures in place, which govern administration over the technology identified to support connections to the AWS environment

**Obtain lists**

1. Obtain a list of
	1. setups for infrastructure services approved by management
	2. encryption implementation and changes for the period

**Validate completeness and accuracy**

1. Obtain assurance over the completeness and accuracy of the list of encryption implementation/changes for the period (for example, no inappropriate filters, parameters, or exclusions)

**Inspect sample**

1. For the sample selected:
	1. inspect that implementation and changes were designed, reviewed, approved, and tested in accordance with company policy
	2. observe that there’s evidence that encryption technology is used to connect to the AWS environment both remotely and via the network
	3. inspect the encryption technology configurations for evidence that the technology is configured per policies


# Slide 22

We are finally at the reporting stage - you've reviewed the evidence from John and made some observations. Based on these observations, are there any control gaps you identified? Are the controls designed or operating effectively? Should we raise any issues to management?

**Evidence review**

**Data management policy documents:** You review the policy documentation and find that it was last reviewed on 3 January, 2020, less than a year has passed. There is evidence of sign-off by Mary, lead security manager, and you note that strict procedures are in place to classify and sort data based on legal and regulatory requirements. The policy states that data at rest and in-transit should be encrypted and encryption keys are to be rotated on a quarterly basis. Completion of this activity is tracked within a ticketing system and routed to Martha Rivera, CISO, for review and approval.

**Risk assessment:** You review the IT infrastructure team’s Q4 2019 data governance risk assessment and find that it was performed in 10 December, 2018. There is evidence attached to show that the assessment included the review of data classification and governance. During the quarterly assessment, you observe that the company is planning on automating the data deletion process to reduce the risk of misalignment with retention period and end-of-life disposal because of an internal audit inspection recommendation.

**CloudWatch configurations:** You review the CloudWatch configurations and see that AWS KMS and AWS Lambda both have alerting enabled. AWS KMS will provide alerts to all security administrators anytime that the settings and access configurations are accessed. This provides some level of assurance that any attempt to make changes to policies or access to encryption keys is known by all system administrators. This reduces the risk that unauthorized access will go unnoticed. Lambda has alerts configured over deployment packages related to package size and runtime parameters. Should either cross their assigned threshold, alerts will be sent to administrators to address the issue and remediate packages or investigate runtime errors. Further, alerts are set up to alert for any/all changes to critical applications. This addresses the potential risk that unauthorized changes could create data privacy or security issues for the company.


# Slide 24 - 26

**Results of the audit** (is the company ready for SOC 2/Common control 6.1 – _The entity implements logical access security software, infrastructure, and architectures over protected information assets to protect them from security events to meet the entity's objectives._)

- More than one control activity necessary to achieve the objective – ready is relative, but there’s a good start to address the data security component
- Potential control activities the company can map/take credit for:
	- 6.1.2 Data security and privacy policies and related procedures are defined, documented, and distributed. Annually, these are reviewed for currency, updated if needed, and approved.
	- 6.1.2 Per company's defined frequency, AnyCompany Restaurant performs risk assessments associated with data governance requirements based on company policy.
	- During implementation, AnyCompany Restaurant designs, reviews, approves, tests and implements encryption, consistent with policy, to protect relevant data at rest and in transit. Any subsequent configuration or technology changes are reviewed and approved by appropriate stakeholders before implementation.

**Recommendations to management** (Value-add/How can they be better).

- Maintain an updated inventory of where sensitive data is stored
- When possible, implement automated controls over data deletion and end-of-life disposal
- When implementing manual controls over data deletion and end-of-life disposal, design monitoring controls to quickly detect potential instances that are not aligned with regulatory requirements
- Implement data identification: Classify data with easily identifiable indicators; for example, use tags for Amazon S3 buckets and objects that classify the data in the buckets
- Automate identification and classification: Automate identification and classification of data to reduce the risk of human error**


# Slide 27

![[Pasted image 20220615113527.png]]


# Slide 28

Alright everybody, let's move on to the next risk: Lack of formal policies, processes, and preventative controls surrounding management of encryption keys used in protecting sensitive data may result in inappropriate access to encryption services to perform encryption, decryption, or management activities.

Control objective for this one is:

![[Pasted image 20220615113600.png]]

This control activity is about **Specification document**

A formal key management specification standard document is in place and incorporates all key management components that are required to operate, maintain, and protect a cryptographic device throughout its lifecycle.

**Example test plan for auditors**

**Understand policies**
1. Inquire with management to obtain an understanding of the existing policies and standards in place for encryption key management, including frequency with which the specification and standards document is reviewed and who is responsible for performing that review

**Obtain and inspect policies**
1. Obtain key management specification standard and policy documents and inspect to determine whether key topics are incorporated and formally documented. Some of the key topics may include:
	1. Encryption key management requirements
	2. Cryptographic practices
	3. Crypto-periods and key rotation
	4. Key storage and protection mechanisms for cryptographic information at-rest and in-transit
	5. Key distribution and access
	6. Key accountability and audit
	7. Key archive, backup, and recovery
	8. Key compromise and recovery
	9. Key revocation and destruction,
	10. Authentication mechanisms configured and in place to ensure key material confidentiality

**Determine periodic review was performed**

1. Inspect to determine whether a periodic review and updates have been performed and signed-off at least annually by the authorized reviewer

# Slide 31

In order to provide reasonable assurance that encryption keys are created, managed and deleted consistent with policy in place and adhere to regulatory requirements, the next control activity is around **Key Management Access:** Users with access to create, rotate, enable, disable and define usage policies for master keys is restricted to authorized administrators. This is an example of a preventative control. 

Users with access to create, rotate, enable, disable, and define usage policies for master keys is restricted to authorized administrators.
![[Pasted image 20220615114039.png]]


# Slide 33

The last control activity for this risk is about **Crypto-period Review and Rotation.**

A periodic review (for example, quarterly, semi-annual) of encryption keys are performed by management to determine if existing keys align with crypto periods established and according to the rotation policy in place. This is an example of a detective control.

# Slide 34

![[Pasted image 20220615114147.png]]
![[Pasted image 20220615114800.png]]
# Slide 35

The last risk is that there is an inability to track or identify sensitive data within the AWS environment to help meet privacy regulations.

# Slide 36-37
![[Pasted image 20220615114836.png]]

**Infrastructure selection**

Upon setup of infrastructure services, management defines/selects the appropriate infrastructure and regions based on relevant legal and privacy regulations.

![[Pasted image 20220615114909.png]]


# Slide 38-39

**Periodic review**

Management periodically reviews the setup of relevant infrastructure services to determine relevant legal and regulatory requirements were met.

![[Pasted image 20220615115019.png]]

![[Pasted image 20220615115034.png]]

# Slide 40

That brings us to the conclusion of this domain. Remember these 3 takeaways for auditing data security and privacy in AWS.

1. Data Security and Privacy is “Ultimately” the responsibility of Management, however more due diligence is needed to ensure that controls are in place to adequately satisfy the companies organizational   - legal – regulatory requirements
2. Data classification and its visibility are paramount in protecting the confidentiality – integrity – and availability of data. You can’t secure something unless you first know what it is and then where it is
3. On AWS there are a multitude of services at your disposal to manage the security and privacy of the CSC’s environment, however there’s no single service that handles everything so they should take a multi-layered approach.
	1. AWS (KMS) to create and manage cryptographic keys.
	2. Certificate Manager - to manage and deploy public and private (SSL/TLS) certificates.
	3. Macie – to automatically discover, classify, and protect sensitive data in AWS.
	4. AWS Secrets Manger – to rotate, manage, and retrieve database credentials, API keys, and other secrets.




**Comments:**

- Give the audience a break
- conversational, which is good
- virtually is not good
- might have to think about other ways to present
- Deloitte has a sandbox account
	- keys are set up in KMS
	- similar to certificates, what are the components
- demo perspective
	- put the risk with the demos
- at some point, CloudHSM on prem? 
	- main difference between cloudHSM sits in your VPC, KMS is outside i.e. in S3
	- logically separated
	- KMS / HSM is in the backend
	- divert to other resources other than to circle back
- very good, conversational, demo with risks!