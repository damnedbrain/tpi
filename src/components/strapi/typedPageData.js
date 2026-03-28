import {
  shortenTypedEntries,
  TYPED_PAGE_CONFIG,
  TYPED_PAGE_SIZE,
} from '@/components/content-ui/TypedEntriesPage';
import { getEntries } from '@/components/strapi/StrapiContentService';

export async function getTypedPageProps({ basePageURL, locale, page }) {
  const config = TYPED_PAGE_CONFIG[basePageURL];

  if (!config) {
    return { notFound: true };
  }

  const pageNumber = Number.isFinite(Number(page)) ? Number(page) : 1;
  const currentPage = Math.max(1, pageNumber);
  const skip = (currentPage - 1) * TYPED_PAGE_SIZE;

  const entries = await getEntries('toanPhatMarketNews', locale, {
    order: '-sys.createdAt',
    limit: TYPED_PAGE_SIZE,
    skip,
    'fields.type': config.type,
  });

  const pageCount = Math.max(1, Math.ceil((entries.total || 0) / TYPED_PAGE_SIZE));

  if (currentPage > pageCount) {
    return { notFound: true };
  }

  return {
    props: {
      basePageURL,
      entries: shortenTypedEntries(entries.items || []),
      pageCount,
      currentPage,
    },
    revalidate: 60,
  };
}
