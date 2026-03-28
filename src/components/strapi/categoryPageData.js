import {
  CATEGORY_PAGE_CONFIG,
  CATEGORY_PAGE_SIZE,
  shortenEntries,
} from '@/components/content-ui/CategoryEntriesPage';
import { getEntries } from '@/components/strapi/StrapiContentService';

export async function getCategoryPageProps({ basePageURL, locale, page }) {
  const config = CATEGORY_PAGE_CONFIG[basePageURL];

  if (!config) {
    return { notFound: true };
  }

  const pageNumber = Number.isFinite(Number(page)) ? Number(page) : 1;
  const currentPage = Math.max(1, pageNumber);
  const skip = (currentPage - 1) * CATEGORY_PAGE_SIZE;

  const res = await getEntries('toanPhatMarketNews', locale, {
    order: '-sys.createdAt',
    limit: CATEGORY_PAGE_SIZE,
    skip,
    'fields.tags[in]': config.tag,
  });

  const pageCount = Math.max(1, Math.ceil((res.total || 0) / CATEGORY_PAGE_SIZE));

  if (currentPage > pageCount) {
    return { notFound: true };
  }

  return {
    props: {
      basePageURL,
      currentPage,
      entries: shortenEntries(res.items),
      locale,
      metaTitle: config.metaTitle,
      pageCount,
      titleEn: config.titleEn,
      titleVi: config.titleVi,
    },
    revalidate: 60,
  };
}
