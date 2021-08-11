import React, { useContext, useEffect } from "react";
import { Button, Form, Input, Modal } from "antd";

import { ClientContextType, ClientsContext } from "../../contexts";
import { Client, ClientDTO } from "../../models";

interface AddClientForm {
	id: string;
	name: string;
	address: string;
	city: string;
	email: string;
}

interface CreateClientProps {
	clientId?: string;
	isModalVisible: boolean;
	setIsModalVisible: (visible: boolean) => void;
}

const CreateClient: React.FC<CreateClientProps> = ({ clientId, isModalVisible, setIsModalVisible }) => {
	const [form] = Form.useForm();

	const { clients, editClient, addClient } = useContext<ClientContextType>(ClientsContext);

	useEffect(() => {
		form.setFieldsValue({
			id: "",
			name: "",
			address: "",
			city: "",
			email: "",
		} as Client);

		form.setFieldsValue(prepareInitialValues());
	}, [clientId]);

	const onFinish = (data: AddClientForm): void => {

		const newClient: ClientDTO = {
			...data,
		}

		if (clientId) {
			editClient(clientId, newClient);
		} else {
			addClient(newClient);
		}

		setIsModalVisible(false);
		form.resetFields();
	}

	const prepareInitialValues = (): Client => {
		const clientBase = clients.find((p: Client) => p.id === clientId);

		if (clientBase) {
			return {
				...clientBase
			} as Client;
		}

		return {} as Client;
	}

	return (
		<>
			<Modal
				title={clientId ? "Editar cliente" : "Criar cliente"}
				visible={isModalVisible}
				footer={null}
				onCancel={() => { setIsModalVisible(false) }}
			>
				<Form
					form={form}
					name="form-create-edit-client"
					layout="vertical"
					onFinish={onFinish}
					initialValues={prepareInitialValues()}
				>

					<Form.Item
						label="Nome"
						name="name"
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="E-mail"
						name="email"
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Rua..., numero"
						name="address"
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Cidade"
						name="city"
					>
						<Input />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit">
							{clientId ? "Editar" : "Salvar"}
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	)
};

export default CreateClient;
