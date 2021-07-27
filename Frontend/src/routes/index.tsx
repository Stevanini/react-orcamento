import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { CreateProduct, Budgets, Home, Products, Pdf, CreateBudget } from "../pages";
import { Config } from "../configs";

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path={`${Config.BASE_URL}/`} exact component={Home} />

			<Route path={`${Config.BASE_URL}/products`} exact component={Products} />
			<Route path={`${Config.BASE_URL}/products/create`} exact component={CreateProduct} />
			<Route path={`${Config.BASE_URL}/products/create/:productId`} component={CreateProduct} />

			<Route path={`${Config.BASE_URL}/budgets`} exact component={Budgets} />
			<Route path={`${Config.BASE_URL}/budgets/create`} exact component={CreateBudget} />
			<Route path={`${Config.BASE_URL}/budgets/create/:budgetId`} component={CreateBudget} />
			<Route path={`${Config.BASE_URL}/budgets/pdf/:budgetId`} component={Pdf} />

			<Redirect from="*" to={`${Config.BASE_URL}/`} />
		</Switch>
	);
};

export default Routes;
