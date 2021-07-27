import React from "react";
import { Link, useParams } from "react-router-dom";
import { Config } from "../../configs";

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
					<Link to={`${Config.BASE_URL}/`}>Home</Link>
				</li>
				<li>
					<Link to={`${Config.BASE_URL}/budgets`}>Orçamentos</Link>
				</li>
				<li>
					<span>{budgetId ? "Editar" : "Criar"} orçamento</span>
				</li>
			</ul>
		</>
	)
};

export default CreateBudget;
