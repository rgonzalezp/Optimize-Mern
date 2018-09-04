const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PlanSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	}
});

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
	},
	plans:[PlanSchema]
});

module.exports = Account = mongoose.model("account", AccountSchema);