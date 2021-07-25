export class Email {
	constructor(
		public to: string,
		public subject: string,
		public fileBase64: string,
	) { }
}