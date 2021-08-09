import React, { createContext, useEffect, useState } from 'react'
import { Guid } from 'guid-ts';

import { BudgetContextType } from './BudgetContextType';
import { Budget, BudgetDTO, Client, ClientDTO } from '../../models';
import { getBudgets, saveBudgets } from '../../services/BudgetsService';
import { getClients, saveClients } from '../../services/ClientService';

export const BudgetsContext = createContext<BudgetContextType>({
	budgets: [],
	addBudget: () => null,
	removeBudget: () => null,
	editBudget: () => null,

	clients: [],
	addClient: () => null,
	removeClient: () => null,
	editClient: () => null,
});


const BudgetsProvider = (props: any) => {

	const [budgets, setBudgets] = useState<Budget[]>(getBudgets);
	const [clients, setClients] = useState<Client[]>(getClients);

	useEffect(() => {
		saveClients(clients);
	}, [clients])

	useEffect(() => {
		saveBudgets(budgets);
	}, [budgets])

	//#region Budget
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
	//#endregion

	//#region Clients
	const addClient = (dto: ClientDTO) => {
		const client: Client = new Client(
			Guid.newGuid().toString(),
			dto.name,
			dto.address,
			dto.city,
			dto.email
		);

		setClients([...clients, client]);
	}

	const removeClient = (clientId: string) => {
		const result = clients.filter(p => p.id !== clientId);
		setClients(result);
	}

	const editClient = (clientId: string, dto: ClientDTO) => {

		const idxClient = clients.findIndex(p => p.id === clientId);

		if (idxClient !== -1) {

			clients[idxClient].name = dto.name;
			clients[idxClient].address = dto.address;
			clients[idxClient].city = dto.city;
			clients[idxClient].email = dto.email;

			setClients([...clients]);
		}

	}
	//#endregion

	const data = {
		budgets,
		addBudget,
		removeBudget,
		editBudget,

		clients,
		addClient,
		removeClient,
		editClient,
	};

	return (
		<BudgetsContext.Provider value={data}>
			{props.children}
		</BudgetsContext.Provider>
	);
}

export default BudgetsProvider;