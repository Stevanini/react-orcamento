import { Budget, BudgetDTO, Client, ClientDTO } from "../../models";

export interface BudgetContextType {
	budgets: Budget[];
	addBudget: (dto: BudgetDTO) => void;
	removeBudget: (budgetId: string) => void;
	editBudget: (budgetId: string, dto: BudgetDTO) => void;

	clients: Client[];
	addClient: (dto: ClientDTO) => void;
	removeClient: (clientId: string) => void;
	editClient: (clientId: string, dto: ClientDTO) => void;
}