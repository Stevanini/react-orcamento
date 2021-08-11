import IBudget from "../interfaces/IBudget";
import { Client } from "./Client";
import { ProductBudget } from "./ProductBudget";

export class Budget implements IBudget {
	id: string;
	startDate: Date;
	endDate: Date;
	client: Client;
	products: ProductBudget[];
	notes: string;
	discount = 0;;
	total = 0;

	constructor(
		id: string,
		endDate: Date,
		client: Client,
		products: ProductBudget[],
		notes: string) {

		Object.setPrototypeOf(this, Budget.prototype);

		this.id = id;
		this.startDate = new Date();
		this.endDate = endDate;
		this.client = client;
		this.products = products;
		this.notes = notes;
		this.discount = 0;

		this.calculateTotal();
	}

	calculateSubTotal() {
		var calculate = 0;
		this.products.forEach(function (p: ProductBudget) {
			calculate += p.total;
		});
		this.total = calculate;
		return this.total;
	}

	applyDiscount(discountPercent: number) {
		if (!isNaN(discountPercent)) {
			this.discount = discountPercent;
			this.total = this.total * (1 - discountPercent / 100);
		} else {
			alert('Não é um numero: ' + discountPercent);
		}
	}

	calculateTotal() {
		this.calculateSubTotal();
		this.applyDiscount(this.discount);
		return this.total;
	}
}