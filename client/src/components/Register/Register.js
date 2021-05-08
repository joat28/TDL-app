import React, { useState } from "react";
import styles from "./Register.module.css";
import { TextField, Button } from "@material-ui/core";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	async function registerUser() {
		const data = await fetch("http://localhost:1337/api/register", {
			method: "POST",
			body: JSON.stringify({
				email,
				password,
				name,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => res.json());
		console.log(data);
		if (data.status === "ok") {
			alert("You are logged in - from Register");
		} else {
			alert(`Error : ${data.error} \n Message : ${data.message}`);
		}
	}
	return (
		<div className={styles.Register}>
			<form>
				<div className={styles.form}>
					<h1>Register</h1>
					<TextField
						placeholder="your@email.com"
						label="Email"
						variant="outlined"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<TextField
						placeholder="p@ssW0rD"
						label="Password"
						variant="outlined"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					{/* <TextField
						placeholder="p@ssW0rD"
						label="Confirm Password"
						variant="outlined"
						value="confirm"
					/> */}
					<TextField
						placeholder="Your name"
						label="Name"
						variant="outlined"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
					<Button color="primary" variant="contained" onClick={registerUser}>
						Register Me!
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Register;
