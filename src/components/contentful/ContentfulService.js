import { createClient } from "contentful";

const client = createClient({
    space: 'nztbx73s7e26',
    accessToken: 'SbzQT6nC8k_XpLnxT7EogVUd9uKqCVAkDPpa_n25dXU',
});

export async function getEntries(contentType, locale, query) {
    const entries = await client.getEntries({
        content_type: contentType,
        locale: locale,
        ...query
    });
    if (entries.items) return { items: entries.items, total: entries.total };
}