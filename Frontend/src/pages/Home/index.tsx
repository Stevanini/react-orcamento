import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<div className="uk-grid-column-small uk-grid-row-large">
			<Link to="/products">
				<div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
					<h3 className="uk-card-title">Produtos</h3>
					<p>
						Criar e listar os produtos para adicionar nos orçamentos
					</p>
				</div>
			</Link>

			<Link to="/budgets">
				<div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
					<h3 className="uk-card-title">Orçamentos</h3>
					<p>Criar e listar os orçamentos dos clientes</p>
				</div>
			</Link>
		</div>
	);
};

export default Home;
