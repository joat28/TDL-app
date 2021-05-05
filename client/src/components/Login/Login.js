import React from "react";
import styles from "./Login.module.css";
import { TextField, Button } from "@material-ui/core";

const Login = () => {
	return (
		<div className={styles.Login}>
			<form>
				<div className={styles.form}>
					<h1>Login</h1>
					<TextField
						placeholder="your@email.com"
						label="Email"
						variant="outlined"
					/>
					<TextField
						placeholder="p@ssW0rD"
						label="Password"
						variant="outlined"
					/>
					<Button color="primary" variant="contained">
						 Login 
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Login;
