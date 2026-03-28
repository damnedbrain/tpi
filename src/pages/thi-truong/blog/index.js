import Head from 'next/head';
import { useRouter } from 'next/router';

import EntryPreview from '@/components/content-ui/EntryPreview';
import Pagination from '@/components/content-ui/Pagination';
import { extractTextFromBlocks } from '@/components/strapi/blocks';
import { getEntries } from '@/components/strapi/StrapiContentService';

function shortenEntries(entries) {
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

export async function getStaticProps({ locale }) {
    const entries = await getEntries('toanPhatMarketNews', locale, {
        order: '-sys.createdAt',
        limit: 15,
        'fields.type': 'blog',
    });

    return {
        props: {
            entries: shortenEntries(entries.items || []),
            pageCount: Math.ceil((entries.total || 0) / 15),
        },
        revalidate: 10,
    };
}

export default function ThiTruongBlogPage({ entries, pageCount }) {
    const router = useRouter();
    const locale = router.locale;

    return (
        <>
            <Head>
                <title>TOAN PHAT - Blog</title>
            </Head>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl lg:text-5xl font-extrabold text-black mb-6">
                    {locale === 'en-US' ? 'Blog' : 'Blog'}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {entries.map((entry) => (
                        <div key={entry.id}>
                            <EntryPreview entry={entry} ellipsis />
                        </div>
                    ))}
                </div>
                <Pagination currentPage={1} pageCount={pageCount} basePageURL="blog" />
            </div>
        </>
    );
}
