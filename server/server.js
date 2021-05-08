require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//Connection to MongoDB atlas:
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

app.get("/", (req, res) => {
	res.send("Hey, this is the To to list app");
});

app.post("/api/register", async (req, res) => {
	console.log(req.body);
	const { email, password, name } = req.body;
	if (email == "" || password == "" || name == "") {
		return res.json({
			status: "error",
			message: "Invalid, email, password, name",
			error: "Invalid, email/password/name"
		});
	}

	try {
		const newUser = new User({ email, password, name });
		await newUser.save((error, user) => {
			if (error) throw error;
			res.json({
				status: "ok",
				message: "check logs",
				user: user,
			});
		});
	} catch (error) {
		res.json({
			status: "error",
			error: error,
			message: "Duplicate email",
		});
	}
});

app.post("/api/login", (req, res) => {
	const { email, password } = req.body;
	if (email == "" || password == "") {
		return res.json({
			status: "error",
			error : "That Email/Password not allowed, change it",
			message: "Invalid, email, password"
		});
	}
	User.findOne({ email }, (error, userFound) => {
		if (error) {
			return res.json({
				status: "error",
				error: error,
				message: "error in retrieving data",
			});
		}
		if (!userFound) {
			return res.json({
				status: "error",
				error: "Sorry, no user Found",
				message: "Invalid, Credentials/No user found",
			});
		}

		userFound.comparePasswords(password, function (error, isMatch) {
			if (error)
				return res.json({
					status: "error",
					message: "Error in comparing passwords",
					error: error,
				});
			return res.json({
				status: "ok",
				message: "Password Comparision process success",
				isAuthorized: isMatch,
			});
		});
	});
});

app.listen(1337, () => console.log("Server running ..... "));
