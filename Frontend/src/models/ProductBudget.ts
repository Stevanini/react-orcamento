import { Product } from "./Product";

export class ProductBudget extends Product {
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public providerPrice: number,
		public salePrice: number,
		public discount: number,
		public active: boolean,
		public quantity: number
	) {
		super(
			id,
			title,
			description,
			providerPrice,
			salePrice,
			discount,
			active
		);
	}

	public calculateSubTotal() {
		return this.salePrice * this.quantity;
	}
}