import React, { createContext, useEffect, useState } from 'react'
import { Guid } from 'guid-ts';

import { ClientContextType } from './ClientContextType';
import { Client, ClientDTO } from '../../models';
import { getFromStorage, saveToStorage } from '../../services/localStorageService';
import { Config } from '../../configs';

export const ClientsContext = createContext<ClientContextType>({
	clients: [],
	addClient: () => null,
	removeClient: () => null,
	editClient: () => null,
});


const ClientsProvider = (props: any) => {

	const [clients, setClients] = useState<Client[]>(getFromStorage<Client[]>(Config.CLIENT_STORE) || []);

	useEffect(() => {
		saveToStorage(Config.CLIENT_STORE, clients);
	}, [clients])

	const addClient = (dto: ClientDTO) => {
		const client: Client = new Client(
			Guid.newGuid().toString(),
			dto.name,
			dto.email,
			dto.address,
			dto.city,
		);

		setClients([...clients, client]);
	}

	const removeClient = (clientId: string) => {
		const result = clients.filter(p => p.id !== clientId);
		setClients(result);
	}

	const editClient = (clientId: string, dto: ClientDTO) => {

		const idxClient = clients.findIndex(p => p.id === clientId);

		if (idxClient !== -1) {

			clients[idxClient].name = dto.name;
			clients[idxClient].address = dto.address;
			clients[idxClient].city = dto.city;
			clients[idxClient].email = dto.email;

			setClients([...clients]);
		}

	}

	const data = {
		clients,
		addClient,
		removeClient,
		editClient,
	};

	return (
		<ClientsContext.Provider value={data}>
			{props.children}
		</ClientsContext.Provider>
	);
}

export default ClientsProvider;