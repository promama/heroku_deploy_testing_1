const express = require('express')
const app = express()
var port = process.env.port || 5000

app.get('/', function(req, res) {
    res.send("hello world")
})

app.listen(port, "0.0.0.0", function(err) {
    if (err) {
        console.log("smth when wrong")
    }
    console.log("server listening to port: " + port)
})