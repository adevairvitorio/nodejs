var http = require('http')

http.createServer(function (req, res){
    res.end("teste")

}).listen(8081)

console.log("run server")