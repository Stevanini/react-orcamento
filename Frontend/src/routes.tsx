import React from "react";
import { Route, Switch } from "react-router-dom";
import { Budgets, Products, Home } from "./pages";

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/products" component={Products} />
			<Route path="/budgets" component={Budgets} />
		</Switch>
	);
};

export default Routes;
