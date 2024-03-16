## 1. Network Fundamentals

#flashcards/network-fundamentals/1-1 

Which layer chooses and determines the availability of communicating partners along with the resources necessary to make the connection, coordinates partnering applications, and forms a consensus on procedures for controlling data integrity and error recovery?;;The Application layer is responsible for finding the network resources broadcast from a server and adding flow control and error control (if the application developer chooses).

Which layer is responsible for converting frames from the Data Link layer into electrical signals?;;The Physical layer takes frames from the Data Link layer and encodes the 1s and 0s into a digital signal for transmission on the network medium.

At which layer is routing implemented, enabling connections and path selection between two end systems?;;The Network layer provides routing through an internetwork and logical addressing.

Which layer defines how data is formatted, presented, encoded, and converted?;;The Presentation layer makes sure that data is in a readable format for the Application layer.

Which layer is responsible for creating, managing, and terminating sessions between applications?;;The Session layer sets up, maintains, and terminates sessions between applications.

Which layer manages the transmission of data across a physical link and is primarily concerned with physical addressing and the ordered delivery of frames?;;Protocol data units (PDUs) at the Data Link layer are called frames. As soon as you see the word frame and/or the term physical addressing in a question, you know the answer is always Data Link layer.

Which layer is used for reliable communication between end nodes over the network and provides mechanisms for establishing, maintaining, and terminating virtual circuits as well as controlling the flow of information?;;The Transport layer uses virtual circuits to create a reliable connection between two hosts.

Which layer provides logical addressing that routers use for path determination?;;The Network layer provides logical addressing, IP and/or IPv6 addressing, and routing.

Which layer specifies voltage, wire speed, and connector pin- outs and moves bits between devices?;;The Physical layer is responsible for the electrical and mechanical connections between devices.

Which layer combines bits into bytes and bytes into frames and uses MAC addressing?;;The Data Link layer is responsible for the framing of data packets.

Host 1 sent a SYN packet to Host 2. What will Host 2 send in
response? 
> A. ACK 
> 
> B. NAK
> 
> C. SYN/ACK 
> 
> D. SYN/NAK
> 
> E. SYN
?
C. A connection-oriented session is set up using what is called a three-way handshake. The transmitting host sends a SYN packet, the receiving host sends a SYN/ACK, and the transmitting host replies with the last ACK packet. The session is now set up.

TCP and UDP reside at which layer of the OSI model?
>A. 1 
>
>B. 2 
>
>C. 3 
>
>D. 4
?
D. TCP and UDP are Transport layer protocols. The Transport layer is layer 4 of the OSI model.

Which layer of the OSI model provides an entry point for programs to access the network infrastructure?
>A. Application 
>
>B. Transport 
>
>C. Network
>
>D. Physical
?
A. The top layer of the OSI model gives applications access to the services that allow network access.

You are connected to a server on the Internet and you click a link on the server and receive a time-out message. What layer could be the source of this message?
>A. Application
>
>B. Transport
>
>C. Network
>
>D. Physical
?
A. If the remote server is busy or does not respond to your web browser request, this is an Application layer problem.

Which layer of the OSI model is responsible for code and character-set conversion as well as recognizing data formats?
>A. Application
>
>B. Presentation
>
>C. Session
>
>D. Network
?
B. The Presentation layer makes data “presentable” for the Application layer.

At which layers of the OSI model do bridges, hubs, and routers primarily operate, respectively?
>A. Physical, Physical, Data Link 
>
>B. Data Link, Data Link, Network 
>
>C. Data Link, Physical, Network
>
>D. Physical, Data Link, Network
?
C. Bridges, like switches, are Data Link layer devices. Hubs, like repeaters, are Physical layer devices. Routers are Network layer devices.

Which layer of the OSI model is responsible for converting data into signals appropriate for the transmission medium?
>A. Application 
>
>B. Network
>
>C. Data Link
>
>D. Physical
?
D. The Physical layer's job is to convert data into impulses that are designed for the wired or wireless medium being used on the attached segment.

