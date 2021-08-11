import IClient from "./IClient";
import IProductBudget from "./IProductBudget";

export default interface IBudget {
	id: string;
	startDate: Date;
	endDate: Date;
	client: IClient;
	products: IProductBudget[];
	notes: string;
	discount: number;
	total: number;

	calculateSubTotal: () => number;
	applyDiscount: (discountPercent: number) => void;
	calculateTotal: () => number;
}
