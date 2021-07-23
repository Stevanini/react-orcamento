import React, { createContext, useEffect, useState } from 'react'
import { Guid, Product, ProductDTO } from '../../models';
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
		const product: Product = {
			id: Guid.newGuid(),
			active: true,
			title: dto.title,
			description: dto.description,
			discount: dto.discount,
			salePrice: dto.salePrice,
			providerPrice: dto.providerPrice
		}

		setProducts([...products, product]);
	}

	const removeProduct = (productId: string) => {
		const result = products.filter(p => p.id !== productId);
		setProducts(result);
	}

	const editProduct = (dto: Product) => {

		const idxProduct = products.findIndex(p => p.id !== dto.id);

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