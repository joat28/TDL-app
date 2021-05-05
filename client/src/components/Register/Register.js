import React from "react";
import styles from "./Register.module.css";
import { TextField, Button } from "@material-ui/core";

const Register = () => {
	return (
		<div className={styles.Register}>
			<form>
				<div className={styles.form}>
			        <h1>Register</h1>
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
					<TextField
						placeholder="p@ssW0rD"
						label="Confirm Password"
						variant="outlined"
					/>
                    <TextField placeholder="Your name" label="Name" variant="outlined" />
                    <Button color="primary" variant="contained" > Register Me! </Button>
				</div>
			</form>
		</div>
	);
};

export default Register;