A receiving host has failed to receive all the segments that it should acknowledge. What can the host do to improve the reliability of this communication session?
>A. Send a different source port number.
>
>B. Restart the virtual circuit.
>
>C. Decrease the sequence number.
>
>D. Decrease the window size.
?
D. A receiving host can control the transmitter by using flow control (TCP uses windowing by default). By decreasing the window size, the receiving host can slow down the transmitting host so the receiving host does not overflow its buffers.

Which layer 1 devices can be used to enlarge the area covered by a single LAN segment? (Choose two.)
>A. Firewall 
>
>B. NIC
>
>C. Hub
>
>D. Repeater
>
>E. RJ-45 transceiver
?
C, D. Not that you really want to enlarge a single collision domain, but a hub (multiport repeater) will provide this functionality for you.

Segmentation of a data stream happens at which layer of the OSI model?
>A. Physical 
>
>B. Data Link 
>
>C. Network
>
>D. Transport
?
D. The Transport layer receives large data streams from the upper layers and breaks these up into smaller pieces called segments.

When data is encapsulated, which is the correct order?
>A. Data, frame, packet, segment, bits
>
>B. Segment, data, packet, frame, bits
>
>C. Data, segment, packet, frame, bits
>
>D. Data, segment, frame, packet, bits
?
C. The encapsulation order is data, segment, packet, frame, bits.
<!--SR:!2024-02-20,3,250-->

What are two purposes for segmentation with a bridge? (Choose two.)
>A. To add more broadcast domains 
>
>B. To create more collision domains 
>
>C. To add more bandwidth for users
>
>D. To allow more broadcasts for users
?
B, C. Bridges and switches break up collision domains, which allows more bandwidth for users.

Acknowledgments, sequencing, and flow control are characteristic of which OSI layer?
>A. Layer 2 
>
>B. Layer 3
>
>C. Layer 4 
>
>D. Layer 7
?
C. A reliable Transport layer connection uses acknowledgments to make sure all data is received reliably. A reliable connection is defined by the use of acknowledgments, sequencing, and flow control, which is characteristic of the Transport layer (layer 4).

Which of the following is true regarding sequencing and acknowledgments? (Choose all that apply.)
>A. The segments delivered are acknowledged back to the sender upon their reception.
>
>B. If a segment is not received, the virtual circuit must be restarted from the beginning at a slower transmit interval.
>
>C. Any segments not acknowledged are retransmitted.
>
>D. Segments are sequenced back into their proper order upon arrival at their destination.
>
>E. All segments are retransmitted on time slot intervals.
?
A, C, D. When sequencing and acknowledgments are used, the segments delivered are acknowledged back to the sender upon their reception. At this point, any segments not acknowledged are retransmitted, and segments are sequenced back into their proper order upon arrival at their destination.

What is the purpose of flow control?
>A. To ensure that data is retransmitted if an acknowledgment is not received
>
>B. To reassemble segments in the correct order at the destination device
>
>C. To provide a means for the receiver to govern the amount of data sent by the sender
>
>D. To regulate the size of each segment
?
C. Flow control allows the receiving device to control the pace of the transmitting device so the receiving device's buffer does not overflow.

At which layer of the OSI model would you find IP?
>A. Transport 
>
>B. Network 
>
>C. Data Link
>
>D. Physical
?
B. IP is a Network layer protocol. TCP is an example of a Transport layer protocol, Ethernet is an example of a Data Link layer protocol, and T1 can be considered a Physical layer protocol.

Of the following, which is the highest layer in the OSI model?
>A. Transport 
>
>B. Session 
>
>C. Network
>
>D. Presentation
?
D. The Presentation layer is the sixth layer of the model. Only the Application layer is higher, but it is not listed. Session is layer 5, Transport is layer 4, and Network is layer 3.

