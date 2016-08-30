#Chatty
Yet another demo Chat application for playing with websockets.  This
one using the following stack:

* Node.js
* Express
* socket.io
* Angular2
* Typescript
 
This is a typical chat application demo used for demoning socket.io.
This is not an original work, most of it originates
from Nic Raboy and his blog example here: [link][1]
That version of code did not work with current Angular2 versions, so
I updated it to `Angular2.0.0-rc.5`.  I also changed it to use a service
to handle all the websocket communications, and remove the database
so as to simplify things.

To run this app:

1. install node.js
2. download both directories (client and server) into a single parent directory
3. navigate to the client directory and `npm install` to install the client-side node modules
4. navigate to the server directory and run `npm install -g express` to install express as a global module
5. run `npm install -g typescript` to install typescript as a global module
6. run `npm install` to install the server-side node modules
7. launch the application from the server folder as `node app.js`.
8. Use your browser to navigate to http://localhost:8079

[1]: https://www.thepolyglotdeveloper.com/2016/01/create-a-real-time-chat-application-with-the-cean-stack-and-socket-io/.