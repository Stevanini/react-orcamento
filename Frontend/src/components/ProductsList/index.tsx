import React, { useContext } from "react";

import ProductListItem from "../ProductListItem";

import { ProductsContext, ProductContextType } from "../../contexts";

const ProductsList = () => {
	const { products } = useContext<ProductContextType>(ProductsContext);

	console.log(products);
	
	return (
		<table className="uk-table">
			<caption>Lista de produtos</caption>
			<thead>
				<tr>
					<th>Nome</th>
					<th>Descrição</th>
					<th>Preço</th>
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>
				{products?.map((product) => (
					<ProductListItem
						key={product.id.toString()}
						product={product}
					></ProductListItem>
				))}
			</tbody>
		</table>
	);
};

export default ProductsList;
