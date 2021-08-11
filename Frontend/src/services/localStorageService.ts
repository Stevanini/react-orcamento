export function getFromStorage<T>(key: string): T | null {
	const data = localStorage.getItem(key) as string || '';
	try {
		if (!data) {
			throw new Error('No data found');
		}
		return JSON.parse(data) as T;
	} catch {
		return null;
	}
}

export function saveToStorage<T>(key: string, data: any): void {
	if (data) {
		localStorage.setItem(key, JSON.stringify(data));
	}
}