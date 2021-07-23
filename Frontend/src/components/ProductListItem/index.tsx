import React from "react";
import { Product } from "../../models";

interface ProductListItemProps {
	product: Product;
}

const ProductListItem = (props: ProductListItemProps) => {
	const onRemove = (product: Product) => {
		console.log(product);
	};

	const onEdit = (product: Product) => {
		console.log(product);
	};

	return (
		<tr className="uk-animation-slide-bottom-medium">
			<td className="uk-width-auto">{props.product.id}</td>
			<td className="uk-width-auto">{props.product.title}</td>
			<td className="uk-width-auto">{props.product.description}</td>
			<td className="uk-width-auto">{props.product.salePrice}</td>
			<td className="uk-width-auto uk-column-1-2">
				<div>
					<button
						className="uk-icon-button uk-button-primary"
						uk-icon="file-edit"
						onClick={() => onEdit(props.product)}
					></button>
				</div>
				<div>
					<button
						className="uk-icon-button uk-button-danger"
						uk-icon="trash"
						onClick={() => onRemove(props.product)}
					></button>
				</div>
			</td>
		</tr>
	);
};

export default ProductListItem;
