import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as nodemailer from "nodemailer";

const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = 465;
const SMTP_USER = "romulo.gouvea@ufv.br";
const SMTP_PASS = "Stevanini-001";

const FROM = "naoresponda@zezinho.com";

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: SMTP_PORT,
	secure: true,
	auth: {
		user: SMTP_USER,
		pass: SMTP_PASS
	}
});

function dataURLtoFile(dataURL: string, filename: string) {
	const arr = dataURL.split(',');
	const matc = arr[0].match(/:(.*?);/);
	const mime = matc ? matc[1] : '';
	const bstr = atob(arr[1]);
	var n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], filename, { type: mime[1] });
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
	const body = req.body
	const email = body.email;

	let info = await transporter.sendMail({
		from: FROM,
		to: email.to,
		subject: email.subject,
		text: 'Segue em anexo os dados do orçamento',
		html: 'Segue em anexo os dados do orçamento',
		attachments: [
			{
				filename: `${email.to}-${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}.pdf`,
				path: "data:application/pdf;base64," + email.fileBase64,
			}
		]
	});

	context.res = {
		status: 200,
		body: info
	}
};

export default httpTrigger;