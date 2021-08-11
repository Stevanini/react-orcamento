import React, { useContext, useEffect, useState } from "react";
import { Button, Form, InputNumber, Modal, Select, Space, Table } from "antd";
import {
	DeleteOutlined,
	ExclamationCircleOutlined,
} from '@ant-design/icons';

import { BudgetContextType, BudgetsContext, ClientContextType, ClientsContext, ProductContextType, ProductsContext } from "../../contexts";
import { Budget, BudgetDTO, Client, ProductBudget } from "../../models";
import TextArea from "antd/lib/input/TextArea";

interface AddBudgetForm {
	id: string;
	clientId: string;
	discount: number;
	endDate: Date;
	startDate: Date;
	notes: string;
	products: ProductBudget[];
	total: number;
}

interface CreateBudgetProps {
	budgetId?: string;
	isModalVisible: boolean;
	setIsModalVisible: (visible: boolean) => void;
}

const { Option } = Select;
const { confirm } = Modal;

const CreateBudget: React.FC<CreateBudgetProps> = ({ budgetId, isModalVisible, setIsModalVisible }) => {

	const { products } = useContext<ProductContextType>(ProductsContext);
	const { budgets, editBudget, addBudget } = useContext<BudgetContextType>(BudgetsContext);
	const { clients } = useContext<ClientContextType>(ClientsContext);

	const [productBudget, setProductBudget] = useState<ProductBudget>({} as ProductBudget);
	const [listProductsBudget, setListProductsBudget] = useState<ProductBudget[]>([])

	const [form] = Form.useForm();

	useEffect(() => {
		clearFormModal();

		const budgetBase = budgets.find(c => c.id === budgetId) || {} as Budget;
		if (budgetId && budgetBase) {
			setListProductsBudget(budgetBase.products);
		}

		form.setFieldsValue(prepareInitialValues());
	}, [budgetId, isModalVisible]);

	const prepareInitialValues = (): AddBudgetForm => {
		const budgetBase = budgets.find(p => p.id === budgetId);

		if (budgetBase) {
			return {
				id: budgetId,
				clientId: budgetBase.client.id,
				discount: budgetBase.discount,
				endDate: budgetBase.endDate,
				startDate: budgetBase.startDate,
				notes: budgetBase.notes
			} as AddBudgetForm;

		}

		return {
			id: "",
			clientId: "",
			discount: 0,
			startDate: new Date(),
			endDate: new Date(),
			notes: ""
		} as AddBudgetForm;
	}

	const onFinish = (data: AddBudgetForm): void => {

		const client = clients.find(c => c.id === data.clientId) || {} as Client;

		const newBudget: BudgetDTO = {
			discount: data.discount,
			endDate: data.endDate,
			notes: data.notes,
			total: data.total,

			client: client,
			startDate: new Date(),
			products: listProductsBudget,
		}

		if (budgetId) {
			editBudget(budgetId, newBudget);
		} else {
			addBudget(newBudget);
		}

		clearFormModal();
		setIsModalVisible(false);
	}

	//#region Table ProdcutsBudgets

	const onRemoveProductBudget = (productId: string) => {
		confirm({
			title: `Tem ceteza que você quer remover esse produto?`,
			icon: <ExclamationCircleOutlined />,
			okText: 'Sim',
			okType: 'danger',
			cancelText: 'Não',
			onOk() {
				const result = listProductsBudget.filter(p => p.id !== productId);
				setListProductsBudget(result);
			},
			onCancel() { }
		});
	}

	const columns = [
		{
			title: 'Nome',
			dataIndex: 'title',
		},
		{
			title: 'Quantidade',
			dataIndex: 'quantity',
		},
		{
			title: 'Desconto',
			render: (_: any, record: ProductBudget) => (
				<span>{record.discount}%</span>
			)
		},
		{
			title: 'SubTotal',
			render: (_: any, record: ProductBudget) => (
				<span>R$ {record.calculateSubTotal()}</span>
			)
		},
		{
			title: 'Ações',
			key: 'action',
			render: (_: any, record: ProductBudget) => (
				<Space size="middle">
					<Button
						type="primary"
						shape="circle"
						icon={<DeleteOutlined />}
						size="middle"
						danger
						onClick={() => onRemoveProductBudget(record.id)} />
				</Space>
			)
		}
	];

	const onChangeSelectProduct = (value: string): void => {

		const product = products.find(p => p.id === value);

		if (product) {
			const newProductBudget = new ProductBudget(
				product.id,
				product.title,
				product.description,
				product.providerPrice,
				product.salePrice,
				0,
				1,
			)

			setProductBudget(newProductBudget);
		}
	}

	const handleAddProductBudget = () => {
		const quantity = Number(productBudget?.quantity) || 0;
		const discount = Number(productBudget?.discount) || 0;

		var tempPb = [] as ProductBudget[];

		listProductsBudget.forEach(pb => {
			tempPb.push(
				new ProductBudget(
					pb.id,
					pb.title,
					pb.description,
					pb.providerPrice,
					pb.salePrice,
					pb.discount,
					pb.quantity
				)
			);
		});

		const idxProductOnTable = tempPb.findIndex(p => p.id === productBudget.id);

		if (idxProductOnTable !== -1) {
			tempPb[idxProductOnTable].quantity += quantity;
			tempPb[idxProductOnTable].discount += discount;
		} else {
			tempPb.push(new ProductBudget(
				productBudget.id,
				productBudget.title,
				productBudget.description,
				productBudget.providerPrice,
				productBudget.salePrice,
				productBudget.discount,
				productBudget.quantity
			));
		}

		setListProductsBudget([...tempPb]);
		setProductBudget({} as ProductBudget);
	}

	//#endregion

	const clearFormModal = (): void => {
		form.resetFields();
		setProductBudget({} as ProductBudget);
		setListProductsBudget([] as ProductBudget[]);
	}

	return (
		<>
			<Modal
				title={budgetId ? "Editar orçamento" : "Criar orçamento"}
				visible={isModalVisible}
				footer={null}
				onCancel={() => {
					clearFormModal();
					setIsModalVisible(false);
				}}
				width={1000}
			>
				<Form
					form={form}
					name="form-create-edit-budget"
					layout="vertical"
					onFinish={onFinish}
					initialValues={prepareInitialValues()}
				>

					<Form.Item
						label="Adicionar cliente"
						name="clientId"
					>
						<Select
							showSearch
							placeholder="Selecione o cliente"
							optionFilterProp="children"
						>
							{
								clients.map(c => (
									<Option
										// selec={c.id === (budget.client && budget.client.id)}
										key={c.id}
										value={c.id}>
										{c.name} - {c.email}
									</Option>
								))
							}
						</Select>
					</Form.Item>

					<label>Adicionar Produtos</label>
					<Space
						direction='horizontal'
						size={16}
						style={{ marginBottom: 16 }}
					>
						<span>Produto: </span>
						<Select
							showSearch
							style={{ width: 200 }}
							placeholder="Selecione o produto"
							optionFilterProp="children"
							value={productBudget?.id ?? ""}
							onChange={onChangeSelectProduct}
						>
							{
								products.map(c => (
									<Option key={c.id} value={c.id}>{c.title}</Option>
								))
							}
						</Select>

						<span>Quantidade: </span>
						<InputNumber
							placeholder="Quantidade"
							min={1}
							value={productBudget.quantity}
							onChange={(value: number) => {
								setProductBudget({ ...productBudget, quantity: value } as ProductBudget);
							}}
						/>

						<span>Desconto: </span>
						<InputNumber
							placeholder="Desconto no produto"
							min={0}
							max={100}
							value={productBudget.discount}
							onChange={(value: number) => {
								productBudget.applyDiscount(value);
								setProductBudget({ ...productBudget } as ProductBudget);
							}}
						/>
						<Button type="primary" onClick={handleAddProductBudget}>Adicionar</Button>
					</Space>

					<Table
						columns={columns}
						dataSource={listProductsBudget}
					/>



					{/* <Form.Item
						name="endDate"
						label="Data de validade">
						<DatePicker />
					</Form.Item> */}

					<Form.Item
						label="Observações/Anotações"
						name="notes"
					>
						<TextArea />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit">
							{budgetId ? "Editar" : "Salvar"}
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	)
};

export default CreateBudget;
