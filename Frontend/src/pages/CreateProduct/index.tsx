import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { ProductContextType, ProductsContext } from "../../contexts";
import { Product, ProductDTO } from "../../models";
import { Config } from "../../configs";

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

interface AddProductParams {
	productId: string;
}

const CreateProduct: React.FC = () => {
	const history = useHistory();

	let { productId } = useParams<AddProductParams>();
	console.log(productId);

	const { products, addProduct, editProduct } = useContext<ProductContextType>(ProductsContext);

	const [product, setProduct] = useState<Product>({} as Product);

	const { register, handleSubmit, formState: { errors }, setValue } = useForm({
		resolver: yupResolver(schema)
	});

	useEffect(() => {
		const productBase = products.find(p => p.id === productId);

		setValue('title', productBase?.title);
		setValue('description', productBase?.description);
		setValue('salePrice', productBase?.salePrice);
		setValue('providerPrice', productBase?.providerPrice);
		setValue('discount', productBase?.discount);

		setProduct(productBase || {} as Product);
	}, [productId, products, setValue]);


	const onSubmit = (data: AddProductForm, e: any) => {

		console.log(data);
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

		e.target.reset();
		history.push(`${Config.BASE_URL}/products`);
	}

	return (
		<>
			<ul className="uk-breadcrumb">
				<li>
					<Link to={`${Config.BASE_URL}/`}>Home</Link>
				</li>
				<li>
					<Link to={`${Config.BASE_URL}/products`}>Produtos</Link>
				</li>
				<li>
					<span>{productId ? "Editar" : "Criar"} produto</span>
				</li>
			</ul>

			<form onSubmit={handleSubmit<AddProductForm>(onSubmit)} className="uk-form-stacked">
				<h4>{productId ? "Editar" : "Criar"} produto</h4>

				<label className="uk-margin uk-form-label">Título do produto</label>
				<div className="uk-form-controls">
					<input
						type="text"
						id="title"
						placeholder="Titulo do produto"
						className="uk-input"
						{...register('title')}
						value={product.title || ''}
						onChange={e => {
							register('title')
							setProduct(Object.assign({}, product, { title: e.target.value }))
						}}
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
						value={product.description || ''}
						onChange={e => {
							register('description');
							setProduct(Object.assign({}, product, { description: e.target.value }));
						}}
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
							value={product.providerPrice || 0}
							onChange={e => {
								register('providerPrice');
								setProduct(Object.assign({}, product, { providerPrice: e.target.value }))
							}}
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
							value={product.salePrice || 0}
							onChange={e => {
								register('salePrice');
								setProduct(Object.assign({}, product, { salePrice: e.target.value }))
							}}
						/>
						{errors.salePrice && (errors.salePrice.type === "required" || errors.salePrice.type === "typeError") &&
							<span><small><strong className="uk-text-danger">O preço é obrigatório.</strong></small></span>}
						{errors.salePrice && errors.salePrice.type === "min" &&
							<span><small><strong className="uk-text-danger">O preço não pode ser negativo</strong></small></span>}

					</div>
				</div>

				<div className="uk-width-1-1">
					<button type="submit" className="uk-button uk-button-primary">{productId ? "Editar" : "Salvar"}</button>
				</div>
			</form>
		</>
	);
};

export default CreateProduct;
