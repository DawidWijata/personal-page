import { createClient } from "@vrite/sdk/api";

const config = useRuntimeConfig();
const vrite = createClient({
    token: config.API_KEY,
});

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const variants = await vrite.variants.list();

    const params = {
        id: query.id!.toString(),
        content: true,
        variant: variants.find(v => v.name === query.locale)?.id
    };

    return vrite.contentPieces.get(params);
});
