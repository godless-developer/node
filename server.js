let http = require("http");
let moment = require("moment");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(moment.toString());
  })
  .listen(8080);
