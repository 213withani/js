# Object.assign vs spread operator
https://medium.com/@corinnemariekelly/object-assign-vs-spread-operator-577c889dbadc

# MVC

Simple and to the point:
http://heim.ifi.uio.no/~trygver/1979/mvc-2/1979-12-MVC.pdf
* Models represent knowledge.
* A view is a (visual) representation of its model.
* A controller is the link between a user and the system. … The controller receives such user output, translates it into the appropriate messages and pass these messages on .to one or more of the views.

My take is: A user can control a view based on a data model.

# Lazy loading
https://adigital.agency/blog/lazy-loading-why-we-implement-it-and-how-its-done


# Web Architecture 101
https://engineering.videoblocks.com/web-architecture-101-a3224e126947

1. DNS: 
You need DNS to look up the IP address for a domain.

1. Load Balancers: 
They route incoming requests to one of many application servers and send response back to client. Distributing the requests across the set of servers.

1. Web Application Servers: 
They execute the core business logic that handles a user’s request and sends back HTML to the user’s browser.

1. Database Servers:
Store information. SQL: provide a standard way of querying relational data sets that was accessible to a wide audience. Don’t scale horizontally very well and can only scale vertically to a certain point

1. Caching Service: 
leverage caching services to save the results of expensive computations so that it’s possible to retrieve the results from the cache instead of recomputing them the next time they’re needed. 

1. Job Queue & Servers:
Most web applications need to do some work asynchronously behind the scenes that’s not directly associated with responding to a user’s request. For instance, Google needs to crawl and index the entire internet in order to return search results. It does not do this every time you search. Instead, it crawls the web asynchronously, updating the search indexes along the way.


“job queue” architecture. It consists of two components: a queue of “jobs” that need to be run and one or more job servers (often called “workers”) that run the jobs in the queue.

We started with a simple FIFO queue though we upgraded to a priority queue to ensure that time-sensitive operations like sending password reset emails were completed ASAP.

1. Full-text Search Service:
The technology powering this functionality is typically referred to as “full-text search”, which leverages an inverted index to quickly look up documents that contain the query keywords. (ES,Solr)

1. Services
Once an app reaches a certain scale, there will likely be certain “services” that are carved out to run as separate applications.

1. Data #AWSKinesis #Kafka #S3 #AWSRedshift #Oracle
Almost every app these days, once it reaches a certain scale, leverages a data pipeline to ensure that data can be collected, stored, and analyzed.
* The raw data as well as the final transformed/augmented data are saved to cloud storage. AWS Kinesis 
* The transformed/augmented data is often loaded into a data warehouse for analysis. We use AWS Redshift, 

1. Cloud storage
You can use it to store and access more or less anything you’d store on a local file system with the benefits of being able to interact with it via a RESTful API over HTTP

Amazon’s S3 offering is by far the most popular cloud storage available today and the one we rely on extensively here at Storyblocks to store our video, photo, and audio assets, our CSS and Javascript, our user event data and much more.

1. CDN
CDN stands for “Content Delivery Network” and the technology provides a way of serving assets such as static HTML, CSS, Javascript, and images over the web much faster than serving them from a single origin server. 
