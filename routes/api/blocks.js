const express = require("express");
const blockRouter = express.Router();

// Account Model, to make queries to DB
const Block = require("../../models/Block");

// @route 	GET api/accounts
// @desc 	Get all accounts
// @access 	Public
blockRouter.get("/blocks", (req,res,next) => {
    Block.aggregate().near({
   		near:{
    		'type': 'Point',
    		'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
   		},
   		maxDistance: 10,
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

/*// @route 	PUT api/accounts/:id
// @desc 	Create a plan for account
// @access 	Public
accountRouter.put("/blocks/:id", (req,res,next) => {

//FIX BUG, not returning updated document.

	const stringName = req.body.name;
	const stringContent = req.body.content;

	const account = Account.findOneAndUpdate(
		req.params.id,
		{$push: 
			{ "plans": 
				{ 
					name: stringName,
			 	  	content: stringContent
			 	}
			 }
		},
		{safe: true, upsert: true, new : true},
		(err, account) => {
        if(err)
        	console.log(err)

        res.json(account)
    });
});

// @route 	DELETE api/accounts/:id
// @desc 	Delete an account
// @access 	Public
accountRouter.delete("/blocks/:id", (req,res,next) => {
	Account.findById(req.params.id)
		.then(account => account.remove().then(() => res.json({result: "success"})))
		.catch(err => res.status(404).json({ result: "failed" }));
});
//*/

module.exports = blockRouter;