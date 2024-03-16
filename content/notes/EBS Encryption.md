# Overview

When you don't have EBS encryption, the volume is not encrypted. The physical hardware itself may be performing at rest encryption, but that is a separate thing.

When you set up an EBS volume initially, EBS uses [[AWS Key Management Service (KMS)]] and a customer master key. This can be the EBS default (CMK) which is referred to as `aws/ebs` or it could be a customer managed CMK which you manage yourself.

That key is used by EBS when an encrypted volume is created. The CMK generates an encrypted **data encryption key (DEK)** which is stored with the volume with on the physical disk. This key can only be decrypted using KMS when a role with the proper permissions to decrypt that DEK.

When the volume is first used, EBS asks CMS to decrypt the key and stores the decrypted key in memory on the EC2 host while it's being used. At all other times it's stored on the volume in encrypted form.

When the EC2 instance is using the encrypted volume, it can use the decrypted data encryption key to move data on and off the volume. It is used for all cryptographic operations when data is being used to and from the volume.

When data is stored at rest, it is stored as ciphertext.

If the EBS volume is ever moved, the key is discarded.

If a snapshot is made of an encrypted EBS volume, the same data encryption key is used for that snapshot. Anything made from this snapshot is also encrypted in the same way.

Every time you create a new EBS volume from scratch, it creates a new data encryption key.

# Important Concepts

-   AWS accounts can be set to encrypt EBS volumes by default.
    -   It will use the default CMK unless a different one is chosen.
    -   Each volume uses 1 unique DEK (data encryption key)
    -   Snapshots and future volume use the same DEK
-   Can't change a volume to NOT be encrypted.
    -   You could mount an unencrypted volume and copy things over but you can't change the original volume.
-   The OS itself isn't aware of the encryption, there is no performance loss.
    -   The volume itself is encrypted using AES256
    -   This occurs between the EC2 host and the EBS system itself.
    -   The OS does not see any encryption. It simply writes data out and reads data in from a disk.
    -   If an exam question does not use AES256, or it suggests you need an OS to encrypt or hold the keys, then you need to perform full disk encryption at the operating system level.

___
[[Encryption]] [[AWS Storage]] 