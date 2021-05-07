require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//Mongoose connect
const DB = process.env.DB_URI;
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log("Database connected"))
	.catch((error) => {
		console.log("Error connecting to Database!");
		console.log(error);
	});

//Import Models
const User = require("./models/user");

app.use(bodyParser.json());
app.use(cors());

// TODO: Change the condition for cors before deployment
// if (process.env.NODE_ENV !== 'production') {
// }

// Connection to Mongoose:
mongoose.connect("mongodb://localhost:27017/tdl");

app.get("/", (req, res) => {
	res.send("Hey, this is the To to list app");
});

app.post("/api/register", async (req, res) => {
	console.log(req.body);

	// TODO: hash the password using bcrypt

	const { email, password, name } = req.body;
	if (email == "" || password == "" || name == "") {
		return res.json({
			status: "error",
			message: "Invalid, email, password, name",
		});
	}

	try {
		const newUser = new User({ email, password, name });
		await newUser.save();
	} catch (error) {
		res.json({
			status: "error",
			message: error.message,
			ps: "Duplicate email",
		});
	}
	res.json({
		status: "ok",
		message: "check logs",
	});
});
app.listen(1337, () => console.log("Server running ..... "));
