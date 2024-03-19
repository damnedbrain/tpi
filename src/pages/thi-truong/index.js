import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { getEntries } from "@/components/contentful/ContentfulService";
import SlickSlider from "@/components/layout/slick-slider-carousel";
import FeaturedEntries from "@/components/content-ui/FeaturedEntries";

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
        }
    }).filter(Boolean);
}

export default function ThiTruong() {
    const router = useRouter();
    const locale = router.locale;

    // Prep the loading state
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [heroEntries, setHeroEntries] = useState([]);
    const [featuredEntries, setFeaturedEntries] = useState([]);
    const [newsEntries, setNewsEntries] = useState([]);
    const [blogEntries, setBlogEntries] = useState([]);
    const [promotionEntries, setPromotionEntries] = useState([]);

    useEffect(() => {
    // Fetch data
    Promise.all([
        getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 5, "fields.promo": "true" }),
        getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 5, "fields.hightLight": "true" }),
        getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 9, "fields.type": "news" }),
        getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 9, "fields.type": "blog" }),
        getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 9, "fields.type": "promo" })
    ]).then(([hero, feature, news, blogs, promotions]) => {
        // Set data in state
        setHeroEntries(shortenEntries(hero));
        setFeaturedEntries(shortenEntries(feature));
        setNewsEntries(shortenEntries(news));
        setBlogEntries(shortenEntries(blogs));
        setPromotionEntries(shortenEntries(promotions));
        // Set loading state to false
        setIsLoading(false);
    }).catch((error) => {
        setError(error);
        console.error("Error fetching data:", error);
        
        // Set loading state to false
        setIsLoading(false);
    }, []);
    });

    // Render
    if (isLoading) {
    return <div>Loading...</div>; // Or your custom loading component
    }

    return(
        <>
            {/* {console.log(newsEntries, blogEntries, promotionEntries, heroEntries, featuredEntries)} */}
            <SlickSlider entries={heroEntries} />
            <FeaturedEntries newsEntries={newsEntries} blogEntries={blogEntries} promotionEntries={promotionEntries} />
        </>
    )
}