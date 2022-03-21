const express = require("express");

const app = express();

function errhandler(err, req, res, nxt) {
    if(err) {
        res.send("I am back!. wait for sometime")
    }
}


app.use(midleware1);
app.use(errhandler);


function midleware1(req, res, nxt) {
    console.log(' global midleware1')
    nxt();
}

function midleware2(req, res, nxt) {
    console.log(' global midleware2')
    //const err = new Error("i am back")
    //nxt(err);
    nxt();
}


function emptyLink(req, res, nxt){
    console.log('emptyLink')
    res.send("hiiii")
}

app.get('/', midleware2, emptyLink)

app.listen(3000);