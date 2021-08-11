import React, { useContext } from "react";
import { Modal, Table, Button, Space } from 'antd';
import {
	EditOutlined,
	DeleteOutlined,
	ExclamationCircleOutlined,
} from '@ant-design/icons';

import { Client } from "../../models";
import { ClientContextType, ClientsContext } from "../../contexts";

interface ClientListProps {
	setClientId: (id: string) => void;
}

const { confirm } = Modal;

const ClientsList: React.FC<ClientListProps> = (props) => {
	const { setClientId } = props;
	const { clients, removeClient } = useContext<ClientContextType>(ClientsContext);

	const onRemove = (client: Client) => {
		confirm({
			title: `Tem ceteza que você quer remover esse cliente?`,
			icon: <ExclamationCircleOutlined />,
			content: 'Remova só se tiver certeza.',
			okText: 'Sim',
			okType: 'danger',
			cancelText: 'Não',
			onOk() {
				removeClient(client.id);
			},
			onCancel() { }
		});
	};

	const onEdit = (clientId: string) => {
		setClientId(clientId);
	};

	const columns = [
		{
			title: 'Cliente',
			render: (_: any, record: Client) =>
				<span>{record.name}</span>,
		},
		{
			title: 'E-mail',
			render: (_: any, record: Client) =>
				<span>{record.email}</span>,
		},
		{
			title: 'Endereço',
			render: (_: any, record: Client) =>
				<span>{record.address}</span>,
		},
		{
			title: 'Cidade',
			render: (_: any, record: Client) =>
				<span>{record.city}</span>,
		},
		{
			title: 'Ações',
			key: 'action',
			render: (_: any, record: Client) => (
				<Space size="middle">
					<Button
						type="primary"
						shape="circle"
						icon={<EditOutlined />}
						size="middle"
						onClick={() => onEdit(record.id)} />
					<Button
						type="primary"
						shape="circle"
						icon={<DeleteOutlined />}
						size="middle"
						danger
						onClick={() => onRemove(record)} />
				</Space>
			)
		}
	];

	return (
		<Table
			dataSource={clients}
			columns={columns}
		/>
	);
};

export default ClientsList;
