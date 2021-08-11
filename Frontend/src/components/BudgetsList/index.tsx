import React, { useContext } from "react";
import { Modal, Table, Button, Space } from 'antd';
import {
	EditOutlined,
	DeleteOutlined,
	ExclamationCircleOutlined,
	FilePdfOutlined,
} from '@ant-design/icons';

import { Budget } from "../../models";
import { BudgetsContext, BudgetContextType } from "../../contexts";
import { useHistory } from "react-router-dom";
import { Config } from "../../configs";

interface BudgetListProps {
	setBudgetId: (id: string) => void;
}

const { confirm } = Modal;

const BudgetsList: React.FC<BudgetListProps> = (props) => {
	const history = useHistory();

	const { setBudgetId } = props;
	const { budgets, removeBudget } = useContext<BudgetContextType>(BudgetsContext);

	const onRemove = (budget: Budget) => {
		confirm({
			title: `Tem ceteza que você quer remover esse orçamento?`,
			icon: <ExclamationCircleOutlined />,
			content: 'Remova só se tiver certeza.',
			okText: 'Sim',
			okType: 'danger',
			cancelText: 'Não',
			onOk() {
				removeBudget(budget.id);
			},
			onCancel() { }
		});
	};

	const onEdit = (budgetId: string) => {
		setBudgetId(budgetId);
	};

	const onSendPdf = (budgetId: string) => {
		history.push(`${Config.BASE_URL}/budgets/pdf/${budgetId}`);
	};

	const columns = [
		{
			title: 'Cliente',
			render: (_: any, record: Budget) =>
				<span>{record.client.name}</span>,
		},
		{
			title: 'email',
			render: (_: any, record: Budget) =>
				<span>{record.client.email}</span>,
		},
		{
			title: 'Data criação',
			render: (_: any, record: Budget) =>
				<span>{new Date(record.startDate).toLocaleDateString("pt-BR")}</span>,
		},
		{
			title: 'Data validade',
			render: (_: any, record: Budget) =>
				<span>{new Date(record.endDate).toLocaleDateString("pt-BR")}</span>,
		},
		{
			title: 'Quantidade de produtos',
			render: (_: any, record: Budget) =>
				<span>{record.products.length}</span>,
		},
		{
			title: 'Total',
			render: (_: any, record: Budget) =>
				<span>R$ {record.calculateTotal().toLocaleString("pt-BR")}</span>,
		},
		{
			title: 'Ações',
			key: 'action',
			render: (_: any, record: Budget) => (
				<Space size="middle">
					<Button
						type="ghost"
						shape="circle"
						icon={<FilePdfOutlined />}
						size="middle"
						onClick={() => onSendPdf(record.id)} />
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
			dataSource={budgets}
			columns={columns}
		/>
	);
};

export default BudgetsList;
