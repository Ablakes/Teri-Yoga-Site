var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");


mongoose.connect("mongodb://localhost/teris_site", {useMongoClient: true});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var blogShema = new mongoose.Schema({
    "content": String
});

var blogPosts = mongoose.model("blogPost", blogShema);

// var blogposts = ["This is one blog post"];


app.use("/styles",express.static(__dirname + "/styles"));

app.get("/", function(req, res){
        blogPosts.find({}, function(err, allBlogPosts){
        if(err){
            console.log(err);
        }else{
             res.render('landingpage', {blogPosts:allBlogPosts});
        }
    });
});

app.get("/newPost", function(req, res){
	res.render("newPost");
});

app.post("/newPost", function(req, res){
    // I want to figure out how to see what "req" is/loooks like. I assume it's an object.
    var postContent = req.body.content;
    var newBlog = {content: postContent};
    blogPosts.create(newBlog, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else {
            res.redirect("/");
        }
    });
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started');
});