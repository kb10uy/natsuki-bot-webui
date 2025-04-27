import { fetchApi } from '$lib';
import {
	type ConversationsLatestIdsResponseItem,
	type ConversationsCountResponse
} from '$lib/api-response';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const countResponse = await fetchApi<ConversationsCountResponse>(fetch, '/conversations/count');
	const latestResponse = await fetchApi<ConversationsLatestIdsResponseItem[]>(
		fetch,
		'/conversations/latest_ids'
	);

	return {
		count: countResponse.count,
		items: latestResponse
	};
};
