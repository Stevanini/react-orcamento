import React from "react";
import { Layout, Menu } from 'antd';

import {
	DashboardOutlined,
	ExceptionOutlined,
	ShoppingOutlined
} from '@ant-design/icons';

import { Link } from "react-router-dom";

import './styles.css';
import { Config } from "../../configs";

const { Sider } = Layout;

const Navbar = (props: any) => {

	return (
		<Sider trigger={null} collapsible collapsed={props.collapse}>
			<Link to={`${Config.BASE_URL}/`}>
				<h4 className={!props.collapse ? 'logo' : 'logo-collapse'}>Gerenciador de Orçamento</h4>
			</Link>
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
				<Menu.Item key="1" icon={<DashboardOutlined />}>
					<Link to={`${Config.BASE_URL}/`}>Home</Link>
				</Menu.Item>
				<Menu.Item key="2" icon={<ExceptionOutlined />}>
					<Link to={`${Config.BASE_URL}/clients`}>Clientes</Link>
				</Menu.Item>
				<Menu.Item key="3" icon={<ShoppingOutlined />}>
					<Link to={`${Config.BASE_URL}/products`}>Produtos</Link>
				</Menu.Item>
				<Menu.Item key="4" icon={<ExceptionOutlined />}>
					<Link to={`${Config.BASE_URL}/budgets`}>Orçamentos</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default Navbar;
