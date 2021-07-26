import React from "react";
import { Link, useParams } from "react-router-dom";

interface AddBudgetParams {
	budgetId: string;
}

const CreateBudget = () => {

	let { budgetId } = useParams<AddBudgetParams>();
	console.log(budgetId);

	return (
		<>
			<ul className="uk-breadcrumb">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/budgets">Orçamentos</Link>
				</li>
				<li>
					<span>{budgetId ? "Editar" : "Criar"} orçamento</span>
				</li>
			</ul>
		</>
	)
};

export default CreateBudget;
