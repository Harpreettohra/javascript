var msg = 'Hello World';
console.log(msg);
response.writeHead(301, {
  Location: "http" + (request.socket.encrypted ? "s" : "") + "://" + 
    request.headers.host + newRoom
});
response.end();