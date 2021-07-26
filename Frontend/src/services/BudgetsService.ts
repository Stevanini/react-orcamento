import { Budget } from '../models';

const BUDGET_STORE = 'BUDGET_STORE';

export const getBudgets = (): Budget[] => {
	const data = localStorage.getItem(BUDGET_STORE) || '';
	try {
		const temp = JSON.parse(data) as Budget[];
		let result: Budget[] = [];
		for (let b of temp) {
			result.push(new Budget(
				b.id,
				b.startDate,
				b.endDate,
				b.client,
				b.products,
				b.notes,
				b.discount,
				b.total,
			));
		}
		return result;
	} catch {
		return [];
	}
}

export const saveBudgets = (data: Budget[]) => {
	if (data?.length > 0) {
		localStorage.setItem(BUDGET_STORE, JSON.stringify(data));
	}
}