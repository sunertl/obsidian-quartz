-   Structured Query Language (SQL) is a feature of most RDS.
-   Structure to the data known as a **schema**.
    -   Defined in advance.
    -   Defines names of things
    -   Valid values of things
    -   Types of data which is stored and where
-   Fixed relationship between tables.
    -   This is defined before data is entered into the database.

Every row in a table must have a value for the **primary key**. There must be a value stored for every attribute in the table.

SQL systems are relational so we generally define relationships between tables as well. This is defined with a **join table**. A join table has a **composite key** which is a key formed of two parts. Composite keys together must be unique.

Keys in different tables are how the relationships between the tables are defined.

The Table schema and relationships must be defined in advance which can be hard to do.