var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));

var blogposts = ["This is one blog post"];

app.set("view engine", "ejs");

app.use("/styles",express.static(__dirname + "/styles"));

app.get("/", function(req, res){
    res.render("landingpage", {blogposts:blogposts});
});

app.get("/new-post", function(req, res){
	res.render("new-post");
});

app.post("/new", function(req, res){
    // I want to figure out how to see what "req" is/loooks like. I assume it's an object.
    var newpost = req.body.content;
	blogposts.push(newpost);
    res.redirect("/"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started');
});