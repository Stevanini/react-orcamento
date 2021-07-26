import React from "react";
import { Link } from "react-router-dom";
import { BudgetsList } from "../../components";

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

			<nav className="uk-navbar">
				<div className="uk-navbar-right">
					<ul className="uk-navbar-nav">
						<li>
							<Link to="/budgets/create">
								<span uk-icon="icon: plus; ratio: 1.2"></span>{" "}
								Adicionar novo orçamento
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			<BudgetsList />
		</>
	);
};

export default Budgets;
