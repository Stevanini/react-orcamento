import { Product, ProductDTO } from "../../models";

export interface ProductContextType {
	products: Product[];
	addProduct: (product: ProductDTO) => void;
	removeProduct: (productId: string) => void;
	editProduct: (productId: string, product: ProductDTO) => void;
}