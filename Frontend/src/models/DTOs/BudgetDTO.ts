import { Client } from "../Client";
import { ProductBudget } from "../ProductBudget";

export class BudgetDTO {
	constructor(
		public startDate: Date,
		public endDate: Date,
		public client: Client,
		public products: ProductBudget[],
		public notes: string,
		public discount: number,
		public total: number
	) { }
}