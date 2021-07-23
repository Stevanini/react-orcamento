import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./components";
import { ProductsProvider } from "./contexts";
import Routes from "./routes";

function App() {
	return (
		<Router>
			<ProductsProvider>
				<Navbar />
				<br />
				<div className="uk-container">
					<Routes />
				</div>
			</ProductsProvider>
		</Router>
	);
}

export default App;
