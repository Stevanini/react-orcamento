import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Products = () => {
	return (
		<>
			<ul className="uk-breadcrumb">
				<li><Link to="/">Home</Link></li>
				<li><span>Produtos</span></li>
			</ul>

			<p>Products</p>
		</>
	);
}

export default Products;