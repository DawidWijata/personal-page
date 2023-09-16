import { createClient } from "@vrite/sdk/api";

const config = useRuntimeConfig();
const vrite = createClient({
	token: config.API_KEY,
});

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const variants = await vrite.variants.list();

	const params = {
		contentGroupId: config.PUBLISHED_SECTION_ID,
		perPage: Number.parseInt(query.perPage!.toString()),
		page: Number.parseInt(query.page!.toString()),
		variant: variants.find(v => v.key === query.locale)?.id,
	};

	return await vrite.contentPieces.list(params);
});
