import React, { useState, useEffect } from 'react';
import HighlightEntriesContext from '@/components/api/HighlightEntriesContext'
import { useRouter } from 'next/router';
import { getEntries } from '@components/contentful/ContentfulService';

function shortenEntries (entries) {
    return entries.map((item, index) => {
        return {
            id: item.sys.id,
            title: item.fields.title,
            slug: item.fields.slug,
            description: item.fields.desc,
            url: item.fields.image.fields.file.url,
            alt: `Image ${item.fields.title}`,
            width: item.fields.image.fields.file.details.image.width,
            height: item.fields.image.fields.file.details.image.height,
            thumbImage: item.fields.thumbImage.fields.file.url,
            thumbImageAlt: `Thumb Image ${item.fields.thumbImage.fields.title}`,
            thumbImageWidth: item.fields.thumbImage.fields.file.details.image.width,
            thumbImageHeight: item.fields.thumbImage.fields.file.details.image.height,
            postTime: item.sys.createdAt,
            type: item.fields.type, 
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
       
    }, []);

    return (
        <HighlightEntriesContext.Provider value={{ highlightEntries }}>
            {children}
        </HighlightEntriesContext.Provider>
        )
}