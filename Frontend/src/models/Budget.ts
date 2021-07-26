import { Client } from "./Client";
import { ProductBudget } from './ProductBudget';

export class Budget {
	constructor(
		public id: string,
		public startDate: Date,
		public endDate: Date,
		public client: Client,
		public products: ProductBudget[],
		public notes: string,
		public discount: number,
		public total: number
	) { }

	public calculateSubTotal() {
		var calculate = 0;
		this.products.forEach(function (p: ProductBudget) {
			calculate += (p.salePrice * p.quantity);
		});
		this.total = calculate;
	}

	public applyDiscount(discountPercent: number) {
		this.discount = discountPercent;
		this.total = this.total * (1 - discountPercent / 100);
	}

	public calculateTotal() {
		this.calculateSubTotal();
		this.applyDiscount(this.discount);
	}
}