export class ProductDTO {
	constructor(
		public title: string,
		public description: string,
		public providerPrice: number,
		public salePrice: number,
		public discount: number,
		public active: boolean
	) { }
}
