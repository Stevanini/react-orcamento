import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import './styles.css'

const Pdf: React.FC = () => {
	const container = useRef<HTMLDivElement>(null);
	const pdfExportComponent = useRef<PDFExport>(null);

	const exportPDFWithMethod = () => {
		let element = container.current || document.body;
		savePDF(element, {
			paperSize: "A4",
			margin: 40,
			fileName: `Report for ${new Date().getFullYear()}`,
		});
	};

	const exportPDFWithComponent = () => {
		if (pdfExportComponent.current) {
			pdfExportComponent.current.save();
		}
	};

	return (
		<>
			<ul className="uk-breadcrumb">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<span>Visualizar pdf</span>
				</li>
			</ul>

			<button className="uk-button-primary uk-margin uk-padding"
				onClick={exportPDFWithMethod}>exportPDFWithMethod</button>
			<button className="uk-button-default uk-margin uk-padding"
				onClick={exportPDFWithComponent}>exportPDFWithComponent</button>

			<PDFExport
				ref={pdfExportComponent}
				paperSize="auto"
				margin={40}
				fileName={`Report for ${new Date().getFullYear()}`}
				author="KendoReact Team"
			>
				<div ref={container}>
					<div id="body-pdf">
						<table className="t0">
							<thead>
								<tr>
									<th className="t0-col">
										<p className="p0">Stevanini Inc.</p>
										<p className="p1">Rua Honório Lacerda Filho, 132</p>
										<p className="p1">Leopoldina-MG</p>
									</th>
									<th className="t0-col">
										<p className="p8">ORÇAMENTO</p>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="t0-col">
										<p className="p3 ft2 mt-30">Para o cliente:</p>
										<p className="p1">Cleverson Fernandes de Faria</p>
										<p className="p1">Rua Nao Sei Qual, S/N</p>
										<p className="p1">Bom Jesus do Norte-ES</p>
									</td>
									<td className="t0-br">
										<table className="t1">
											<tr>
												<td className="tr1 td0">
													<p className="p9 ft6">Data do Orçamento</p>
												</td>
												<td className="tr1 td1">
													<p className="p9 ft1 p-right">24/07/2021</p>
												</td>
											</tr>
											<tr>
												<td className="tr2 td0">
													<p className="p9 ft6">Válido até</p>
												</td>
												<td className="tr2 td1">
													<p className="p9 ft1 p-right">28/07/2021</p>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</tbody>
						</table>

						<table className="t2">
							<thead>
								<tr>
									<th className="t2-header">Nome do produto</th>
									<th className="t2-header p-center w-100px">Quantidade</th>
									<th className="t2-header p-center w-100px">Preço</th>
									<th className="t2-header p-center w-100px">Total</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="t2-col">P1</td>
									<td className="t2-col p-center w-100px">5</td>
									<td className="t2-col p-center w-100px">R$ 100,00</td>
									<td className="t2-col p-center w-100px">R$ 500,00</td>
								</tr>
							</tbody>
						</table>

						<div className="t3-container">
							<table className="t3">
								<thead>
									<tr>
										<th className="t3-header">
											<p className="p9 ft6">Subtotal</p>
										</th>
										<th className="t3-header ">
											<p className="p9 ft1 p-right">R$ 500,00</p>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="t3-col">
											<p className="p9 ft6">Descontos(%)</p>
										</td>
										<td className="t3-col">
											<p className="p9 ft1 p-right">0 %</p>
										</td>
									</tr>
									<tr className="t3-footer">
										<td className="t3-col">
											<p className="p9 ft6">TOTAL</p>
										</td>
										<td className="t3-col">
											<p className="p9 ft1 p-right">RS 500,00</p>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<p className="p3 ft2 pdt-30">Observações:</p>
						<p className="p1 pdb-30">Sem observações</p>
					</div>
				</div>
			</PDFExport >
		</>
	);
};

export default Pdf;
