import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import Aux from "../../hoc/ReactAux";
import styles from "./Home.module.css";

const Home = () => {
	return (
		<div className={styles.Home}>
			<Aux>
				<div className={styles.homeHeader}>
					<h1>Welcome to the To do list app!</h1>
					<Button
						className={styles.homeButtons}
						variant="contained"
						color="primary"
						component={Link}
						to="/login"
					>
						Login
					</Button>

					<Button
						className={styles.homeButtons}
						variant="contained"
						color="secondary"
						component={Link}
						to="/register"
					>
						Register
					</Button>
				</div>
			</Aux>
		</div>
	);
};

export default Home;
