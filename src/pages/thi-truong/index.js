import {
  useEffect,
  useState,
} from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { formatDate } from '@/components/api/FormatDateTime';
import BlogEntries from '@/components/content-ui/BlogEntries';
import FeaturedEntries from '@/components/content-ui/FeaturedEntries';
import HighlightFeaturedEntries
  from '@/components/content-ui/HighlightFeaturedEntries';
import NewsEntries from '@/components/content-ui/NewsEntries';
import PromotionEntries from '@/components/content-ui/PromotionEntries';
import { getEntries } from '@/components/contentful/ContentfulService';
import SlickSlider from '@/components/layout/slick-slider-carousel';
import { videoList } from '@/constants/video-list';
import BottomBanner from '@assets/thi-truong-banner/bottom.jpg';
import TopBanner from '@assets/thi-truong-banner/top.jpg';

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
            tags: item.fields.tags, 
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
                {locale === "en-US" ? "TOANPHAT GROUP - News" : "TOANPHAT GROUP- Tin tức thị trường"}
            </title>
            <meta name="keywords" content={ locale === "en-US" ? "toanphatgroup, toanphat group, toàn phát group, Cold storage rental service, Frozen storage rental service, Cold storage in Long An, Cold storage in Ben Luc, Frozen storage, Cold storage rental service in HCMC, Cold warehouse for rent in Phu An Thanh industrial park, Long Hau industrial park warehouse for rent, Cold storage price list, Cold storage rental price, Cold warehouse for rent, Cold storage for preserving agricultural products, Cold storage for fruit preservation, Irradiation, What's Irradiation, Toan Phat Irradiation Co ltd, Irradiation companies in Vietnam, Toan Phat Irradiation, Preserved by irradiation, Irradiation center, Irradiation centers in Vietnam, Food irradiation machine, Irradiation fruits for exported, What is gamma ray irradiation?, Gamma ray irradiation, Fruit irradiation machine, Irradiation and sterilization center, What is the use of fruit irradiation, Seed irradiation, Irradiation is a preservation method, Seed irradiation to improve plant varieties, Advantages of irradiation preservation method, Irradiation in agriculture, Irradiation to kill microorganisms, Irradiation method in agriculture, What is ebeam irradiation?, Ebeam irradiation, What is x-ray irradiation, X-ray irradiation" :
                                                                "toanphatgroup, toanphat group, toàn phát group, Dịch vụ cho thuê kho lạnh, Cho thuê kho đông lạnh, Kho lạnh Long An, Kho lạnh Bến Lức, Kho đông lạnh, Cho thuê kho lạnh tại tphcm, Cho thuê kho kcn Phú An Thạnh, Cho thuê kho kcn long hậu, Bảng giá kho lạnh, Giá thuê kho lạnh, Cho thuê kho, Kho lạnh bảo quản nông sản, Kho lạnh bảo quản trái cây, Chieu xa, Chiếu xạ là gì, Công ty TNHH Chiếu xạ Toàn Phát, Các công ty chiếu xạ ở Việt Nam, Các cơ sở chiếu xạ sản ở Việt Nam, Công ty chiếu xạ, Nhà máy chiếu xạ Toàn Phát, Bảo quản bằng chiếu xa, Trung tâm chiếu xạ, Các trung tâm chiếu xạ sản ở Việt Nam, Máy chiếu xạ thực phẩm, Chiếu xạ trái cây xuất khẩu, Chiếu xạ tia gamma là gì, Chiếu xạ tia gamma, Máy chiếu xạ trái cây, Trung tâm chiếu xạ khử trùng, Chiếu xạ trái cây để làm gì, Chiếu xạ hạt giống, Chiếu xạ là phương pháp bảo quản, Chiếu xạ hạt giống để cải tạo giống cây trồng, Ưu điểm phương pháp bảo quản bằng chiếu xạ, Chiếu xạ trong nông nghiệp, Chiếu xạ để diệt vi sinh vật, Phương pháp chiếu xạ trong nông nghiệp, chiếu xạ ebeam là gì, chiếu xạ ebeam, chiếu xạ tia x là gì, chiếu xạ tia x"} />
        </Head>
        {/* {console.log(newsEntries, blogEntries, promotionEntries, heroEntries, featuredEntries)} */}
        <SlickSlider entries={heroEntries} />
        <FeaturedEntries newsEntries={newsEntries} blogEntries={blogEntries} promotionEntries={promotionEntries} />
        <div className="hidden lg:block w-full bg-slate-200 mt-8 p-4">
            <HighlightFeaturedEntries entries={featuredEntries} />
        </div>
        <div className="flex flex-row max-w-7xl h-auto m-auto">
            <div className="flex flex-col w-4/5 m-auto">
                <NewsEntries entries={newsEntries} />
                <BlogEntries entries={blogEntries} />
                <PromotionEntries entries={promotionEntries} />
            </div>
            <div className="flex flex-col w-1/5 mt-28 px-1 lg:p-3">
                <div className="rounded-xl mb-4 lg:mb-40 lg:p-3">
                    <Link href="/kho-lanh-cong-nghiep" className='cursor-pointer'>
                        <Image
                            className="rounded-xl"
                            src={TopBanner}
                            alt="Top Banner"
                            style={{
                                maxWidth: "100%",
                                // height: "auto"
                            }} />
                    </Link>
                </div>
                <div className="rounded-xl mb-40 lg:p-3">
                    <Link href="chieu-xa" className='cursor-pointer'>
                        <Image
                            className="rounded-xl"
                            src={BottomBanner}
                            alt="Bottom Banner"
                            style={{
                                maxWidth: "100%",
                                // height: "auto"
                            }} />
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex flex-col max-w-7xl h-auto m-auto mt-16">
            <div>
                <h1 className="text-5xl text-bold p-4 text-black">Media</h1>
                <div className="bg-slate-100 w-full h-1 px-4"></div>
            </div>
            <div className="flex flex-col lg:flex-row w-full h-auto p-2">
                    <div className="w-full lg:w-1/3 p-3">
                        <div className="mt-8">
                            <div>
                                <p>{formatDate(videoList[0].date)}</p>
                            </div>
                            <h1 className="text-green-800 text-2xl text-bold text-left p-1">{videoList[0].title}</h1>
                            
                            <iframe
                                className="w-full"
                                src={`https://www.youtube.com/embed/${videoList[0].ytbid}`}
                                title={videoList[0].title} frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen />
                        </div>
                        <div className="mt-8">
                            <div>
                                <p>{formatDate(videoList[1].date)}</p>
                            </div>
                            <h1 className="text-green-800 text-2xl text-bold text-left p-1">{videoList[1].title}</h1>
                            
                            <iframe
                                className="w-full h-auto"
                                src={`https://www.youtube.com/embed/${videoList[1].ytbid}`}
                                title={videoList[1].title} frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen />
                        </div>
                    </div>
                    <div className=" w-full lg:w-2/3 mt-8 p-3 h-full">
                        <div>
                            <p>{formatDate(videoList[4].date)}</p>
                        </div>
                        <Link href={`https://www.youtube.com/embed/${videoList[4].ytbid}`}>
                            <h1 className="text-green-800 text-2xl text-bold text-left p-1">{videoList[4].title}</h1>
                        </Link>
                        
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