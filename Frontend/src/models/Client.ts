import IClient from "../interfaces/IClient";

export class Client {
	id: string;
	name: string;
	address: string;
	city: string;
	email: string;

	constructor(id: string, name: string, address: string, city: string, email: string) {
		Object.setPrototypeOf(this, Client.prototype);

		this.id = id;
		this.name = name;
		this.address = address;
		this.city = city;
		this.email = email;
	}
}