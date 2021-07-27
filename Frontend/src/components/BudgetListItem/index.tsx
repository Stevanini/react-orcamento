import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Config } from "../../configs";

import { BudgetContextType, BudgetsContext } from "../../contexts";
import { Budget } from "../../models";

interface BudgetListItemProps {
	budget: Budget;
}

const BudgetListItem = (props: BudgetListItemProps) => {

	const history = useHistory();

	const { removeBudget } = useContext<BudgetContextType>(BudgetsContext);

	const onRemove = (budgetId: string) => {
		removeBudget(budgetId);
	};

	const onEdit = (budgetId: string) => {
		history.push(`${Config.BASE_URL}/budgets/create/${budgetId}`);
	};

	const onViewPdf = (budgetId: string) => {
		history.push(`${Config.BASE_URL}/budgets/pdf/${budgetId}`);
	};

	return (
		<tr className="uk-animation-slide-bottom-medium">
			<td className="uk-width-auto">{props.budget.client.name}</td>
			<td className="uk-width-auto">{props.budget.client.email}</td>
			<td className="uk-width-auto">{props.budget?.startDate}</td>
			<td className="uk-width-auto">{props.budget?.endDate}</td>
			<td className="uk-width-auto uk-column-1-3">
				<div>
					<button
						className="uk-icon-button uk-button-secondary"
						uk-icon="file-pdf"
						onClick={() => onViewPdf(props.budget.id)}
					></button>
				</div>
				<div>
					<button
						className="uk-icon-button uk-button-primary"
						uk-icon="file-edit"
						onClick={() => onEdit(props.budget.id)}
					></button>
				</div>
				<div>
					<button
						className="uk-icon-button uk-button-danger"
						uk-icon="trash"
						onClick={() => onRemove(props.budget.id)}
					></button>
				</div>
			</td>
		</tr>
	);
};

export default BudgetListItem;
