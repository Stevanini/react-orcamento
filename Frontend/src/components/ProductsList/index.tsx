import React, { useContext } from "react";
import { Modal, Table, Button, Space } from 'antd';
import {
	EditOutlined,
	DeleteOutlined,
	ExclamationCircleOutlined,
} from '@ant-design/icons';

import { ProductsContext, ProductContextType } from "../../contexts";
import { Config } from "../../configs";
import { useHistory } from "react-router-dom";
import { Product } from "../../models";

const { confirm } = Modal;

interface ProductListProps {
	setProductId: (id: string) => void;
}

const ProductsList: React.FC<ProductListProps> = (props) => {
	const { setProductId } = props;

	const { products } = useContext<ProductContextType>(ProductsContext);

	const history = useHistory();

	const { removeProduct } = useContext<ProductContextType>(ProductsContext);

	const onRemove = (product: Product) => {
		confirm({
			title: `Tem ceteza que você quer remover o produto ${product.title}?`,
			icon: <ExclamationCircleOutlined />,
			content: 'Remova só se tiver certeza.',
			okText: 'Sim',
			okType: 'danger',
			cancelText: 'Não',
			onOk() {
				removeProduct(product.id);
			},
			onCancel() {
			},
		});
	};

	const onEdit = (productId: string) => {
		setProductId(productId);
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
						danger
						onClick={() => onRemove(record)} />
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
