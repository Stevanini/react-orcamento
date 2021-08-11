import { ProductDTO } from "../models";

export default interface IBudget {
	id: string;
	title: string;
	description: string;
	providerPrice: number;
	salePrice: number;
	discount: number;
	active: boolean;
	toDTO: () => ProductDTO;
}
