const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for floors

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

// Create Schema for Building blocks

const BlockSchema = new Schema({
	image: {
		type: String,
		required: false
	},
	name: {
		type: String,
		required: false
	},
	latitude: {
		type: Number,
		required: false
	},
	longitude: {
		type: Number,
		required: false
	},
	floors: [FloorSchema]
});

module.exports = Block = mongoose.model("block", BlockSchema);