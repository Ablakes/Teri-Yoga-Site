var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use("/styles",express.static(__dirname + "/styles"));

app.get("/", function(req, res){
    res.render("landingpage");
});

app.get("/new-post", function(req, res){
	res.render("new-post");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started');
});