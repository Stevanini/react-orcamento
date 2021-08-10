import React, { useState } from "react";
import { Button, PageHeader } from 'antd';
import {
	PlusCircleOutlined,
} from '@ant-design/icons'

import { BudgetsList, CreateBudget } from "../../components";
import { Config } from "../../configs";

const Budgets: React.FC = () => {

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [budgetId, setBudgetId] = useState<string>("");

	const changeModal = (visible = false): void => {
		setIsModalVisible(visible);
	};

	const changeBudgetId = (id: string): void => {
		setBudgetId(id)
		changeModal(true);
	};

	const breadcrumb = [
		{
			path: `${Config.BASE_URL}/`,
			breadcrumbName: 'Home',
		},
		{
			path: `${Config.BASE_URL}/budgets`,
			breadcrumbName: 'Orçamentos',
		},
	];

	return (
		<>
			<PageHeader
				className="site-page-header"
				title="Orçamentos"
				breadcrumb={{ routes: breadcrumb }}
				subTitle="Listagem de produtos"
				extra={[
					<Button
						type="primary"
						shape="round"
						icon={<PlusCircleOutlined />}
						size="large"
						onClick={() => {
							setBudgetId("");
							changeModal(true)
						}}>
						Adicionar Orçamento
					</Button>
				]}
			/>

			<CreateBudget
				budgetId={budgetId}
				isModalVisible={isModalVisible}
				setIsModalVisible={changeModal}
			/>

			<BudgetsList
				setBudgetId={changeBudgetId}
			/>
		</>
	);
};

export default Budgets;
