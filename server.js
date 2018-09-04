const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Require the route to manage api
const accounts = require("./routes/api/accounts");

const app = express();

//Bodyparser Middleware to read json
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connection to Mongo
mongoose
	.connect(db,{ useNewUrlParser: true })
	.then(() => console.log("MongoDB Connection Success..."))
	.catch(err => console.log(err));

// Use Routes
app.use("/api/accounts",accounts);

//check this port for deployment
const port = process.env.PORT || 5000;


//app start listening on port ${port}
app.listen(port, () => console.log(`Server started on port ${port}`));