import React, { useContext, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Config } from "../../configs";
import { ProductContextType, ProductsContext } from "../../contexts";

import { ProductBudget } from "../../models";

interface AddBudgetParams {
	budgetId: string;
}

const CreateBudget = () => {

	const selectContainer = useRef<HTMLSelectElement>(null);


	let { budgetId } = useParams<AddBudgetParams>();

	const { products } = useContext<ProductContextType>(ProductsContext);

	const [productBudget, setProductBudget] = useState<ProductBudget>({} as ProductBudget);
	const [productsBudget, setProductsBudget] = useState<ProductBudget[]>([])

	const handleAddProductBudget = () => {

		const quantity = Number(productBudget?.quantity) || 0;
		const discount = Number(productBudget?.discount) || 0;

		const productId = selectContainer?.current?.value || "";

		if (!productId || quantity <= 0 || discount < 0) {
			return;
		}

		const product = products.find(p => p.id === productId);
		if (!product) {
			return;
		}

		let temp = {
			id: product.id,
			title: product.title,
			quantity: quantity,
			discount: discount,
		} as ProductBudget;

		//update if exists
		const idxProductOnTable = productsBudget.findIndex(p => p.id === productId);

		if (idxProductOnTable !== -1) {
			productsBudget[idxProductOnTable].quantity += quantity;
			productsBudget[idxProductOnTable].discount += discount;
			setProductsBudget([...productsBudget]);
		} else {
			setProductsBudget([...productsBudget, temp]);
		}

		setProductBudget({} as ProductBudget);

	}

	const handleRemoveProductBudget = (productBudgetId: string) => {
		const result = productsBudget.filter(p => p.id !== productBudgetId);
		setProductsBudget(result);
	}

	return (
		<>
			<ul className="uk-breadcrumb">
				<li>
					<Link to={`${Config.BASE_URL}/`}>Home</Link>
				</li>
				<li>
					<Link to={`${Config.BASE_URL}/budgets`}>Orçamentos</Link>
				</li>
				<li>
					<span>{budgetId ? "Editar" : "Criar"} orçamento</span>
				</li>
			</ul>

			<form onSubmit={() => { }} className="uk-form-stacked">
				<h4>{budgetId ? "Editar" : "Criar"} orçamento</h4>

				<hr className="uk-divider-small" />

				<div className="uk-section">
					<div className="uk-container uk-column-1-2">
						<div>
							<label className="uk-margin uk-form-label">Selecione o cliente ja cadastrado</label>
							<select className="uk-select">
								<option>Option 01</option>
								<option>Option 02</option>
							</select>
						</div>
						<Link to={`${Config.BASE_URL}/create/client`} className="uk-button uk-button-secondary">
							Adicionar cliente
						</Link>
					</div>
				</div>

				<hr className="uk-divider-small" />

				<div className="uk-column-1-6@s">

					<div>
						<label className="uk-margin uk-form-label">Selecione o produto</label>
						<select className="uk-select uk-form-width-medium" ref={selectContainer}>
							<option>Selecione...</option>
							{products.map(product => <option key={product.id} value={product.id}>{product.title}</option>)}
						</select>
					</div>
					<div>
						<label className="uk-margin uk-form-label">Selecione a quantidade</label>
						<input
							type="number"
							id="quantity"
							placeholder="Quantidade do produto"
							className="uk-input uk-form-width-medium uk-margin"
							value={productBudget.quantity || ""}
							onChange={e => {
								setProductBudget(Object.assign({}, productBudget, { quantity: e.target.value }))
							}}
						/>
					</div>
					<div>
						<label className="uk-margin uk-form-label">Dar desconto nesse produto?(%)</label>
						<input
							type="number"
							id="discount"
							placeholder="Disconto do produto"
							className="uk-input uk-form-width-medium uk-margin"
							value={productBudget.discount || 0}
							onChange={e => {
								setProductBudget(Object.assign({}, productBudget, { discount: e.target.value }))
							}}
						/>
					</div>

					<button
						type="button"
						className="uk-button uk-button-secondary"
						onClick={handleAddProductBudget}
					>
						Adicionar produto
					</button>
				</div>

				{productsBudget.length > 0 && (
					<table className="uk-table uk-table-justify uk-table-divider">
						<thead>
							<tr>
								<th className="uk-width-expand">Nome</th>
								<th className="uk-width-small">Quantidade</th>
								<th className="uk-width-small">Desconto por produto</th>
								<th className="uk-width-small">Ação</th>
							</tr>
						</thead>
						<tbody>
							{
								productsBudget?.map((product, index) => (
									<tr key={index}>
										<td>{product.title}</td>
										<td>{product.quantity}</td>
										<td>{product.discount}</td>
										<td>
											<button
												className="uk-button uk-button-danger"
												type="button"
												onClick={() => handleRemoveProductBudget(product.id)}
											>
												remover
											</button>
										</td>
									</tr>
								))
							}

						</tbody>
					</table>
				)}


				<hr className="uk-divider-small" />

				<label className="uk-margin uk-form-label">Desconto</label>
				<div className="uk-form-controls uk-width-1-3">
					<input
						type="number"
						id="title"
						placeholder="valor do disconto no total"
						className="uk-input"
					/>
				</div>

				<label className="uk-margin uk-form-label">Data de validade</label>
				<div className="uk-form-controls uk-width-1-3">
					<input
						type="date"
						id="title"
						placeholder="Titulo do produto"
						className="uk-input"

					/>
				</div>

				<div className="uk-width-1-2 uk-margin">
					<button type="submit" className="uk-button uk-button-primary">
						{budgetId ? "Editar" : "Salvar"}
					</button>
				</div>
			</form>
		</>
	)
};

export default CreateBudget;
