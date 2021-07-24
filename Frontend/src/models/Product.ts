import { ProductDTO } from './DTOs/ProductDTO';
interface IProduct {
	toDTO: () => ProductDTO;
}
export class Product implements IProduct {
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public providerPrice: number,
		public salePrice: number,
		public discount: number,
		public active: boolean
	) { }

	toDTO() {
		return {
			title: this.title,
			description: this.description,
			providerPrice: this.providerPrice,
			salePrice: this.salePrice,
			discount: this.discount,
			active: this.active
		} as ProductDTO
	}

}