Routers perform routing at which OSI layer?
>A. Physical 
>
>B. Data Link 
>
>C. Network
>
>D. Transport 
>
>E. Application
?
C. A router is specified at the Network layer and a router routes packets. Routers can also be called layer 3 switches.

Which of the following mnemonic devices can you use to remember the first letter of the name of each layer of the OSI model in the proper order?
>A. All People Seem To Need Processed Data.
>
>B. Always Should People Never Threaten Dog Police. 
>
>C. Please Do Not Throw Sausage Pizza Away.
>
>D. All Day People Should Try New Professions.
?
C. The phrase “Please Do Not Throw Sausage Pizza Away” contains the first letters of the layers in order, from layer 1 through layer 7. “All People Seem To Need Data Processing” works from the top down. The other options have all the right letters, just not in the right order.

Which IEEE standard specifies the protocol for CSMA/CD?
>A. 802.2 
>
>B. 802.3 
>
>C. 802.5
>
>D. 802.11
?
B. The 802.3 standard, commonly associated with Ethernet, specifies the media-access method used by Ethernet, which is known as Carrier Sense Multiple Access with Collision Detection (CSMA/CD).

At which of the following layers of the Open Systems Interconnection (OSI) model do the protocols on a typical local area network (LAN) use media access control (MAC) addresses to identify other computers on the network?
> A. Physical

> B. Data link
> 
> C. Network
> 
> D. Transport
?
B. The Ethernet (or IEEE 802.3) protocol at the data link layer uses MAC addresses to iden- tify computers on the local network. MAC addresses are coded into the firmware of physical network interface adapters by the manufacturer. The physical layer deals with signals and
is not involved in addressing. The IP protocol at the network layer has its own addressing system. The transport layer protocols are not involved in addressing.

Which of the following organizations developed the Open Systems Interconnection (OSI) model?
> A. International Telecommunication Union (ITU-T)
> 
> B. Comité Consultatif International Télégraphique et Téléphonique (CCITT)
> 
> C. American National Standards Institute (ANSI)
> 
> D. Institute of Electrical and Electronics Engineers (IEEE)
> 
> E. International Organization for Standardization (ISO)
?
E. ISO developed and published the OSI model to serve as a conceptual model for soft- ware and hardware developers. The ITU-T, formerly known as the CCITT, coordinates the development and advancement of international telecommunication networks and services. ANSI is a private organization that administers and coordinates a United States–based standardization and conformity assessment system. The IEEE publishes standards that define data link and physical layer standards. These standards are referred to collectively as the 802 series.

Which layer of the Open Systems Interconnection (OSI) model is responsible for the logical addressing of end systems and the routing of datagrams on a network?
>A. Physical
>
>B. Data link
>
>C. Network
>
>D. Transport
>
>E. Session
>
>F. Presentation
>
>G. Application
?
C. Network layer protocols (such as IP) contain headers that specify logical addresses for end system communication and route datagrams across a network. The physical layer defines standards for physical and mechanical characteristics of a network. The data link layer uses media access control (MAC) or hardware addresses, not logical addresses. The transport layer uses port numbers, not logical addresses. Session layer protocols create and maintain a dialogue between end systems. Presentation layer protocols are responsible for the format- ting, translation, and presentation of information. The application layer provides an entry point for applications to access the protocol stack and prepare information for transmission across a network.

On a TCP/IP network, which layers of the Open Systems Interconnection (OSI) model con- tain protocols that are responsible for encapsulating the data generated by an application, creating the payload for a packet that will be transmitted over a network? (Choose all that apply.)
> A. Physical
> 
> B. Data link
> 
> C. Network
> 
> D. Transport
> 
> E. Session
> 
> F. Presentation
> 
> G. Application
?
B, C, D. Before the payload data generated by an application can be transmitted over a TCP/ IP network, the system must encapsulate it by applying protocol headers and footers at three layers of the OSI model. The data link layer applies a header and footer to create an Ether- net frame. The network layer applies a header to create an IP datagram. The transport layer applies a TCP or UDP header to create a segment or datagram. The other model layers are involved in the payload transmission process, but they do not encapsulate the payload.


