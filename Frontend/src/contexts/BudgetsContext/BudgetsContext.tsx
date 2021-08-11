import React, { createContext, useEffect, useState } from 'react'
import { Guid } from 'guid-ts';

import { BudgetContextType } from './BudgetContextType';
import { Budget, BudgetDTO, Product, ProductBudget } from '../../models';
import { getFromStorage, saveToStorage } from '../../services/localStorageService';
import { Config } from '../../configs';

export const BudgetsContext = createContext<BudgetContextType>({
	budgets: [],
	addBudget: () => null,
	removeBudget: () => null,
	editBudget: () => null,
});


const BudgetsProvider = (props: any) => {

	function prepareValues() {
		const budgetList = getFromStorage<Budget[]>(Config.BUDGET_STORE) || [];
		const temp = [] as Budget[];
		if (budgetList) {
			budgetList.forEach((budget: Budget) => {

				let tempProductBudget = [] as ProductBudget[];
				budget.products.forEach((product: ProductBudget) => {
					tempProductBudget.push(new ProductBudget(
						product.id,
						product.title,
						product.description,
						product.providerPrice,
						product.salePrice,
						product.discount,
						product.quantity,
					));
				});

				temp.push(new Budget(
					budget.id,
					budget.endDate,
					budget.client,
					tempProductBudget,
					budget.notes
				));
			});
		}
		return temp;
	}


	const [budgets, setBudgets] = useState<Budget[]>(prepareValues());

	useEffect(() => {
		saveToStorage(Config.BUDGET_STORE, budgets);
	}, [budgets])

	const addBudget = (dto: BudgetDTO) => {
		const budget: Budget = new Budget(
			Guid.newGuid().toString(),
			dto.endDate,
			dto.client,
			dto.products,
			dto.notes
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
		editBudget,
	};

	return (
		<BudgetsContext.Provider value={data}>
			{props.children}
		</BudgetsContext.Provider>
	);
}

export default BudgetsProvider;