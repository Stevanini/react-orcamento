import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Navbar = () => {
	return (
		<div className="uk-background-primary ">
			<div className="uk-container">
				<nav className="uk-navbar">
					<div className="uk-navbar-left">
						<Link to="/" className="uk-navbar-item uk-text-decoration-none uk-logo ro-white">Gereciador de Orçamentos</Link>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Navbar;