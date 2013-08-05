var express = require('express');
var fs = require('fs');
 
var app = express();
app.use(express.logger());


function readFromFile(filename){
  var msgBuf = fs.readFileSync(filename);
  return msgBuf.toString();
}

app.get('/', function(request, response) {
  var msg = readFromFile("index.html"); 
  response.send(msg);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
