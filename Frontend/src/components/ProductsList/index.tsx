import React, { useContext } from "react";
import { Table, Button, Space } from 'antd';
import {
	EditOutlined,
	DeleteOutlined,
} from '@ant-design/icons';

import { ProductsContext, ProductContextType } from "../../contexts";
import { Config } from "../../configs";
import { useHistory } from "react-router-dom";
import { Product } from "../../models";

const ProductsList = () => {
	const { products } = useContext<ProductContextType>(ProductsContext);

	const history = useHistory();

	const { removeProduct } = useContext<ProductContextType>(ProductsContext);

	const onRemove = (productId: string) => {
		removeProduct(productId);
	};

	const onEdit = (productId: string) => {
		history.push(`${Config.BASE_URL}/products/create/${productId}`);
	};

	const columns = [
		{
			title: 'Nome',
			dataIndex: 'title',
		},
		{
			title: 'Descrição',
			dataIndex: 'description',
		},
		{
			title: 'Preço de venda',
			dataIndex: 'salePrice',
			render: (price: number) => <span>R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>,
		},
		{
			title: 'Ações',
			key: 'action',
			render: (_: any, record: Product) => (
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
						onClick={() => onRemove(record.id)} />
				</Space>
			)
		}
	];

	return (
		<Table
			dataSource={products}
			columns={columns}
		/>
	);
};

export default ProductsList;
