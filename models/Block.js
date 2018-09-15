const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create GeoLocation Schema
const GeoSchema = new Schema({
	type:{
		type: String,
		default: "Point"
	},
  	coordinates:{
  		type: [Number],
  		index: "2dsphere"
  	}
});

// Create Schema for floors

const FloorSchema = new Schema({
	number:{
		type: Number,
		required: false
	}, 
	lockers: {
		type: Number,
		required: false
	},
	availableLockers: {
		type: Number,
		required: false
	}
});

// Create Schema for Building blocks

const BlockSchema = new Schema({
	name: {
		type: String,
		required: false
	},
	floors: [FloorSchema],
	geometry: GeoSchema
});

module.exports = Block = mongoose.model("block", BlockSchema);