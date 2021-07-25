import { Guid } from "./Guid";

export class Client {
	constructor(
		public id: Guid,
		public name: string,
		public address: string,
		public city: string,
		public email: string,
	) { }
}