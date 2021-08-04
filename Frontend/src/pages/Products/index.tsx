import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, PageHeader } from 'antd';
import {
	PlusCircleOutlined,
} from '@ant-design/icons'

import { CreateProduct, ProductsList } from "../../components";
import { Config } from "../../configs";

const Products: React.FC = () => {

	const history = useHistory();

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const changeModal = (visible = false): void => {
		setIsModalVisible(visible);
	};

	const breadcrumb = [
		{
			path: `${Config.BASE_URL}/`,
			breadcrumbName: 'Home',
		},
		{
			path: `${Config.BASE_URL}/products`,
			breadcrumbName: 'Produtos',
		},
	];

	return (
		<>
			<PageHeader
				className="site-page-header"
				title="Produtos"
				breadcrumb={{ routes: breadcrumb }}
				subTitle="Listagem de produtos"
				extra={[
					<Button
						type="primary"
						shape="round"
						icon={<PlusCircleOutlined />}
						size="large"
						onClick={() => { changeModal(true) }}>
						Adicionar Produto
					</Button>
				]}
			/>

			<CreateProduct
				isModalVisible={isModalVisible}
				setIsModalVisible={changeModal}
			/>

			<ProductsList />
		</>
	);
};

export default Products;
