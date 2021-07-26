import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CreateProduct, Budgets, Home, Products, Pdf, CreateBudget } from "../pages";

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />

			<Route path="/products" exact component={Products} />
			<Route path="/products/create" exact component={CreateProduct} />
			<Route path="/products/create/:productId" component={CreateProduct} />

			<Route path="/budgets" exact component={Budgets} />
			<Route path="/budgets/create" exact component={CreateBudget} />
			<Route path="/budgets/create/:budgetId" component={CreateBudget} />
			<Route path="/budgets/pdf/:budgetId" component={Pdf} />

			<Redirect from="*" to="/" />
		</Switch>
	);
};

export default Routes;
