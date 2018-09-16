const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlansSchema = new Schema({
  email:String,
  content:String,
});
module.exports = mongoose.model('plan',PlansSchema);