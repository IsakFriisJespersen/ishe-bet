const express = require('express')
const app = express()
const mongoose = require("mongoose")

mongoose
	.connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })

app.get('/login', function (req, res) {
    res.send(true)
})

app.listen(3000)
