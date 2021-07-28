import { Client } from '../models';

const CLIENT_STORE = 'CLIENT_STORE';

export const getClients = (): Client[] => {
	const data = localStorage.getItem(CLIENT_STORE) || '';
	try {
		const temp = JSON.parse(data) as Client[];
		let result: Client[] = [];
		for (let b of temp) {
			result.push(new Client(
				b.id,
				b.name,
				b.address,
				b.city,
				b.email
			));
		}
		return result;
	} catch {
		return [];
	}
}

export const saveClients = (data: Client[]) => {
	if (data?.length > 0) {
		localStorage.setItem(CLIENT_STORE, JSON.stringify(data));
	}
}