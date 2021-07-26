import React from "react";
import { Link } from "react-router-dom";
import { ProductsList } from "../../components";

const Products: React.FC = () => {
	return (
		<>
			<ul className="uk-breadcrumb">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<span>Produtos</span>
				</li>
			</ul>

			<nav className="uk-navbar">
				<div className="uk-navbar-right">
					<ul className="uk-navbar-nav">
						<li>
							<Link to="/products/create">
								<span uk-icon="icon: plus; ratio: 1.2"></span>{" "}
								Adicionar novo produto
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			<ProductsList />
		</>
	);
};

export default Products;
