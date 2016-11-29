var server = require("./024-server");
var router = require("./024-router");

server.start(router.route);