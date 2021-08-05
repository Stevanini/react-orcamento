import React, { useContext, useEffect } from "react";
import { Button, Form, Input, Modal, Row, Space } from "antd";

import { ProductContextType, ProductsContext } from "../../contexts";
import { Product, ProductDTO } from "../../models";

interface AddProductForm {
	title: string;
	description: string;
	salePrice: number;
	providerPrice: number;
	discount: number;
}

interface CreateProductProps {
	productId?: string;
	isModalVisible: boolean;
	setIsModalVisible: (visible: boolean) => void;
}

const CreateProduct: React.FC<CreateProductProps> = ({ productId, isModalVisible, setIsModalVisible }) => {

	const { products, addProduct, editProduct } = useContext<ProductContextType>(ProductsContext);

	const [form] = Form.useForm();

	useEffect(() => {
		form.setFieldsValue({
			title: '',
			description: '',
			salePrice: 0,
			providerPrice: 0,
			discount: 0,
		} as Product);

		form.setFieldsValue(prepareInitialValues());
	}, [productId]);

	const prepareInitialValues = (): Product => {
		const productBase = products.find(p => p.id === productId);

		if (productBase) {
			return {
				title: productBase.title,
				description: productBase.description,
				salePrice: productBase.salePrice,
				providerPrice: productBase.providerPrice,
				discount: productBase.discount,
			} as Product;
		}

		return {} as Product;
	}

	const onFinish = (data: AddProductForm): void => {

		const newPproduct: ProductDTO = {
			title: data.title,
			description: data.description,
			salePrice: data.salePrice,
			providerPrice: data.providerPrice,
			discount: data.discount,
			active: true,
		}

		if (productId) {
			editProduct(productId, newPproduct);
		} else {
			addProduct(newPproduct);
		}

		setIsModalVisible(false);
		form.resetFields();
	}


	const validateMessages = {
		required: '${label} is required!',
		types: {
			email: '${label} is not a valid email!',
			number: '${label} is not a valid number!',
		},
		number: {
			range: '${label} must be between ${min} and ${max}',
		},
	};

	return (
		<Modal
			title={productId ? "Editar Produto" : "Criar Produto"}
			visible={isModalVisible}
			footer={null}
			onCancel={() => { setIsModalVisible(false) }}
		>

			<Form
				form={form}
				name="form-create-edit-product"
				layout="vertical"
				onFinish={onFinish}
				initialValues={prepareInitialValues()}
				validateMessages={validateMessages}
			>
				<Form.Item
					label="Título do produto"
					name="title"
					rules={[
						{ required: true, message: "Título é obrigatório" },
						{ min: 5, max: 30, message: "Título deve ter entre 5 e 30 caracteres" },
					]}
				>
					<Input placeholder="Nome do produto" />
				</Form.Item>

				<Form.Item
					label="Descrição do produt"
					name="description"
					rules={[
						{ required: true, message: "A descrição é obrigatória" },
						{ min: 5, max: 80, message: "A descrição deve ter entre 5 e 80 caracteres" },
					]}
				>
					<Input placeholder="Breve descrição do produto" />
				</Form.Item>


				<Row>
					<Space>

						<Form.Item
							label="Preço de CUSTO do produto"
							name="providerPrice"
							rules={[
								{ required: true, message: "O preço é obrigatório" }
							]}
						>
							<Input
								type="number"
								addonBefore="R$"
								placeholder="Preço de custo do produto"
								step="0.01"
								min={0}
							/>
						</Form.Item>

						<Form.Item
							label="Preço de VENDA do produto"
							name="salePrice"
							rules={[
								{ required: true, message: "O preço de venda do produto é obrigatório" }
							]}
						>
							<Input
								type="number"
								addonBefore="R$"
								placeholder="Preço de venda do produto"
								step="0.01"
								min={0}
							/>
						</Form.Item>
					</Space>
				</Row>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						{productId ? "Editar" : "Salvar"}
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default CreateProduct;
