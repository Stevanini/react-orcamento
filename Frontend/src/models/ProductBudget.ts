import IProductBudget from "../interfaces/IProductBudget";
import { ProductBudgetDTO } from ".";

export class ProductBudget implements IProductBudget {
	quantity: number;
	id: string;
	title: string;
	description: string;
	providerPrice: number;
	salePrice: number;
	discount: number;
	active: boolean;
	total: number;

	constructor(id: string,
		title: string,
		description: string,
		providerPrice: number,
		salePrice: number,
		discount: number,
		quantity: number) {

		Object.setPrototypeOf(this, ProductBudget.prototype);
		// Object.setPrototypeOf(this, new.target.prototype);

		this.id = id;
		this.title = title;
		this.description = description;
		this.providerPrice = providerPrice;
		this.salePrice = salePrice;
		this.discount = 0;
		this.active = true;
		this.quantity = quantity;
		this.total = 0;

		this.calculateSubTotal();
		this.applyDiscount(discount);
	}

	calculateSubTotal(): number {
		this.total = (this.salePrice * this.quantity);
		this.applyDiscount(this.discount);
		return this.total;
	};

	applyDiscount(discountPercent: number) {
		this.discount = discountPercent;
		this.total = this.total * (1 - this.discount / 100);
	}

	toDTO() {
		return {
			title: this.title,
			description: this.description,
			providerPrice: this.providerPrice,
			salePrice: this.salePrice,
			discount: this.discount,
			active: this.active,
			quantity: this.quantity
		} as ProductBudgetDTO
	}
}