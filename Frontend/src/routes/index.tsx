import React from "react";
import { Route, Switch } from "react-router-dom";
import { AddProduct, Budgets, Home, Products } from "../pages";

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/products" exact component={Products} />
			<Route path="/products/create" component={AddProduct} />
			<Route path="/budgets" component={Budgets} />
		</Switch>
	);
};

export default Routes;