#flashcards/network-fundamentals/1-2

You need a network that provides centralized authentication for your users. Which of the following logical topologies should you use?
> A. VLANs
> 
> B. Peer-to-peer
> 
> C. Client-server
> 
> D. Mesh
?
C. A client-server logical topology allows you to have a centralized database of users so that authentication is provided in one place.

You need a topology that is scalable to use in your network. Which of the following will you install?
> A. Bus
> 
> B. Ring
> 
> C. Star
> 
> D. Mesh
?
C. To install a physical topology that provides ease of scalability, use a star network. This is a hub or switch device, and this is the most common LAN network today.

Which of the following physical topologies has the most connections and is the least popular for LANs?
> A. Bus
> 
> B. Star
> 
> C. Ring
> 
> D. Mesh
?
D. Only a mesh physical topology has point-to-point connections to every device, so it has more connections and is not a popular LAN technology.

In a physical star topology, what happens when a workstation loses its physical connection to another device?
> A. The ring is broken, so no devices can communicate
> 
> B. Only that workstation loses its ability to communicate
> 
> C. That workstation and the device it's connected to lose communication with the rest of the network
> 
> D. No devices can communicate because there are now two unterminated network segments.
?
B. In a star topology, each workstation connects to a hub, switch, or similar central device but not to other workstations. The benefit is that when connectivity to the central device is lost, the rest of the network lives on.

Which type of WAN technology uses labels, which enables priority of voice through the network?
> A. VPN
> 
> B. T1
> 
> C. MPLS
> 
> D. LAN
> 
> E. Bus
?
C. Multiprotocol Label Switching has as many advantages as a LAN protocol. When labels are used, voice can have priority over basic data, for example.

What is a logical grouping of network users and resources called?
> A. WAN
> 
> B. LAN
> 
> C. MLPS
> 
> D. Host
?
B. A logical grouping of hosts is called a LAN, and you typically group them by connecting them to a hub or switch.

Which of the following is a concern when using peer-to-peer networks?
> A. Where to place the server
> 
> B. Whose computer is least busy and can act as the server
> 
> C. The security associated with such a network
> 
> D. Having enoough peers to support creating such a network
?
C. It is easy to relax about security in a peer-to-peer environment. Because of the trouble it takes to standardize authentication, a piecemeal approach involving users' personal preferences develops. There are no dedicated servers in a peer- to-peer network, and such a network can be created with as few as two computers.

Which of the following is an example of when a point-to- multipoint network is called for?
> A. When a centralized office needs to communicate with many branch offices
> 
> B. When a full mesh of WAN links is in place
> 
> C. When multiple offices are daisy-chained to one another in a line
> 
> D. When there are only two nodes in the network to be connected
?
A. When a central office, such as headquarters, needs to communicate directly with its branch offices but the branches do not require direct communication with one another, the point- to-multipoint model is applicable. The other scenarios tend to indicate the use of a point-to-point link between sites.

Which of the following is an example of a LAN?
>A. Ten buildings interconnected by Ethernet connections over fiber-optic cabling
>
>B. Ten routers interconnected by Frame Relay circuits
>
>C. Two routers interconnected with a T1 circuit
>
>D. A computer connected to another computer so they can share resources
?
D. LANs generally have a geographic scope of a single building or smaller. They can range from simple (two hosts) to complex (with thousands of hosts).

Which of the following is a disadvantage of the star topology?
> A. When a single port on the central concentrating device fails, the entire network loses connectivity.
> 
> B. When the central concentrating device experiences a complete failure, all attached devices lose connectivity to the rest of the network.
> 
> C. In a star topology, a more expensive type of host must be used compared to the host used when implementing a physical bus.
> 
> D. It is more difficult to add stations and troubleshoot than with other topologies.
?
B. The only disadvantage mentioned is the fact that there is a single point of failure in the network. However, this topology makes troubleshooting easier; if the entire network fails, you know where to look first. The central device also ensures that the loss of a single port and the addition of a new device to an available port do not disrupt the network for other stations attached to such a device.

