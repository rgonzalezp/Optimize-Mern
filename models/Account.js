const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Schema for accounts

const AccountSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	institution: {
		type: String,
		required: true
	}
});

module.exports = Account = mongoose.model("account", AccountSchema);