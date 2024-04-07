import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { getEntries } from "@/components/contentful/ContentfulService";
import SlickSlider from "@/components/layout/slick-slider-carousel";
import FeaturedEntries from "@/components/content-ui/FeaturedEntries";
import HighlightFeaturedEntries from "@/components/content-ui/HighlightFeaturedEntries";
import NewsEntries from "@/components/content-ui/NewsEntries";
import BlogEntries from "@/components/content-ui/BlogEntries";
import PromotionEntries from "@/components/content-ui/PromotionEntries";

import TopBanner from '@assets/thi-truong-banner/top.jpg';
import BottomBanner from '@assets/thi-truong-banner/bottom.jpg';

import { videoList } from "@/constants/video-list";
import { formatDate } from "@/components/api/FormatDateTime";

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
            setHeroEntries(shortenEntries(hero.items));
            setFeaturedEntries(shortenEntries(feature.items));
            setNewsEntries(shortenEntries(news.items));
            setBlogEntries(shortenEntries(blogs.items));
            setPromotionEntries(shortenEntries(promotions.items));
            // Set loading state to false
            setIsLoading(false);
        }).catch((error) => {
            setError(error);
            console.error("Error fetching data:", error);
            
            // Set loading state to false
            setIsLoading(false);
        }, []);
    }, [locale]);

    // Render
    if (isLoading) {
    return <div className="flex flex-col font-fold font-3xl items-center justify-center">Loading...</div>; // Or your custom loading component
    }


    return <>
        <Head>
            <title>
                {locale === "en" ? "TOAN PHAT GROUP - News" : "Tập đoàn Toàn Phát - Tin tức thị trường"}
            </title>
        </Head>
        {/* {console.log(newsEntries, blogEntries, promotionEntries, heroEntries, featuredEntries)} */}
        <SlickSlider entries={heroEntries} />
        <FeaturedEntries newsEntries={newsEntries} blogEntries={blogEntries} promotionEntries={promotionEntries} />
        <div className="w-full bg-slate-200 mt-8 p-4">
            <HighlightFeaturedEntries entries={featuredEntries} />
        </div>
        <div className="flex flex-row max-w-7xl h-auto m-auto">
            <div className="flex flex-col w-4/5 m-auto">
                <NewsEntries entries={newsEntries} />
                <BlogEntries entries={blogEntries} />
                <PromotionEntries entries={promotionEntries} />
            </div>
            <div className="flex flex-col w-1/5 mt-28">
                <div className="round-xl mb-40 p-3">
                    <Image
                        className="round-xl"
                        src={TopBanner}
                        alt="Top Banner"
                        style={{
                            maxWidth: "100%",
                            // height: "auto"
                        }} />
                </div>
                <div className="round-xl mb-40 p-3">
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
        <div className="flex flex-col max-w-7xl h-auto m-auto mt-16">
            <div>
                <h1 className="text-5xl text-bold p-4 text-green-700">Video</h1>
                <div className="bg-slate-100 w-full h-1 ml-4 mr-4"></div>
            </div>
            <div className="flex flex-row w-full h-auto p-2">
                    <div className="w-1/3 p-3">
                        <div className="mt-8">
                            <h1 className="text-2xl text-bold text-left p-1">{videoList[0].title}</h1>
                            <div>
                                <p>{formatDate(videoList[0].date)}</p>
                            </div>
                            <iframe
                                className="w-full"
                                src={`https://www.youtube.com/embed/${videoList[0].ytbid}`}
                                title={videoList[0].title} frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen />
                        </div>
                        <div className="mt-8">
                            <h1 className="text-2xl text-bold text-left p-1">{videoList[1].title}</h1>
                            <div>
                                <p>{formatDate(videoList[1].date)}</p>
                            </div>
                            <iframe
                                className="w-full h-auto"
                                src={`https://www.youtube.com/embed/${videoList[1].ytbid}`}
                                title={videoList[1].title} frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen />
                        </div>
                    </div>
                    <div className="w-2/3 mt-8 p-3 h-full">
                        <Link href={`https://www.youtube.com/embed/${videoList[4].ytbid}`}>
                            <h1 className="text-2xl text-bold text-left p-1">{videoList[4].title}</h1>
                        </Link>
                        <div>
                            <p>{formatDate(videoList[4].date)}</p>
                        </div>
                        <iframe
                            className="w-full h-96"
                            src={`https://www.youtube.com/embed/${videoList[4].ytbid}`}
                            title={videoList[4].title} frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen />
                    </div>
            </div>
        </div>
    </>;
}