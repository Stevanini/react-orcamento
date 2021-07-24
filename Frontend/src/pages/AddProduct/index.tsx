import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { ProductContextType, ProductsContext } from "../../contexts";
import { Guid, Product } from "../../models";

const schema = yup.object().shape({
	title: yup.string().min(5).max(30).required("Título inválido"),
	description: yup.string().min(5).max(80).required("Descrição inválido"),
	salePrice: yup.number().min(0).required("Preço inválido"),
	providerPrice: yup.number().min(0).required("Preço inválido"),
});

interface AddProductForm {
	title: string;
	description: string;
	salePrice: number;
	providerPrice: number;
	discount: number;
}

const AddProduct: React.FC = () => {

	const { addProduct } = useContext<ProductContextType>(ProductsContext);

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = (data: AddProductForm, e: any) => {

		const product: Product = {
			id: Guid.newGuid(),
			title: data.title,
			description: data.description,
			salePrice: data.salePrice,
			providerPrice: data.providerPrice,
			discount: data.discount,
			active: true,
		}

		addProduct(product);
		e.target.reset();
		window.location.href = "/products";
	}

	return (
		<>
			<ul className="uk-breadcrumb">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products">Produtos</Link>
				</li>
				<li>
					<span>Criar produto</span>
				</li>
			</ul>

			<form onSubmit={handleSubmit<AddProductForm>(onSubmit)} className="uk-form-stacked">
				<h4>Novo produto</h4>

				<label className="uk-margin uk-form-label">Título do produto</label>
				<div className="uk-form-controls">
					<input
						type="text"
						id="title"
						placeholder="Titulo do produto"
						className="uk-input"
						{...register('title')}
					/>
					{errors.title && errors.title.type === "required" &&
						<span><small><strong className="uk-text-danger">O título é obrigatório.</strong></small></span>}
					{errors.title && (errors.title.type === "min" || errors.title.type === "max") &&
						<span><small><strong className="uk-text-danger">O título deve ter entre 5 e 30 caracteres</strong></small></span>}
				</div>

				<label className="uk-margin uk-form-label">Descrição do produto</label>
				<div className="uk-form-controls">
					<input
						type="text"
						id="description"
						placeholder="Breve descrição do produto"
						className="uk-input"
						{...register('description')}
					/>
					{errors.description && errors.description.type === "required" &&
						<span><small><strong className="uk-text-danger">A descrição é obrigatório.</strong></small></span>}
					{errors.description && (errors.description.type === "min" || errors.description.type === "max") &&
						<span><small><strong className="uk-text-danger">A descrição deve ter entre 5 e 80 caracteres</strong></small></span>}
				</div>


				<div className="uk-margin  uk-column-1-2">

					<label className="uk-margin uk-form-label">Preço de custo do produto</label>
					<div className="uk-form-controls">
						<input
							type="number"
							id="providerPrice"
							placeholder="Preço de custo do produto"
							className="uk-input"
							step="0.01"
							{...register('providerPrice')}
						/>
						{errors.providerPrice && (errors.providerPrice.type === "required" || errors.providerPrice.type === "typeError") &&
							<span><small><strong className="uk-text-danger">O preço é obrigatório.</strong></small></span>}
						{errors.providerPrice && errors.providerPrice.type === "min" &&
							<span><small><strong className="uk-text-danger">O preço não pode ser negativo</strong></small></span>}
					</div>

					<label className="uk-margin uk-form-label">Preço de venda do produto</label>
					<div className="uk-form-controls">
						<input
							type="number"
							id="salePrice"
							placeholder="Preço de venda do produto"
							className="uk-input"
							step="0.01"
							{...register('salePrice')}
						/>
						{errors.salePrice && (errors.salePrice.type === "required" || errors.salePrice.type === "typeError") &&
							<span><small><strong className="uk-text-danger">O preço é obrigatório.</strong></small></span>}
						{errors.salePrice && errors.salePrice.type === "min" &&
							<span><small><strong className="uk-text-danger">O preço não pode ser negativo</strong></small></span>}

					</div>
				</div>

				<div className="uk-width-1-1">
					<button type="submit" className="uk-button uk-button-primary">Salvar</button>
				</div>
			</form>
		</>
	);
};

export default AddProduct;
