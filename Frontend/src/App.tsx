import React, { useState } from "react";
import { Router } from "react-router-dom";
import history from "./routes/history";
import { Navbar } from "./components";
import { BudgetsProvider, ProductsProvider } from "./contexts";
import Routes from "./routes";

import "./styles.css";

import { Layout } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined
} from '@ant-design/icons';

const { Header, Content } = Layout;

function App() {
	const [collapse, setCollapse] = useState(false);

	return (
		<Router history={history}>
			<BudgetsProvider>
				<ProductsProvider>

					<Layout>
						<Navbar collapse={collapse} />
						<Layout className="site-layout">
							<Header className="site-layout-background" style={{ padding: 0 }}>
								{React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
									className: 'trigger',
									onClick: () => { setCollapse(!collapse); }
								})}
							</Header>
							<Content
								className="site-layout-background"
								style={{
									margin: '24px 16px',
									padding: 24,
									minHeight: 280,
								}}
							>
								<Routes />
							</Content>
						</Layout>
					</Layout>

				</ProductsProvider>
			</BudgetsProvider>
		</Router >
	);
}

export default App;