What is a difference between a LAN and a WAN?
> A. WANs require a router.
> 
> B. WANs cover larger geographical areas
> 
> C. WANs can utilize either private or public data transport.
> 
> D. All of the above.
?
D. A typical WAN connects two or more remote LANs together using someone else's network (your ISP's) and a router. Your local host and router see these networks as remote networks and not as local networks or local resources. Routers use proprietary serial connections for WANs.

Which of the following provides the most physical layout flexibility in a very large, geographically dispersed enterprise network?
>A. Bus topology
>
>B. LAN switch
>
>C. Star topology
>
>D. MPLS cloud network
?
D. Multiprotocol Label Switching provides logical links between sites, so branch offices can be easily and quickly added.

In what type of network are all computers considered equal and do not share any central authority?
> A. Peer-to-peer
> 
> B. Client-server
> 
> C. Physical topology
> 
> D. None of the above
?
A. In a peer-to-peer network, all computers are considered equal. It is up to the computer that has the resource being requested to perform a security check for access rights to its resources.

What advantage does the client-server architecture have over peer-to-peer?
>A. Easier maintenance
>
>B. Greater organization
>
>C. Tighter security
>
>D. All of the above
?
D. In client-server networks, requests for resources go to a main server that responds by handling security and directing the client to the resource it wants instead of the request going directly to the machine with the desired resource (as in peer-to- peer).

Which of the following is an example of a hybrid network?
>A. Ethernet switch
>
>B. Ring topology
>
>C. Bus topology
>
>D. Star topology
?
A. The best answer to this question is an Ethernet switch, which uses a star physical topology with a logical bus technology.

You have a network with multiple LANs and want to keep them separate but still connect them together so they can all get to the Internet. Which of the following is the best solution?
>A. Use static IP addresses
>
>B. Add more hubs
>
>C. Implement more switches
>
>D. Install a router
?
D. Routers are used to connect different networks together.

Which type of topology has the greatest number of physical connections?
> A. Point-to-multipoint
> 
> B. Star
> 
> C. Point-to-point
> 
> D. Mesh
?
D. In the mesh topology, there is a path from each connection to every other one in the network. A mesh topology is used mainly because of the robust fault tolerance it offers—if one connection goes on the blink, computers and other network devices can simply switch to one of the many redundant connections that are up and running.

What type of topology gives you a direct connection between two routers so that there is one communication path?
>A. Point-to-point
>
>B. Star
>
>C. Bus
>
>D. Straight
?
A. As its name implies, in a point-to-point topology you have a direct connection between two routers, giving you one communication path. The routers in a point-to-point topology can either be linked by a serial cable, making it a physical network, or be far away and only connected by a circuit within a Frame Relay network, making it a logical network.

Which network topology is a combination of two or more types of physical or two or more types of logical topologies?
> A. Cost
> 
> B. Ease of installation
> 
> C. Ease of maintenance
> 
> D. Fault-tolerance requirements
?
B. A hybrid topology is a combination of two or more types of physical or logical network topologies working together within the same network.

When designing a network and deciding which type of network topology to use, which item(s) should be considered? (Choose all that apply.)
>A. Cost
>
>B. Ease of installation
>
>C. Ease of maintenance
>
>D. Fault-tolerance requirements
?
A, B, C, D. Each topology has its own set of pros and cons regarding implementation, so it's important to ask the right questions and consider cost, ease of installation, maintenance, and fault tolerance.




## 2. Network Implementations

### [[2.1 Compare and contrast various devices, their features, and their appropriate placement on the network]]

### [[2.2 Compare and contrast routing technologies and bandwidth management concepts]]
