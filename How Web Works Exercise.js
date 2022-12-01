// Part One: Solidify Terminology
// In your own terms, define the following terms:

// What is HTTP?
// HTTP is hypertext transfer protocol and its how browsers and servers communicate with each other.
// it is a protocol for fetching resources and is the foundation of date exchange.
// Hyper Text Transfer Protocol is governs how clients get data from, or send data to, a server.



// What is a URL?
//is a unique identifier used to locate a resource on the Internet. 
//It is also referred to as a web address and consist of multiple parts.


// What is DNS?
// The Domain Name System (DNS) is the phonebook of the Internet
// DNS translates domain names to IP addresses so browsers can load Internet resources.
// Short for Domain Name System, this is a system that takes human-readable URLs and converts them into IP addresses.

// What is a query string?
//this provides “extra information” — search terms, info from forms.
// The query string allows you to pass key-value pairs into the URL, in the format ?key1=value1&key2=value2...

// What are two HTTP verbs and how are they different?
// GET requests without side effects while POST requests with side effects (changes date on the server)
// GET - get some data from the server (most pages, search forms)
// POST - send some data to the server (pages that change data on server)


// What is an HTTP request?
// HTTP works as a request-response protocol between a client and server. 
// Example: A client (browser) sends an HTTP request to the server; then the server returns a response to the client.
// An HTTP request is a request from a client to a server which follows the HTTP protocol (eg a request for HTML from news.google.com)

// What is an HTTP response?
// The response contains status information about the request and may also contain the requested content.
//An HTTP response is a response from a server to a client which follows the HTTP protocol (eg sending back HTML/CSS/JS/etc)



// What is an HTTP header? Give a couple examples of request and response headers you have seen.
//An HTTP header is a field of an HTTP request or response that passes additional context and metadata about the request or response
// One I've seen is asking for a specific language.
// Headers provide additional information about the request or the response. Here are some examples:
// Request headers: Host, User-Agent, Accept, Cookie, Cache-Control
// Response headers: Content-Type, Last-Modified, Set-Cookie, Cache-Control


// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// 1. Your browser “resolves” the name into an IP address using DNS
// 2. Your browser makes a request to that IP address, including headers (info about browser, any previous cookies, and other things)
// 3. The server sends a response (typically, HTML, with a status code (200 if it was sucessful)
// 4. The browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc)
// 5. The browser makes separate HTTP requests for those resources and receives response from the server for each