import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Space } from "antd";
import { PDFExport } from "@progress/kendo-react-pdf";


import './styles.css'
import { PdfUtils } from "../../Utils";
import { Budget, Email } from "../../models";
import { BudgetContextType, BudgetsContext } from "../../contexts";

const COMPANY_NAME = "Stevanini Inc.";
const COMPANY_ADDRESS = "Rua Honório Lacerda Filho, 132";
const COMPANY_CITY = "Leopoldina-MG";
const COMPANY_EMAIL = "nao-responda@stevanini.com.br";

interface AddBudgetParams {
	budgetId: string;
}

const Pdf = () => {
	let { budgetId } = useParams<AddBudgetParams>();

	const { budgets } = useContext<BudgetContextType>(BudgetsContext);


	const [budget, setBudget] = useState<Budget>({} as Budget);

	useEffect(() => {
		const lsBudget = budgets.find(p => p.id === budgetId);
		if (lsBudget) {
			const b = new Budget(
				lsBudget.id,
				lsBudget.endDate,
				lsBudget.client,
				lsBudget.products,
				lsBudget.notes
			)
			setBudget(b);
		}
	}, [budgetId]);

	const container = useRef<HTMLDivElement>(null);
	const pdfExportComponent = useRef<PDFExport>(null);

	const sendPDFInEmail = async () => {
		let element = container.current || document.body;
		const pdfBase64 = await PdfUtils.GenerateBase64Pdf(element);

		//Enviar para API
		const email = new Email(
			"romulo-gouvea@hotmail.com",
			"O assunto vindo do post",
			pdfBase64
		);

		await PdfUtils.SendToAPI(email);
	};

	const exportPDFWithMethod = () => {
		let element = container.current || document.body;

		PdfUtils.GenerateFilePdfDownload(element, budget?.client.email + ".pdf");
	};

	const renderPdf = () => (
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
									<p className="p0">{COMPANY_NAME}</p>
									<p className="p1">{COMPANY_EMAIL}</p>
									<p className="p1">{COMPANY_ADDRESS}</p>
									<p className="p1">{COMPANY_CITY}</p>
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
									<p className="p1">{budget?.client?.name}</p>
									<p className="p1">{budget?.client?.email}</p>
									<p className="p1">{budget?.client?.address}</p>
									<p className="p1">{budget?.client?.city}</p>
								</td>
								<td className="t0-br">
									<table className="t1">
										<tr>
											<td className="tr1 td0">
												<p className="p9 ft6">Data do Orçamento</p>
											</td>
											<td className="tr1 td1">
												<p className="p9 ft1 p-right">{budget?.startDate ? new Date(budget.startDate).toLocaleDateString("pt-BR") : "--"}</p>
											</td>
										</tr>
										<tr>
											<td className="tr2 td0">
												<p className="p9 ft6">Válido até</p>
											</td>
											<td className="tr2 td1">
												<p className="p9 ft1 p-right">{budget?.endDate ? new Date(budget.endDate).toLocaleDateString("pt-BR") : "Sem limite de validade"}</p>
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
							{
								budget?.products?.map(p => (
									<tr>
										<td className="t2-col">{p.title}</td>
										<td className="t2-col p-center w-100px">{p.quantity}</td>
										<td className="t2-col p-center w-100px">R$ {p.salePrice || 0}</td>
										{/* <td className="t2-col p-center w-100px">R$ {p.calculateSubTotal()}</td> */}
									</tr>
								))
							}
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
										<p className="p9 ft1 p-right">R$ {budget.calculateSubTotal()}</p>
									</th>
								</tr>
							</thead>
							<tbody>
								{budget?.discount && (
									<tr>
										<td className="t3-col">
											<p className="p9 ft6">Descontos(%)</p>
										</td>
										<td className="t3-col">
											<p className="p9 ft1 p-right">{budget?.discount} %</p>
										</td>
									</tr>
								)}
								<tr className="t3-footer">
									<td className="t3-col">
										<p className="p9 ft6">TOTAL</p>
									</td>
									<td className="t3-col">
										<p className="p9 ft1 p-right">RS {budget.calculateTotal()}</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<p className="p3 ft2 pdt-30">Observações:</p>
					<p className="p1 pdb-30">{budget?.notes}</p>
				</div>
			</div>
		</PDFExport >
	)

	return (
		<>
			<div className="container-pdf">
				{renderPdf()}
			</div>
			<Space style={{ width: '100%' }} >
				<Button
					type="primary"
					onClick={exportPDFWithMethod}>
					Baixar arquivo em PDF
				</Button>
				<Button
					onClick={sendPDFInEmail}>
					Enviar por email
				</Button>
			</Space>

		</>
	);
};

export default Pdf;
