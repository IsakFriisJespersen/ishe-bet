const mongoose = require("mongoose")
const Schema = mongoose.Schema

const user = new Schema({
	name: String,
	email: String,
	password: String,
	active: Boolean,
    admin: Boolean
})

module.exports = mongoose.model("User", user)