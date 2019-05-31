var express = require('express');
var api = require('./app/routing/apiRoutes');
var html = require('./app/routing/htmlRoutes');
var friends = require('./app/data/friends');
var server = express();
var PORT = process.env.PORT || 3000;
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/', [html,api]);

server.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
