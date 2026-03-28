import Head from 'next/head';
import { useRouter } from 'next/router';

import EntryPreview from '@/components/content-ui/EntryPreview';
import Pagination from '@/components/content-ui/Pagination';
import { extractTextFromBlocks } from '@/components/strapi/blocks';

export const TYPED_PAGE_SIZE = 15;

export const TYPED_PAGE_CONFIG = {
  blog: {
    type: 'blog',
    metaTitleEn: 'TOAN PHAT - Blog',
    metaTitleVi: 'TOAN PHAT - Blog',
    titleEn: 'Blog',
    titleVi: 'Blog',
  },
  'thi-truong': {
    type: 'news',
    metaTitleEn: 'TOAN PHAT - News',
    metaTitleVi: 'TOAN PHAT - Thị trường',
    titleEn: 'News',
    titleVi: 'Thị trường',
  },
  'uu-dai': {
    type: 'promo',
    metaTitleEn: 'TOAN PHAT - Promotion',
    metaTitleVi: 'TOAN PHAT - Ưu đãi',
    titleEn: 'Promotion',
    titleVi: 'Ưu đãi',
  },
};

export function shortenTypedEntries(entries = []) {
  return entries.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: extractTextFromBlocks(item.fields.desc || item.fields.content),
    url: item.fields.image?.fields?.file?.url || '',
    thumbImage: item.fields.thumbImage?.fields?.file?.url || item.fields.image?.fields?.file?.url || '',
    postTime: item.sys.createdAt,
    type: item.fields.type,
    tags: item.fields.tags,
  }));
}

export default function TypedEntriesPage({ basePageURL, entries, pageCount, currentPage }) {
  const router = useRouter();
  const locale = router.locale;
  const config = TYPED_PAGE_CONFIG[basePageURL];

  return (
    <>
      <Head>
        <title>{locale === 'en-US' ? config.metaTitleEn : config.metaTitleVi}</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-black mb-6">
          {locale === 'en-US' ? config.titleEn : config.titleVi}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {entries.map((entry) => (
            <div key={entry.id}>
              <EntryPreview entry={entry} ellipsis />
            </div>
          ))}
        </div>
        <Pagination currentPage={currentPage} pageCount={pageCount} basePageURL={basePageURL} />
      </div>
    </>
  );
}
