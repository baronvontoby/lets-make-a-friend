var fs = require('fs');
var path = require('path');
var express = require('express');
var html = express();

html.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

html.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname,'../public/survey.html'))
});

module.exports = html;