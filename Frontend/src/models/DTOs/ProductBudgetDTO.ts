export class ProductBudgetDTO {
	constructor(
		public title: string,
		public description: string,
		public providerPrice: number,
		public salePrice: number,
		public discount: number,
		public active: boolean,
		public quantity: number,
	) { }
}
