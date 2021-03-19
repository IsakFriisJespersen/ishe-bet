const mongoose = require("mongoose")


const bet = mongoose.Bet({
	name: String,
	email: String,
	password: String,
	active: Boolean,
})

module.exports = mongoose.model("Bet", bet)