import React, { useState } from "react";
import styles from "./Login.module.css";
import { TextField, Button } from "@material-ui/core";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function loginUser() {
		const data = await fetch("http://localhost:1337/api/login", {
			method: "POST",
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				"Content-type": "application/json",
			},
		}).then((res) => res.json());
		console.log(data);
		if (data.status === 'ok') {
			if (data.isAuthorized) {
				alert('You are logged in - from login');
			}
			else {
				alert('Invalid credentials');
			}
		} else {
			alert(`Error : ${data.error} \n Message : ${data.message}`);
		}
	}
	return (
		<div className={styles.Login}>
			<form>
				<div className={styles.form}>
					<h1>Login</h1>
					<TextField
						placeholder="your@email.com"
						label="Email"
						variant="outlined"
						value={email}
						onChange={(event) => {
							setEmail(event.target.value);
						}}
					/>
					<TextField
						placeholder="p@ssW0rD"
						label="Password"
						variant="outlined"
						value={password}
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					/>
					<Button color="primary" variant="contained" onClick={loginUser}>
						Login
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Login;
