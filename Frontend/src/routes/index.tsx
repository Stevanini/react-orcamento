import React from "react";
import { Route, Switch } from "react-router-dom";
import { Budgets, Home } from "../pages";
import RoutesProducts from "./RoutesProducts";

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/products" component={RoutesProducts} />
			<Route path="/budgets" component={Budgets} />
		</Switch>
	);
};

export default Routes;
