#CS/development/engineering/architecture 

>[!Important]
>A single-tiered system that operates as a single unit only without any independent submodules. It is composed of a database, server-side application, and a user interface that is tightly coupled with each other and runs in a single platform. 

- This type of architecture is rigid, in the sense that any change in one of its parts can affect the entire application. 
- That's the meaning of a tightly-coupled system which makes auto-scaling difficult to implement.
- It is also highly susceptible to system failures since it is just using a single unified component.
- Every request that goes into a monolithic application is synchronous which blocks the client until the operation completes. 
- This means that if there's a delay or a failure in the processing, then the request will automatically fail.
- If one of its components experiences an error, then the entire application stack fails too.

>[!Example]
>EE web application with JSPs (Java/Jakarta Server Pages) that run in a single web server. 

- A JSP generates the web pages of your application but it can also work as a server-side program to connect to your database and other application layers. 
- This monolithic application is like one large slab of stone instead of multiple pebbles that work together independently.

___
Related concept: [[Distributed Architecture]]