export class Product {
	constructor(
		public id: number,
		public title: string,
		public description: string,
		public providerPrice: number,
		public salePrice: number,
		public discount: number,
		public active: boolean) {

	}
}