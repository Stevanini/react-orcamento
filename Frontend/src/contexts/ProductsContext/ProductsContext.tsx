import { Guid } from 'guid-ts';
import React, { createContext, useEffect, useState } from 'react'
import { Product, ProductDTO } from '../../models';
import { getProducts, saveProducts } from '../../services/ProductsService';
import { ProductContextType } from './ProductContextType';

export const ProductsContext = createContext<ProductContextType>({
	products: [],
	addProduct: () => null,
	removeProduct: () => null,
	editProduct: () => null
});


const ProductsProvider = (props: any) => {

	const [products, setProducts] = useState<Product[]>(getProducts);

	useEffect(() => {
		saveProducts(products);
	}, [products])

	const addProduct = (dto: ProductDTO) => {
		const product: Product = new Product(
			Guid.newGuid().toString(),
			dto.title,
			dto.description,
			dto.providerPrice,
			dto.salePrice,
			dto.discount,
			true
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