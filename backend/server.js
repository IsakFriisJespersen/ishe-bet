const express = require('express')
const app = express()
const mongoose = require("mongoose")


app.get('/login', function (req, res) {
    res.send(true)
})

app.listen(3000)
