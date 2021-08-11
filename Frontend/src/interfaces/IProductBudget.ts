import { ProductBudgetDTO } from "../models";
import IProduct from "./IProduct";

export default interface IProductBudget extends IProduct {
	// id: string;
	// title: string;
	// description: string;
	// providerPrice: number;
	// salePrice: number;
	// discount: number;
	// active: boolean;
	quantity: number;
	toDTO: () => ProductBudgetDTO;
	calculateSubTotal: () => number;
	applyDiscount(discountPercent: number): void;
}
