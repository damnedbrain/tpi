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
                    "fields.tags[in]": "Chiếu Xạ"
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
                    {locale === "en-US" ? "TOAN PHAT - Irradiation News" : "TOAN PHAT - Irradiation News"}
                </title>
                <meta name='title' content={locale === "en-US" ? "TOAN PHAT - Irradiation News" : "TOAN PHAT - Irradiation News"}/>
                <meta name='description' content={locale === "en-US" ? "TOAN PHAT - Irradiation News" : "TOAN PHAT - Irradiation News"}/>
                {/* <meta name='image' content={`https:${entry.fields.thumbImage.fields.file.url}`} /> */}

                <meta itemProp='name' content={locale === "en-US" ? "TOAN PHAT - Irradiation News" : "TOAN PHAT - Irradiation News"}/>
                <meta itemProp='description' content={locale === "en-US" ? "TOAN PHAT - Irradiation News" : "TOAN PHAT - Irradiation News"}/>
                {/* <meta itemProp='image' content={`https:${entry.fields.thumbImage.fields.file.url}`} /> */}

                <meta property='og:url' content={'toanphatgroup.com/thi-truong/chieu-xa/'} />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={locale === "en-US" ? "TOAN PHAT - Irradiation News" : "TOAN PHAT - Irradiation News"}/>
                <meta property='og:description' content={locale === "en-US" ? "TOAN PHAT - Irradiation News" : "TOAN PHAT - Irradiation News"}/>
                {/* <meta property='og:image' content={`https:${entry.fields.thumbImage.fields.file.url}`} /> */}
                <meta name="keywords" content={ locale === "en-US" ? "toanphatgroup, toanphat group, toàn phát group, Cold storage rental service, Frozen storage rental service, Cold storage in Long An, Cold storage in Ben Luc, Frozen storage, Cold storage rental service in HCMC, Cold warehouse for rent in Phu An Thanh industrial park, Long Hau industrial park warehouse for rent, Cold storage price list, Cold storage rental price, Cold warehouse for rent, Cold storage for preserving agricultural products, Cold storage for fruit preservation, Irradiation, What's Irradiation, Toan Phat Irradiation Co ltd, Irradiation companies in Vietnam, Toan Phat Irradiation, Preserved by irradiation, Irradiation center, Irradiation centers in Vietnam, Food irradiation machine, Irradiation fruits for exported, What is gamma ray irradiation?, Gamma ray irradiation, Fruit irradiation machine, Irradiation and sterilization center, What is the use of fruit irradiation, Seed irradiation, Irradiation is a preservation method, Seed irradiation to improve plant varieties, Advantages of irradiation preservation method, Irradiation in agriculture, Irradiation to kill microorganisms, Irradiation method in agriculture, What is ebeam irradiation?, Ebeam irradiation, What is x-ray irradiation, X-ray irradiation" :
                                                                    "toanphatgroup, toanphat group, toàn phát group, Dịch vụ cho thuê kho lạnh, Cho thuê kho đông lạnh, Kho lạnh Long An, Kho lạnh Bến Lức, Kho đông lạnh, Cho thuê kho lạnh tại tphcm, Cho thuê kho kcn Phú An Thạnh, Cho thuê kho kcn long hậu, Bảng giá kho lạnh, Giá thuê kho lạnh, Cho thuê kho, Kho lạnh bảo quản nông sản, Kho lạnh bảo quản trái cây, Chieu xa, Chiếu xạ là gì, Công ty TNHH Chiếu xạ Toàn Phát, Các công ty chiếu xạ ở Việt Nam, Các cơ sở chiếu xạ sản ở Việt Nam, Công ty chiếu xạ, Nhà máy chiếu xạ Toàn Phát, Bảo quản bằng chiếu xa, Trung tâm chiếu xạ, Các trung tâm chiếu xạ sản ở Việt Nam, Máy chiếu xạ thực phẩm, Chiếu xạ trái cây xuất khẩu, Chiếu xạ tia gamma là gì, Chiếu xạ tia gamma, Máy chiếu xạ trái cây, Trung tâm chiếu xạ khử trùng, Chiếu xạ trái cây để làm gì, Chiếu xạ hạt giống, Chiếu xạ là phương pháp bảo quản, Chiếu xạ hạt giống để cải tạo giống cây trồng, Ưu điểm phương pháp bảo quản bằng chiếu xạ, Chiếu xạ trong nông nghiệp, Chiếu xạ để diệt vi sinh vật, Phương pháp chiếu xạ trong nông nghiệp, chiếu xạ ebeam là gì, chiếu xạ ebeam, chiếu xạ tia x là gì, chiếu xạ tia x"} />
            </Head>            
            <div className="flex flex-col max-w-7xl h-auto m-auto p-1 items-center justify-center">
                <h1 className="text-4xl font-extrabold col-span-3 row-span-1 mt-4 mb-2">
                    {locale === "en-US" ? "Irradiation" : "Chiếu Xạ"}
                </h1>
                <div className="bg-slate-200 w-1/3 h-1 ml-4 mr-4"></div>
                <div className='flex flex-row'>
                    <div className='flex flex-col lg:w-4/5 items-center justify-start mt-8'>                        
                        <div className="flex flex-col m-0">
                            <EntriesWithPagination entries={newsEntries} />
                            <Pagination currentPage={pageIndex + 1} pageCount={pageCount} basePageURL="chieu-xa" />
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