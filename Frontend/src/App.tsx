import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Budgets, Products } from './pages';

function App() {
	return (
		<Router>
			<Navbar></Navbar>
			<br />
			<div className="uk-container">
				<Switch>
					<Route path="/" exact>
						<div className="uk-grid-column-small uk-grid-row-large" uk-grid>
							<Link to="/products">
								<div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
									<h3 className="uk-card-title">Produto</h3>
									<p>Criar o produto para adicionar nos orçamentos</p>
								</div>
							</Link>
							<Link to="/budgets">
								<div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
									<h3 className="uk-card-title">Orçamentos</h3>
									<p>Criar os orçamentos para o cliente</p>
								</div>
							</Link>
						</div>
					</Route>

					<Route path="/products">
						<Products />
					</Route>
					<Route path="/budgets">
						<Budgets />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
