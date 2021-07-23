import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./components";
import Routes from "./routes";

function App() {
	return (
		<Router>
			<Navbar />
			<br />
			<div className="uk-container">
				<Routes />
			</div>
		</Router>
	);
}

export default App;
