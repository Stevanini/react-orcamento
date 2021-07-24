import React from "react";
import { Link } from "react-router-dom";

const AddProduct: React.FC = () => {
	return (
		<>
			<ul className="uk-breadcrumb">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products">Produtos</Link>
				</li>
				<li>
					<span>Criar produto</span>
				</li>
			</ul>

		</>
	);
};

export default AddProduct;
