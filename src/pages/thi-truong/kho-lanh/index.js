import React, {
  useEffect,
  useState,
} from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import EntriesWithPagination
  from '@/components/content-ui/EntriesPreviewWithPagination';
import Pagination from '@/components/content-ui/Pagination';
import { getEntries } from '@/components/contentful/ContentfulService';
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

export default function ThiTruongPage() {
    const router = useRouter();
    const { page } = router.query;
    
    const locale = router.locale;
    const [isLoading, setIsLoading] = useState(true);
    const [newsEntries, setNewsEntries] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [error, setError] = useState(null);
    const [pageCount, setPageCount] = useState(1);
    const pageSize = 15;

    useEffect(() => {
        const pageNumber = page ? parseInt(page, 10) : 0;
        const currentPageIndex = pageNumber === 0 ? 0 : pageNumber - 1;
        setPageIndex(currentPageIndex);
        loadEntries(currentPageIndex);
    }, [page]);

    const loadEntries = async (pageIndex) => {
        setIsLoading(true);
        try {
            const res = await getEntries(
                "toanPhatMarketNews", 
                locale, 
                { 
                    order: '-sys.createdAt', 
                    limit: pageSize, 
                    skip: pageIndex * pageSize, 
                    "fields.tags[in]": "Kho Lạnh"
                }
            );
            setNewsEntries(shortenEntries(res.items));
            setPageCount(Math.ceil(res.total / pageSize));
        } catch (error) {
            setError(error);
            console.error("Error fetching data:", error);
        }
        setIsLoading(false);
    }

    

    if (isLoading) {
        return <div 
                className="flex flex-col font-fold font-3xl items-center justify-center text-slate-800 mt-24">
                    Loading...
                </div>
    }
    
    return (
        <>
            <Head>
            <title>
                {locale === "en-US" ? "TOANPHAT GROUP" : "TOANPHAT GROUP"}
            </title>
            </Head>             
            <div className="flex flex-col max-w-7xl h-auto m-auto p-1 items-center justify-center">
                <h1 className="text-4xl font-extrabold col-span-3 row-span-1 mt-4 mb-2">
                    {locale === "en-US" ? "Cold Storage" : "Kho lạnh công nghiệp"}
                </h1>
                <div className="bg-slate-200 w-1/3 h-1 ml-4 mr-4"></div>
                <div className='flex flex-row'>
                    <div className='flex flex-col lg:w-4/5 items-center justify-start mt-8'>                        
                        <div className="flex flex-col m-0">
                            <EntriesWithPagination entries={newsEntries} />
                            <Pagination currentPage={pageIndex + 1} pageCount={pageCount} basePageURL="kho-lanh" />
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col w-1/5 mt-8">
                        <div className="rounded-xl mb-40 p-4">
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
                        <div className="rounded-xl mb-40 p-4">
                            <Link href="/chieu-xa" className='cursor-pointer'>
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
            </div>
        </>
    )
}