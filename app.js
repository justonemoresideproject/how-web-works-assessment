// Part One: Solidify Terminology
// In your own terms, define the following terms:

// What is HTTP? An unsecured protocol used to transfer files
// What is a URL? the address of a web page
// What is DNS? a phonebook for a webpage's ip address
// What is a query string? A resource locator that is added to a url to find specific information within a webpage
// What are two HTTP verbs and how are they different? Get will request information from a webpage without changes, post will requesting information with changes
// What is an HTTP request? a request typically through port 80 to access a resource on a server
// What is an HTTP response? to provide a client with the resource it requested
// What is an HTTP header? Give a couple examples of request and response headers you have seen.
/* A name with values
method: get
scheme: http
cache-control: max-age=0 */
// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser? The get request is sent from your computer, after the dns query is performed, then the server responds with the specific resource within the url. Within the response is also other requests for information such as images that the browser will handle. The entire webpage is then loaded up and shown to the user

// Part Two: Practice Tools
// Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate” 
/* curl -k https://icanhazdadjoke.com/search?term=pirate */
// Use dig to find what the IP address is for icanhazdadjoke.com
/* dig icanhazdadjoke.com */
// Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.
/* ls
dadjokes.txt
python3 -m http.server
chrome -> localhost:8000 */

// Part Three: Explore Dev Tools
// Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.

// Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.

const get = document.getElementById('getMethod').value;
const getButton = document.getElementById('getButton');
const post = document.getElementById('postMethod').value;
const postButton = document.getElementById('postButton');
const website = 'https://icanhazdadjoke.com/'
const body = document.querySelector('body');

getButton.addEventListener('click', function() {
    const xmlHttp = new XMLHttpRequest();
    const newWeb = website + get;
    xmlHttp.open('GET', newWeb, false);
    xmlHttp.send(null);
    body.append(xmlHttp.responseText)
})

postButton.addEventListener('click', function() {
    const xmlHttp = new XMLHttpRequest();
    const newWeb = website + post;
    xmlHttp.open('POST', newWeb, false);
    xmlHttp.send(null);
    body.append(xmlHttp.responseText)
})


// Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in Chrome how you can view the request and response headers, as well as the form data.

// Part Four: Explore the URL API
// At times, it’s useful for your JavaScript to look at the URL of the browser window and change how the script works depending on parts of that (particularly the query string).

// Read about the URL API

// Try some of the code examples in the Chrome Console so that you can get comfortable with the basic methods and properties for instances of the URL class.