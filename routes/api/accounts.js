const express = require("express");
const accountRouter = express.Router();
const oktaClient = require('../../lib/oktaClient');

// Account Model, to make queries to DB
const Account = require("../../models/Account");

// @route 	GET api/accounts
// @desc 	Get all accounts
// @access 	Public
accountRouter.get("/", (req,res,next) => {
	Account.find()
		.then(accounts => res.json(accounts));
});

// @route 	POST api/accounts
// @desc 	Create a new account
// @access 	Public
accountRouter.post("/", (req,res,next) => {
  if (!req.body) return res.sendStatus(400);
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email
    },
    credentials: {
      password: {
        value: req.body.password
      }
    }
  };
  //authentication user
  oktaClient
    .createUser(newUser)
    .then(user => {
      res.status(201);
      res.send(user);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    });

});

// @route 	PUT api/accounts/:id
// @desc 	Create a plan for account
// @access 	Public
accountRouter.put('/:id', (req,res,next) => {

  //FIX BUG, not returning updated document.

  const stringName = req.body.name;
  const stringContent = req.body.content;

  const account = Account.findOneAndUpdate(
    req.params.id,
    {$push: 
      { 'plans': 
				{ 
      name: stringName,
      content: stringContent
			 	}
			 }
		},
		{safe: true, upsert: true, new : true},
		(err, account) => {
        if(err)
    	console.log(err);

        res.json(account);
    });
});

// @route 	DELETE api/accounts/:id
// @desc 	Delete an account
// @access 	Public
accountRouter.delete("/:id", (req,res,next) => {
	Account.findById(req.params.id)
		.then(account => account.remove().then(() => res.json({result: "success"})))
		.catch(err => res.status(404).json({ result: "failed" }));
});

module.exports = accountRouter;