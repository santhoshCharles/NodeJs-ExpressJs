const express = require("express");
const mongoose = require("mongoose")
const bodyparser = require("body-parser");
const Posts = require("./post");
const router = express.Router();

const app = express();

app.use(bodyparser.json());

app.post("/", (req, res) => {
    console.log('old', req.body)
    res.send('done')
//    const post = new Posts({
//        title: req.body.title,
//        description: req.body.description
//    })

//    //console.log(post)

//    post.save().then( data => res.json(data))
//    .catch( err => console.log('err', err));
})

app.get("/post", (req, res) => {
    res.send("this is post")
})

app.get("/post/:postId", async(req, res) => {
    try {
    const post = await Posts.findById(req.params.postId)
    res.json(post);
    } catch(err) {
        //console.log('get by id ' ,err)
    }
})

// mongoose.connect('mongodb://testboy: rhino94@ds155396.mlab.com:55396/rest',{useNewUrlParser: true}, () =>
// console.log("connected to DB!") )

app.listen(5001);