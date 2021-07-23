import React from "react";
import { Link } from "react-router-dom";

const Budgets: React.FC = () => {
	return (
		<>
			<ul className="uk-breadcrumb">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<span>Orçamentos</span>
				</li>
			</ul>
			<p>Budgets</p>
		</>
	);
};

export default Budgets;
