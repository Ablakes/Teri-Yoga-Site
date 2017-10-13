var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landingpage");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started');
});