import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, PageHeader } from 'antd';
import {
	PlusCircleOutlined,
} from '@ant-design/icons'

import { ClientsList, CreateClient } from "../../components";
import { Config } from "../../configs";

const Clients: React.FC = () => {

	const history = useHistory();

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [budgetId, setClientId] = useState<string>("");

	const changeModal = (visible = false): void => {
		setIsModalVisible(visible);
	};

	const changeClientId = (id: string): void => {
		setClientId(id)
		changeModal(true);
	};

	const breadcrumb = [
		{
			path: `${Config.BASE_URL}/`,
			breadcrumbName: 'Home',
		},
		{
			path: `${Config.BASE_URL}/clients`,
			breadcrumbName: 'Clientes',
		},
	];

	return (
		<>
			<PageHeader
				className="site-page-header"
				title="Clientes"
				breadcrumb={{ routes: breadcrumb }}
				subTitle="Listagem de cliente"
				extra={[
					<Button
						type="primary"
						shape="round"
						icon={<PlusCircleOutlined />}
						size="large"
						onClick={() => {
							setClientId("");
							changeModal(true)
						}}>
						Adicionar cliente
					</Button>
				]}
			/>

			<CreateClient
				clientId={budgetId}
				isModalVisible={isModalVisible}
				setIsModalVisible={changeModal}
			/>

			{/* 
			<ClientsList
				setClientId={changeClientId}
			/> */}
		</>
	);
};

export default Clients;
