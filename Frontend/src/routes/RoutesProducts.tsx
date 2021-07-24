import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { AddProduct, Products } from '../pages'


const RoutesProducts: React.FC = () => {

	let { path } = useRouteMatch();

	return (
		<Switch>
			<Route path={path} exact component={Products} />
			<Route path={`${path}/create`} component={AddProduct} />
		</Switch>
	)
}

export default RoutesProducts;