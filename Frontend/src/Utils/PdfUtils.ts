import {
	drawDOM,
	exportPDF,
	DrawOptions,
	Group,
} from "@progress/kendo-drawing";

import { savePDF } from "@progress/kendo-react-pdf";

import { Email } from '../models';

const GenerateBase64Pdf = async (element: HTMLElement, options?: DrawOptions) =>
	await drawDOM(element, options)
		.then((group: Group) => exportPDF(group))
		.then((dataUri: string) => {
			return dataUri.replace('data:application/pdf;base64,', '');
		});

const GenerateFilePdfDownload = (element: HTMLElement, filename: string): void => {
	savePDF(element, {
		paperSize: "A4",
		margin: 40,
		fileName: `${filename}-${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
	});
}

const SendToAPI = async (email: Email) => {
	const url = 'http://localhost:7071/api/post-budget';
	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(email),
	});
	return response.json();
}

const PdfUtils = {
	GenerateBase64Pdf,
	SendToAPI,
	GenerateFilePdfDownload
}

export default PdfUtils;