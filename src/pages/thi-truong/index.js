import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { getEntries } from "@/components/contentful/ContentfulService";
import SlickSlider from "@/components/layout/slick-slider-carousel";

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
        }
    })
}

export default function ThiTruong() {
    const router = useRouter();
    const locale = router.locale;

    // Fetch hero entries
    const [heroEntries, setHeroEntries] = useState([]);
    useEffect(() => {
        async function fetchHeroEntries() {
            const entries = await getEntries(
                "toanPhatMarketNews",
                locale,
                {
                    order: '-sys.createdAt',
                    limit: 5,
                    "fields.promo": "true"
                }
                );
            setHeroEntries(shortenEntries(entries));
        };
        fetchHeroEntries();
    }, []);

    // Fetch featured ( hightLight ) entries
    const [featuredEntries, setFeaturedEntries] = useState([]);
    useEffect(() => {
        async function fetchFeaturedEntries() {
            const entries = await getEntries(
                "toanPhatMarketNews",
                locale,
                {
                    order: '-sys.createdAt',
                    limit: 5,
                    "fields.hightLight": "true"
                }
                );
            setFeaturedEntries(shortenEntries(entries));
        };
        fetchFeaturedEntries();
    }, []);

    // Fetch news entries
    const [newsEntries, setNewsEntries] = useState([]);
    useEffect(() => {
        async function fetchNewsEntries() {
            const entries = await getEntries(
                "toanPhatMarketNews",
                locale,
                {
                    order: '-sys.createdAt',
                    limit: 9,
                    "fields.type": "news"
                }
                );
            setNewsEntries(shortenEntries(entries));
        };
        fetchNewsEntries();
    }, []);

    // Fetch blog entries
    const [blogEntries, setBlogEntries] = useState([]);
    useEffect(() => {
        async function fetchBlogEntries() {
            const entries = await getEntries(
                "toanPhatMarketNews",
                locale,
                {
                    order: '-sys.createdAt',
                    limit: 9,
                    "fields.type": "blog"
                }
                );
            setBlogEntries(shortenEntries(entries));
        };
        fetchBlogEntries();
    }, []);

    // Fetch promotion entries
    const [promotionEntries, setPromotionEntries] = useState([]);
    useEffect(() => {
        async function fetchPromotionEntries() {
            const entries = await getEntries(
                "toanPhatMarketNews",
                locale,
                {
                    order: '-sys.createdAt',
                    limit: 9,
                    "fields.type": "promo"
                }
                );
            setPromotionEntries(shortenEntries(entries));
        };
        fetchPromotionEntries();
    }, []);




    return(
        <>
            {console.log(heroEntries)}
            <SlickSlider entries={heroEntries} />

        </>
    )
}