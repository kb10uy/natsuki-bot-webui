import { fetchApi } from '$lib';
import type { ConversationsCountResponse } from '$lib/api-response';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetchApi<ConversationsCountResponse>(fetch, '/conversations/count');

	return {
		count: response.count
	};
};
