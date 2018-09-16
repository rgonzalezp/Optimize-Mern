const express = require("express");
const blockRouter = express.Router();

// Block Model, to make queries to DB
const Block = require("../../models/Block");

// @route 	GET api/accounts
// @desc 	Get all blocks ordered for best plan
// @access 	Public
blockRouter.get("/blocks/best-plan", (req,res,next) => {
	let x = 0;
    let y = 0;
    Block.find({})﻿.then(function(blocks){
    	const blocksArray = blocks;
    	for(let i = 0; i<blocksArray.length;i++){
    		x += blocksArray[i].geometry.coordinates[0];
    		y += blocksArray[i].geometry.coordinates[1];
    	}
    	x = x/blocksArray.length;
    	y = y/blocksArray.length;
    	res.send({coordx:x, coordy:y});
    }).catch(next);
});

// @route 	GET api/accounts
// @desc 	Get blocks near coordinates
// @access 	Public
blockRouter.get("/blocks", (req,res,next) => {
    Block.aggregate().near({
   		near:{
    		'type': 'Point',
    		'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
   		},
   		maxDistance: 1000,
   		spherical: true,
   		distanceField: "dis"
  	})﻿.then(function(blocks){
        res.send(blocks);
    }).catch(next);
});

// @route 	POST api/blocks
// @desc 	Create a new block
// @access 	Public
blockRouter.post("/blocks", (req,res,next) => {
	Block.create(req.body).then(function(block){
		res.send(block);
	}).catch(next);
});

// @route PUT api/blocks/:id
// @desc Update an existing block
// @access Public
blockRouter.put("/blocks/:id", (req,res,next)=>{
	Block.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
		Block.findOne({_id:req.params.id}).then(function(block){
			res.send(block);
		});
	});
});

// @route 	DELETE api/blocks/:id
// @desc 	Delete an existing block
// @access 	Public
blockRouter.delete("/blocks/:id", (req,res,next) => {
	Block.findByIdAndRemove({_id:req.params.id}).then(function(block){
		res.send(block);
	});
});

module.exports = blockRouter;