const mongoose = require("mongoose");
const UserModel = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		Date: {
			type: Date,
			default: Date.now,
		},
	},
	{ collection: "users" }
);

const model = mongoose.model("UserModel", UserModel);
module.exports = model;
