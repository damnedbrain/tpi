import React, {
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/router';

import HighlightEntriesContext from '@/components/api/HighlightEntriesContext';
import { getEntries } from '@components/strapi/StrapiContentService';

function shortenEntries (entries) {
    return entries.map((item, index) => {
        return {
            id: item.sys.id,
            title: item.fields.title,
            slug: item.fields.slug,
            description: item.fields.desc || item.fields.content,
            url: item.fields.image?.fields?.file?.url || '',
            alt: `Image ${item.fields.title}`,
            width: item.fields.image?.fields?.file?.details?.image?.width || 0,
            height: item.fields.image?.fields?.file?.details?.image?.height || 0,
            thumbImage: item.fields.thumbImage?.fields?.file?.url || item.fields.image?.fields?.file?.url || '',
            thumbImageAlt: `Thumb Image ${item.fields.thumbImage?.fields?.title || item.fields.title}`,
            thumbImageWidth: item.fields.thumbImage?.fields?.file?.details?.image?.width || item.fields.image?.fields?.file?.details?.image?.width || 0,
            thumbImageHeight: item.fields.thumbImage?.fields?.file?.details?.image?.height || item.fields.image?.fields?.file?.details?.image?.height || 0,
            postTime: item.sys.createdAt,
            type: item.fields.type,
            tags: item.fields.tags,
        }
    }).filter(Boolean);
}

export default function HighlightEntriesProvider({ children }) {
    const router = useRouter();
    const locale = router.locale;

    const [highlightEntries, setHighlightEntries] = useState([]);

    useEffect(() => {
        Promise.all([
            getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 5, "fields.hightLight": "true" }),
        ])
        .then(([highlightEntries]) => {
            setHighlightEntries(shortenEntries(highlightEntries.items));
        })
       
    }, [locale]);

    return (
        <HighlightEntriesContext.Provider value={{ highlightEntries }}>
            {children}
        </HighlightEntriesContext.Provider>
        )
}
