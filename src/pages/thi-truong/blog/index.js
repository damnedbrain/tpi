import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

import { getEntries } from "@/components/contentful/ContentfulService";

import TopBanner from '@assets/thi-truong-banner/top.jpg';
import BottomBanner from '@assets/thi-truong-banner/bottom.jpg';

import EntriesWithPagination from "@/components/content-ui/EntriesPreviewWithPagination";

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

export default function Blog() {
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
        // getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 5, "fields.promo": "true" }),
        // getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 5, "fields.hightLight": "true" }),
        // getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 15, "fields.type": "news" }),
        getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 15, "fields.type": "blog" }),
        // getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 9, "fields.type": "promo" })
    ]).then(([blog]) => {
        // Set data in state
        // setHeroEntries(shortenEntries(hero));
        // setFeaturedEntries(shortenEntries(feature));
        // setNewsEntries(shortenEntries(news));
        setBlogEntries(shortenEntries(blog));
        // setPromotionEntries(shortenEntries(promotions));
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
    return <div className="flex flex-col font-fold font-3xl items-center justify-center">Loading...</div>; // Or your custom loading component
    }

    return (
        <>            
            <div className="flex flex-row max-w-7xl h-auto m-auto">
                <div className='flex flex-col w-4/5 items-center justify-center mt-8'>
                    <h1 className="text-4xl font-extrabold col-span-3 row-span-1 mt-4 mb-2">
                        {locale === "en" ? "Toan Phat Blog" : "Toàn Phát Blog"}
                    </h1>
                    
                    <div className="bg-slate-200 w-1/3 h-1 ml-4 mr-4"></div>
                    <div className="flex flex-col m-auto mt-12">
                        <EntriesWithPagination entries={blogEntries} pageNo={1} />                
                    </div>
                </div>                
                <div className="flex flex-col w-1/5 mt-36">
                    <div className="round-xl mb-1 p-3">
                        <Image
                            className="round-xl"
                            src={TopBanner}
                            alt="Top Banner"
                            style={{
                                maxWidth: "100%",
                                // height: "auto"
                            }} />
                    </div>
                    <div className="round-xl mb-1 p-3">
                        <Image
                            className="round-xl"
                            src={BottomBanner}
                            alt="Bottom Banner"
                            style={{
                                maxWidth: "100%",
                                // height: "auto"
                            }} />
                    </div>
                </div>
            </div>
        </>
    );
}