const apiRoot: string = import.meta.env.VITE_API_ROOT;

export async function fetchApi<T>(
	fetchFunction: typeof fetch,
	endpoint: string,
	options: RequestInit = {}
): Promise<T> {
	const fullUrl = `${apiRoot}${endpoint}`;
	const response = await fetchFunction(fullUrl, {
		credentials: 'include',
		...options
	});
	return await response.json();
}
