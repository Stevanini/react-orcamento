import { Budget, BudgetDTO } from "../../models";

export interface BudgetContextType {
	budgets: Budget[];
	addBudget: (dto: BudgetDTO) => void;
	removeBudget: (budgetId: string) => void;
	editBudget: (budgetId: string, dto: BudgetDTO) => void;
}