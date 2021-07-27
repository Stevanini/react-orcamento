import React from "react";
import { Router } from "react-router-dom";

import history from "./routes/history";

import { Navbar } from "./components";
import { BudgetsProvider, ProductsProvider } from "./contexts";
import Routes from "./routes";

function App() {
	return (
		<Router history={history}>
			<BudgetsProvider>
				<ProductsProvider>
					<Navbar />
					<br />
					<div className="uk-container">
						<Routes />
					</div>
				</ProductsProvider>
			</BudgetsProvider>
		</Router>
	);
}

export default App;
