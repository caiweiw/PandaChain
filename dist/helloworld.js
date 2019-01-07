"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
// 明确类型麻烦些，却会获得非常详细的语法提示
var server = http_1.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});
var hostname = "127.0.0.1";
var port = 3000;
server.listen(port, hostname, function () {
    console.log("Server1 running at http://" + hostname + ":" + port + "/");
});
