
Intelligent-Tiering is used for objects where access patterns is unknown. A lifecycle configuration is a set of **rules** that consists of **actions**.

# Transition Actions
Change the storage class over time such as:

-   Move an object from S3 to IA after 90 days
-   After 180 days move to Glacier
-   After one year move to Deep Archive

Objects must flow downwards, they can't flow in the reverse direction.

![[Pasted image 20220311184528.png]]

# Expiration Actions
Once an object has been uploaded and changed, you can purge older versions after 90 days to keep costs down.