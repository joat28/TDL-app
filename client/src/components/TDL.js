import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";

const TDL = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	);
};

export default TDL;
