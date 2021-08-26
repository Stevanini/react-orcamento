import {
	drawDOM,
	exportPDF,
	DrawOptions,
	Group,
} from "@progress/kendo-drawing";

import { savePDF } from "@progress/kendo-react-pdf";

import { Email } from '../models';

const GenerateBase64Pdf = async (element: HTMLElement, options?: DrawOptions) =>
	drawDOM(element, {
		paperSize: "A4",
		// margin: {
		// 	left: 40,
		// 	top: 40,
		// 	right: 40,
		// 	bottom: 40,
		// }
	})
		.then((group: Group) => exportPDF(group))
		.then((dataUri: string) => {
			return dataUri.replace('data:application/pdf;base64,', '');
		});

const GenerateFilePdfDownload = (element: HTMLElement, filename: string = 'arquivo'): void => {
	savePDF(element, {
		paperSize: "A4",
		margin: 40,
		fileName: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}-${filename}.pdf`,
	});
}

const SendToAPI = async (email: Email) => {
	const url = 'http://localhost:7071/api/post-budget';
	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify({ email}),
	});
	return response && response.json();
}

const PdfUtils = {
	GenerateBase64Pdf,
	SendToAPI,
	GenerateFilePdfDownload
}

export default PdfUtils;