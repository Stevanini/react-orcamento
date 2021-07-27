import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Config } from "../../configs";

import { ProductContextType, ProductsContext } from "../../contexts";
import { Product } from "../../models";

interface ProductListItemProps {
	product: Product;
}

const ProductListItem = (props: ProductListItemProps) => {

	const history = useHistory();

	const { removeProduct } = useContext<ProductContextType>(ProductsContext);

	const onRemove = (productId: string) => {
		removeProduct(productId);
	};

	const onEdit = (productId: string) => {
		history.push(`${Config.BASE_URL}/products/create/${productId}`);
	};

	return (
		<tr className="uk-animation-slide-bottom-medium">
			<td className="uk-width-auto">{props.product.title}</td>
			<td className="uk-width-auto">{props.product.description}</td>
			<td className="uk-width-auto">R$ {props.product.salePrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
			<td className="uk-width-auto uk-column-1-2">
				<div>
					<button
						className="uk-icon-button uk-button-primary"
						uk-icon="file-edit"
						onClick={() => onEdit(props.product.id)}
					></button>
				</div>
				<div>
					<button
						className="uk-icon-button uk-button-danger"
						uk-icon="trash"
						onClick={() => onRemove(props.product.id)}
					></button>
				</div>
			</td>
		</tr>
	);
};

export default ProductListItem;
