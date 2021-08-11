import { Client, ClientDTO } from "../../models";

export interface ClientContextType {
	clients: Client[];
	addClient: (dto: ClientDTO) => void;
	removeClient: (clientId: string) => void;
	editClient: (clientId: string, dto: ClientDTO) => void;
}