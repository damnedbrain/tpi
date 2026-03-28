const STRAPI_BASE_URL = (process.env.NEXT_PUBLIC_STRAPI_URL || 'https://strapi.toanphatgroup.com').replace(/\/$/, '');
const STRAPI_API_TOKEN =
  process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ||
  process.env.STRAPI_API_TOKEN ||
  process.env.STRAPI_READONLY_TOKEN ||
  '';

const CONTENT_TYPE_TO_COLLECTION = {
  toanPhatMarketNews: 'toan-phat-market-news',
  toanPhatBanner: 'toan-phat-banners',
  toanPhatBlog: 'toan-phat-blogs',
  toanPhatPromo: 'toan-phat-promos',
  toanPhatFaqs: 'toan-phat-faqs',
};

function toProtocolRelative(url) {
  if (!url) return '';
  if (url.startsWith('//')) return url;
  if (url.startsWith('http://')) return `//${url.slice('http://'.length)}`;
  if (url.startsWith('https://')) return `//${url.slice('https://'.length)}`;
  if (url.startsWith('/')) return `//${new URL(STRAPI_BASE_URL).host}${url}`;
  return `//${new URL(STRAPI_BASE_URL).host}/${url}`;
}

function mediaToEntryAsset(media) {
  if (!media) return null;
  return {
    fields: {
      title: media.alternativeText || media.name || '',
      file: {
        url: toProtocolRelative(media.url),
        details: {
          image: {
            width: media.width || 0,
            height: media.height || 0,
          },
        },
        fileName: media.name || '',
        contentType: media.mime || '',
      },
    },
  };
}

function normalizeUndefined(value) {
  if (value === undefined) return null;
  if (Array.isArray(value)) return value.map(normalizeUndefined);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, childValue]) => [key, normalizeUndefined(childValue)])
    );
  }
  return value;
}

function strapiEntryToPageItem(entry) {
  const fields = {
    title: entry.title,
    slug: entry.slug,
    image: mediaToEntryAsset(entry.image),
    thumbImage: mediaToEntryAsset(entry.thumbImage),
    banner: mediaToEntryAsset(entry.banner),
    avatar: mediaToEntryAsset(entry.avatar),
    desc: entry.desc,
    content: entry.content,
    time: entry.time,
    author: entry.author,
    hightLight: entry.hightLight,
    hightlight: entry.hightlight,
    homePage: entry.homePage,
    promo: entry.promo,
    type: entry.type,
    tags: entry.tags,
    question: entry.question,
    answer: entry.answer,
    link: entry.link,
  };

  return {
    sys: {
      id: entry.contentful_id || entry.documentId || String(entry.id),
      createdAt: entry.createdAt || entry.legacy_created_at || entry.legacy_created_at,
      updatedAt: entry.updatedAt || entry.legacy_updated_at || entry.legacy_updated_at,
      locale: entry.locale || 'en-US',
    },
    locale: entry.locale || 'en-US',
    fields: normalizeUndefined(fields),
  };
}

function translateQuery(query = {}, locale) {
  const params = new URLSearchParams();
  if (locale) params.set('locale', locale);
  params.set('populate', '*');

  if (query.limit != null) params.set('pagination[pageSize]', String(query.limit));
  if (query.skip != null) params.set('pagination[start]', String(query.skip));

  if (query.order) {
    if (query.order === '-sys.createdAt') params.set('sort', 'createdAt:desc');
    else if (query.order === 'sys.createdAt') params.set('sort', 'createdAt:asc');
  }

  Object.entries(query).forEach(([key, value]) => {
    if (['limit', 'skip', 'order'].includes(key)) return;

    if (key === 'fields.slug') {
      params.set('filters[slug][$eq]', String(value));
      return;
    }

    if (key.startsWith('fields.')) {
      const fieldName = key.replace('fields.', '');
      params.set(`filters[${fieldName}][$eq]`, String(value));
    }
  });

  return params;
}

async function fetchCollection(collection, locale, query = {}) {
  const params = translateQuery(query, locale);
  const headers = {
    Accept: 'application/json',
  };

  if (STRAPI_API_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const response = await fetch(`${STRAPI_BASE_URL}/api/${collection}?${params.toString()}`, {
    headers,
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Strapi request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function getEntries(contentType, locale, query = {}) {
  const collection = CONTENT_TYPE_TO_COLLECTION[contentType];
  if (!collection) {
    throw new Error(`Unsupported content type: ${contentType}`);
  }

  const tagFilter = query['fields.tags[in]'];
  const normalizedQuery = { ...query };

  // Strapi filtering on JSON array tags is unreliable here, so fetch a broader
  // result set and filter in the adapter for consistent page behavior.
  if (tagFilter) {
    delete normalizedQuery['fields.tags[in]'];
    if (normalizedQuery.limit != null && normalizedQuery.skip != null) {
      normalizedQuery.limit = normalizedQuery.limit + normalizedQuery.skip;
      normalizedQuery.skip = 0;
    } else if (normalizedQuery.limit != null) {
      normalizedQuery.limit = Math.max(normalizedQuery.limit, 200);
    } else {
      normalizedQuery.limit = 2000;
    }
  }

  const payload = await fetchCollection(collection, locale, normalizedQuery);
  let items = (payload.data || []).map(strapiEntryToPageItem);

  if (tagFilter) {
    const wantedTag = String(tagFilter).trim();
    items = items.filter((item) => Array.isArray(item.fields.tags) && item.fields.tags.includes(wantedTag));

    const skip = query.skip || 0;
    const limit = query.limit != null ? query.limit : items.length;

    return {
      items: items.slice(skip, skip + limit),
      total: items.length,
    };
  }

  return {
    items,
    total: payload.meta?.pagination?.total || 0,
  };
}
