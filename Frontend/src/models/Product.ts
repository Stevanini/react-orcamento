import IProduct from '../interfaces/IProduct';
import { ProductDTO } from './DTOs/ProductDTO';

export class Product implements IProduct {
	id: string;
	title: string;
	description: string;
	providerPrice: number;
	salePrice: number;
	discount: number;
	active: boolean;

	constructor(id: string,
		title: string,
		description: string,
		providerPrice: number,
		salePrice: number,
		discount: number) {
		Object.setPrototypeOf(this, Product.prototype);

		this.id = id;
		this.title = title;
		this.description = description;
		this.providerPrice = providerPrice;
		this.salePrice = salePrice;
		this.discount = discount;
		this.active = true;
	}

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
