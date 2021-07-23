import { Product } from './../models';

const PRODUCT_STORE = 'PRODUCT_STORE';

export const getProducts = (): Product[] => {
	const data = localStorage.getItem(PRODUCT_STORE) || '';
	try {
		return JSON.parse(data) as Product[];
	} catch {
		return [];
	}
}

export const saveProducts = (data: Product[]) => {
	if (data?.length > 0) {
		localStorage.setItem(PRODUCT_STORE, JSON.stringify(data));
	}
}