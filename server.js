const path = require('path');
const bb = ('express-busboy');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Require the route to manage api
const blocks = require('./routes/api/blocks');
const plans = require('./routes/api/plans');

const app = express();

//Bodyparser Middleware to read json
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connection to Mongo
mongoose
  .connect(db,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connection Success...'))
  .catch(err => console.log(err));

// Use Routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/map',blocks);
app.use('/api/plans',plans);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req,res) => {
		res.sendFile(path.resolve(__dirname,'client/build/index.html'));
	});
}
//check this port for deployment
const port = process.env.PORT || 5000;


//app start listening on port ${port}
app.listen(port, () => console.log(`Server started on port ${port}`));