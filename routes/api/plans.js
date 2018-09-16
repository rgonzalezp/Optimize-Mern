const express = require('express');
const planRouter = express.Router();

// Plans Model, to make queries to Plan
const Plan = require('../../models/Plan');


// @route 	POST api/plans
// @desc 	Get all plans
// @access 	Public
planRouter.post('/', (req,res,next) => {
  // email whatever
  Plan.find({email:req.body.email})
    .then(plans => res.json(plans));
});


// @route 	PUT api/plans
// @desc 	Create a new plan
// @access 	Public

planRouter.put('/', (req,res,next) => {
  Plan.create(req.body).then(function(plan){
    res.send(plan);
  }).catch(next);
});


// @route 	DELETE api/accounts/:id
// @desc 	Delete an account
// @access 	Public
planRouter.delete('/:id', (req,res,next) => {
  Plan.findById(req.params.id)
    .then(plan => plan.remove().then(() => res.json({result: 'success'})))
    .catch(err => res.status(404).json({ result: 'failed' }));
});

module.exports = planRouter;