import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CreateProduct, Budgets, Home, Products } from "../pages";

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/products" exact component={Products} />
			<Route path="/products/create" exact component={CreateProduct} />
			<Route path="/products/create/:productId" component={CreateProduct} />
			<Route path="/budgets" component={Budgets} />
			<Redirect from="*" to="/" />
		</Switch>
	);
};

export default Routes;
