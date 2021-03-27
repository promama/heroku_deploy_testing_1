const express = require('express')
const app = express()
var port = process.env.port || 3000

app.get('/', function(req, res) {
    res.send("hello world")
})

app.listen(port, function(err) {
    if (err) {
        console.log("smth when wrong")
    }
    console.log("server listening to port: " + port)
})