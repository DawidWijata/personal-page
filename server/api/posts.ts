import { createClient } from "@vrite/sdk/api";

const publishedHardocdedId = "64a1986e4969669109fb5345";
const config = useRuntimeConfig();
const vrite = createClient({
	token: config.API_KEY,
});

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const variants = await vrite.variants.list();

	const params = {
		contentGroupId: publishedHardocdedId,
		perPage: Number.parseInt(query.perPage!.toString()),
		page: Number.parseInt(query.page!.toString()),
		variant: variants.find(v => v.name === query.locale)?.id,
	};

	return await vrite.contentPieces.list(params);
});
