const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const FloorSchema = new Schema({
	lockers: {
		type: Number,
		required: true
	},
	availableLockers: {
		type: Number,
		required: true
	}
});

module.exports = Floor = mongoose.model("floor", FloorSchema);