import React from "react";
import { Product } from "../../models";
import ProductListItem from "../ProductListItem";

const ProductsList = () => {
	const p: Product[] = [
		{
			id: 65,
			description: "asd",
			active: false,
			title: "title",
			discount: 65,
			salePrice: 54,
			providerPrice: 54,
		},
	];
	const { products } = { products: p };

	return (
		<table className="uk-table">
			<caption>Lista de produtos</caption>
			<thead>
				<tr>
					<th>#</th>
					<th>Nome</th>
					<th>Descrição</th>
					<th>Preço</th>
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>
				{products?.map((product) => (
					<ProductListItem
						key={product.id}
						product={product}
					></ProductListItem>
				))}
			</tbody>
		</table>
	);
};

export default ProductsList;
