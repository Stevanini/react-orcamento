import { Guid } from 'guid-ts';
import React, { createContext, useEffect, useState } from 'react'
import { Config } from '../../configs';
import { Product, ProductDTO } from '../../models';
import { getFromStorage, saveToStorage } from '../../services/localStorageService';
import { ProductContextType } from './ProductContextType';

export const ProductsContext = createContext<ProductContextType>({
	products: [],
	addProduct: () => null,
	removeProduct: () => null,
	editProduct: () => null
});


const ProductsProvider = (props: any) => {

	function prepareValues() {
		const products = getFromStorage<Product[]>(Config.PRODUCT_STORE) || [];
		const temp = [] as Product[];
		if (products) {
			products.forEach((product: Product) => {
				temp.push(new Product(
					product.id,
					product.title,
					product.description,
					product.providerPrice,
					product.salePrice,
					product.discount
				));
			});
		}
		return temp;
	}


	const [products, setProducts] = useState<Product[]>(prepareValues());

	useEffect(() => {
		saveToStorage(Config.PRODUCT_STORE, products);
	}, [products])

	const addProduct = (dto: ProductDTO) => {
		const product: Product = new Product(
			Guid.newGuid().toString(),
			dto.title,
			dto.description,
			dto.providerPrice,
			dto.salePrice,
			dto.discount
		);

		setProducts([...products, product]);
	}

	const removeProduct = (productId: string) => {
		const result = products.filter(p => p.id !== productId);
		setProducts(result);
	}

	const editProduct = (productId: string, dto: ProductDTO) => {

		const idxProduct = products.findIndex(p => p.id === productId);

		if (idxProduct !== -1) {

			products[idxProduct].active = dto.active;
			products[idxProduct].title = dto.title;
			products[idxProduct].description = dto.description;
			products[idxProduct].discount = dto.discount;
			products[idxProduct].salePrice = dto.salePrice;
			products[idxProduct].providerPrice = dto.providerPrice;

			setProducts([...products]);
		}

	}

	const data = {
		products,
		addProduct,
		removeProduct,
		editProduct
	};

	return (
		<ProductsContext.Provider value={data}>
			{props.children}
		</ProductsContext.Provider>
	);
}

export default ProductsProvider;