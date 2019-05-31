var express = require("express");
var api = express();
var friends = require('../data/friends')

api.use(express.urlencoded({ extended: true }));
api.use(express.json());

api.post('/api', function(req, res){
    var newFriend = req.body;
    friends.push(newFriend);
    res.json(newFriend);
    console.log(friends);
})

console.log(friends);

api.get('/api/newfriend', function(req, res){
    return res.json(friends);
})

module.exports = api;
