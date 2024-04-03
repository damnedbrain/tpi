import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";

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

export default function ThiTruong() {
    const router = useRouter();
    const locale = router.locale;

    // Prep the loading state
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [newsEntries, setNewsEntries] = useState([]);


    const [pageNo, setPageNo] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 15;

    useEffect(() => {
        loadEntries(0);
    }, []);

    const loadEntries = async (pageNo) => {
        setIsLoading(true);
        try {
            const res = await getEntries(
                                "toanPhatMarketNews", 
                                locale, 
                                { order: '-sys.createdAt', 
                                  limit: pageSize, 
                                  skip: (pageNo-1) * pageSize, 
                                  "fields.type": "news" 
                                });
            setNewsEntries(shortenEntries(res));
            setPageCount(Math.ceil(res.total / pageSize));
        } catch (error) {
            setError(error);
            console.error("Error fetching data:", error);
        }
        setIsLoading(false);
    }

    // useEffect(() => {
    // // Fetch data
    // Promise.all([
    //     // getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 5, "fields.promo": "true" }),
    //     // getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 5, "fields.hightLight": "true" }),
    //     getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 15, "fields.type": "news" }),
    //     // getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 9, "fields.type": "blog" }),
    //     // getEntries("toanPhatMarketNews", locale, { order: '-sys.createdAt', limit: 9, "fields.type": "promo" })
    // ]).then(([news]) => {
    //     // Set data in state
    //     // setHeroEntries(shortenEntries(hero));
    //     // setFeaturedEntries(shortenEntries(feature));
    //     setNewsEntries(shortenEntries(news));
    //     // setBlogEntries(shortenEntries(blogs));
    //     // setPromotionEntries(shortenEntries(promotions));
    //     // Set loading state to false
    //     setIsLoading(false);
    // }).catch((error) => {
    //     setError(error);
    //     console.error("Error fetching data:", error);
        
    //     // Set loading state to false
    //     setIsLoading(false);
    // }, []);
    // });

    const handlePageChange = (data) => {
        let selected = data.selected;
        router.push(`/thi-truong/thi-truong/page/${selected + 1}`);
        loadEntries(selected);
    }


    // Render
    if (isLoading) {
    return <div className="flex flex-col font-fold font-3xl items-center justify-center text-slate-800 mt-24">Loading...</div>; // Or your custom loading component
    }

    return (
        <>            
            <div className="flex flex-row max-w-7xl h-auto m-auto">
                <div className='flex flex-col w-4/5 items-center justify-center mt-8'>
                    <h1 className="text-4xl font-extrabold col-span-3 row-span-1 mt-4 mb-2">
                        {locale === "en" ? "News" : "Thị trường"}
                    </h1>
                    
                    <div className="bg-slate-200 w-1/3 h-1 ml-4 mr-4"></div>
                    <div className="flex flex-col m-auto mt-12">
                        <EntriesWithPagination entries={newsEntries} />                
                        <ReactPaginate
                            previousLabel={locale === 'en' ? 'Previous' : 'Trang trước'}
                            nextLabel={locale === 'en' ? 'Next' : 'Trang kế'}
                            // breakLabel={'...'}
                            // breakClassName={'break-me'}
                            pageCount={5}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            // onPageChange={handlePageClick}
                            containerClassName="flex flex-row w-2/5 h-auto m-auto mt-8 items-center justify-center space-x-1"
                            pageClassName="w-24 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-200 cursor-pointer"
                            previousClassName="w-full h-full flex items-center justify-center border border-gray-300 rounded hover:bg-gray-200 cursor-pointer"
                            nextClassName="w-full h-full flex items-center justify-center border border-gray-300 rounded hover:bg-gray-200 cursor-pointer"
                            activeClassName="w-24 h-8 flex items-center justify-center border border-gray-300 bg-gray-200 rounded cursor-pointer"
                            disabledClassName="w-full h-full flex items-center justify-center border border-gray-300 bg-gray-100 rounded cursor-not-allowed"
                        />
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