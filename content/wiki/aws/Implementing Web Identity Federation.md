---
category:
  - "[[Categories/Projects]]"
type:
  - "[[content/wiki/aws/AWS]]"
start: 2023-11-11
year: 2023
tags:
  - projects
url: 
status:
  - Completed
related:
  - "[[AWS Security Speciality]]"
  - "[[AWS CloudFormation]]"
  - "[[Amazon CloudFront]]"
  - "[[Amazon Cognito]]"
---
## Overview

Implementation of a simple serverless application which uses Web Identity Federation

The application runs using the following technologies:

- [[Amazon S3|S3]] for front-end application hosting
- Google API Project as an ID provider
- [[Amazon Cognito|Cognito]] and [[IAM Role|IAM roles]] to swap Google token for AWS credentials

The application runs from a browser, gets the user to login using a Google ID and then loads all images from a private S3 bucket into a browser using presignedURLs.

![[Screenshot 2023-11-11 at 6.06.09 PM.png]]



## Provision Architecture

- Use [this](https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/quickcreate?templateURL=https://learn-cantrill-labs.s3.amazonaws.com/aws-cognito-web-identity-federation/WEBIDF.yaml&stackName=WEBIDF) CloudFormation template.
	- consists of stack that creates the actual resources
	- The S3 `appbucket`consists of the html and JS file for the application - these are the files for the web app!
		- ![[Screenshot 2023-11-11 at 6.17.58 PM.png]]
		- Verify that `Block all public access` is `Off`
			-  ![[Screenshot 2023-11-11 at 6.28.57 PM.png]]
		- Confirm it has a bucket policy
			- ![[Screenshot 2023-11-11 at 6.30.42 PM.png]]
	- The S3 bucket `patchesprivatebucket` consists of pictures of patches the wonder cat
		- ![[Screenshot 2023-11-11 at 6.20.47 PM.png]]
- The template also created a CloudFront distribution pointing to the `appbucket` as its origin
	- ![[Screenshot 2023-11-11 at 6.22.50 PM.png]]
	- Note down the distribution domain name: https://d125d7te5t0031.cloudfront.net
		- this is the web app URL

## Create Google API Project & Client ID

- Go to: https://console.developers.google.com/apis/credentials
- Click on `Create Project` and name your project
- Once created, click on `Configure Consent Screen`
	- there you can configure access rights and permissions
	- Click on `External`
	- Fill out the required boxes
	- Save all other steps, no changes needed
- Next step is to click on `Credentials`
	- This is where you are creating API credentials that the serverless application will use to communicate with the Google IdP
	- Click on Create Credentials -> OAuth client ID
	- Enter required info and add the CloudFront distribution domain name in `Authorized JavaScript origins`
		- ![[Screenshot 2023-11-11 at 6.48.46 PM.png]]
		- Save client ID: 962455314064-994njdsdu2bm55urtgqbspd0bigirupe.apps.googleusercontent.com

## Create Cognito Identity Pool

- Start with navigating to `Cognito` in the AWS account and create `Identity pools`
- Select `Authenticated access` and select Google
- Create a new IAM role
- Next is to configure the integration with the Google identity provider
	- use the client ID from the earlier step
	- no other changes are necessary
- Name the Identity pool name
- Click next on everything and note down the `Identity pool ID`: us-east-1:f79257ea-3ff3-433e-936b-c3ca5ee3226f

>[!important] Important
>The serverless application will be passing in a Google auth token to Cognito. Cognito will be assuming a role and using that role's temporary credentials to access S3. Next step is to update the permissions allocated to that role and make sure that it has sufficient access to the private S3 bucket


- The link between Cognito and the Google IdP can be seen in the trust relationship in the role that was created in Cognito: 
- ![[Screenshot 2023-11-11 at 7.06.42 PM.png]]
	- Federated: shows that only Cognito can assume this role
	- It also some conditions which restrict what can assume this role and the top condition is that only the identity pool ID (that was created before) is able to assume this role
	- This means that only requests which are coming into Cognito using this identity pool are able to assume this role, get temporary credentials and use those to access AWS. 
	- The only identities which are able to use this ID pool are the ones which are configured by our application to use the Google IdP
	- We are creating this chain of trust between our serverless application, the Google IdP and then Cognito via this ID pool. 


- The inline policy determines what permissions the temporary security credentials have when this role is assumed. We want to make sure that those temporary credentials are able to access our private S3 bucket.
	- Click on `Permissions` and then `Add permissions` -> `Attach policies`
	- Select `PrivatePatchesPermissions` - this policy was part of the CloudFormation stack
	- ![[Screenshot 2023-11-11 at 7.16.26 PM.png]]


## Update App Bucket and Test Application

- Move to the S3 Console https://s3.console.aws.amazon.com/s3/home?region=us-east-1    
	- Open the `webidf-appbucket-` bucket   
	- select `index.html` and click `Download` & save the file locally  
	- select `scripts.js` and click `Download` & save the file locally  
- Open the local copy of `index.html` in a code editor.    
	- Locate the `REPLACE_ME_GOOGLE_APP_CLIENT_ID` placeholder   
	- Replace this with YOUR CLIENT ID  
	- Save `index.html`
- Open the local copy of `scripts.js` in a code editor.
	- Locate the IdentityPoolId: `REPLACE_ME_COGNITO_IDENTITY_POOL_ID` placeholder
	- Replace the `REPLACE_ME_COGNITO_IDENTITY_POOL_ID` part with your IDENTITY POOL ID you noted down in the previous step
	- Locate the `Bucket: "REPLACE_ME_NAME_OF_PATCHES_PRIVATE_BUCKET" ` placeholder.
	- Replace `REPLACE_ME_NAME_OF_PATCHES_PRIVATE_BUCKET` with with bucket name of the `webidf-patchesprivatebucket-` bucket
	- Save `scripts.js`