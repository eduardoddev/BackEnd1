var http = require('http'); //chama o módulo http

http.createServer(function(req, res){
    res.end("Olá, galera!")
}).listen(8091)

console.log("O servidor está rodando!");