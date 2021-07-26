import React, { useContext } from "react";

import BudgetListItem from "../BudgetListItem";

import { BudgetsContext, BudgetContextType } from "../../contexts";

const BudgetsList = () => {
	const { budgets } = useContext<BudgetContextType>(BudgetsContext);

	return (
		<table className="uk-table">
			<caption>Lista de orçamentos</caption>
			<thead>
				<tr>
					<th>Cliente</th>
					<th>Email do cliente</th>
					<th>Data do orçamento</th>
					<th>Válido até</th>
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>
				{budgets?.map((budget) => (
					<BudgetListItem
						key={budget.id.toString()}
						budget={budget}
					></BudgetListItem>
				))}
			</tbody>
		</table>
	);
};

export default BudgetsList;
