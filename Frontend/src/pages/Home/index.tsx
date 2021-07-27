import React from "react";
import { Link } from "react-router-dom";
import { Config } from "../../configs";

const Home: React.FC = () => {
	return (
		<div className="uk-grid-column-small uk-grid-row-large">
			<Link to={`${Config.BASE_URL}/products`}>
				<div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
					<h3 className="uk-card-title">Produtos</h3>
					<p>
						Criar e listar os produtos para adicionar nos orçamentos
					</p>
				</div>
			</Link>

			<Link to={`${Config.BASE_URL}/budgets`}>
				<div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
					<h3 className="uk-card-title">Orçamentos</h3>
					<p>Criar e listar os orçamentos dos clientes</p>
				</div>
			</Link>
		</div>
	);
};

export default Home;
