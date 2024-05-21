//creating a server
const http = require("http");
http.createServer(function(req,res){
res.write("server is live hi hello")
res.end();
}).listen(3000);
