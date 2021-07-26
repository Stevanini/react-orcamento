import React, { createContext, useEffect, useState } from 'react'
import { Guid } from 'guid-ts';

import { BudgetContextType } from './BudgetContextType';
import { Budget, BudgetDTO, Client } from '../../models';
import { getBudgets, saveBudgets } from '../../services/BudgetsService';

export const BudgetsContext = createContext<BudgetContextType>({
	budgets: [],
	addBudget: () => null,
	removeBudget: () => null,
	editBudget: () => null
});


const BudgetsProvider = (props: any) => {
	
	const [budgets, setBudgets] = useState<Budget[]>(getBudgets);

	useEffect(() => {
		saveBudgets(budgets);
	}, [budgets])

	const addBudget = (dto: BudgetDTO) => {
		const budget: Budget = new Budget(
			Guid.newGuid().toString(),
			dto.startDate,
			dto.endDate,
			dto.client,
			dto.products,
			dto.notes,
			dto.discount,
			dto.total
		);

		setBudgets([...budgets, budget]);
	}

	const removeBudget = (budgetId: string) => {
		const result = budgets.filter(p => p.id !== budgetId);
		setBudgets(result);
	}

	const editBudget = (budgetId: string, dto: BudgetDTO) => {

		const idxBudget = budgets.findIndex(p => p.id === budgetId);

		if (idxBudget !== -1) {

			budgets[idxBudget].startDate = dto.startDate;
			budgets[idxBudget].endDate = dto.endDate;
			budgets[idxBudget].client = dto.client;
			budgets[idxBudget].discount = dto.discount;
			budgets[idxBudget].notes = dto.notes;
			budgets[idxBudget].products = dto.products;
			budgets[idxBudget].total = dto.total;

			setBudgets([...budgets]);
		}

	}

	const data = {
		budgets,
		addBudget,
		removeBudget,
		editBudget
	};

	return (
		<BudgetsContext.Provider value={data}>
			{props.children}
		</BudgetsContext.Provider>
	);
}

export default BudgetsProvider;