import React, { useState } from "react";
import { Router } from "react-router-dom";
import history from "./routes/history";
import { Navbar } from "./components";
import { BudgetsProvider, ClientsProvider, ProductsProvider } from "./contexts";
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
			<ClientsProvider>
				<BudgetsProvider>
					<ProductsProvider>

						<Layout>
							<Navbar collapse={collapse} />
							<Layout style={{ minHeight: '100vh' }}>
								<Header style={{ padding: 0, background: "#fff" }}>
									{React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
										className: 'trigger',
										onClick: () => { setCollapse(!collapse); }
									})}
								</Header>
								<Content
									style={{
										margin: '24px 16px',
										padding: 24,
										minHeight: 280,
										background: "#fff",
									}}
								>
									<Routes />
								</Content>
							</Layout>
						</Layout>

					</ProductsProvider>
				</BudgetsProvider>
			</ClientsProvider>
		</Router >
	);
}

export default App;
