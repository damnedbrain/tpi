import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { getEntries } from "@/components/strapi/StrapiContentService";
import BottomBanner from "@assets/thi-truong-banner/bottom.jpg";
import TopBanner from "@assets/thi-truong-banner/top.jpg";

export default function SideBanner({main = false}) {
    const router = useRouter();
    const locale = router.locale;
    const [banner, setBanner] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadBanner = async () => {
            setIsLoading(true);
            try {
                const res = await getEntries("toanPhatBanner", locale, { order: "-sys.createdAt" });
                setBanner(res.items);
            } catch (error) {
                console.error("Error loading side banners:", error);
            }
            setIsLoading(false);
        }
        loadBanner();
    }, [locale])
    
    if (isLoading) {
        return <div 
                className="flex flex-col font-fold font-3xl items-center justify-center text-slate-800 mt-24">
                    Loading...
                </div>
    }
    const botBannerMargin = main ? "mt-48" : "mb-40";
    const topBanner = banner[1] || null;
    const bottomBanner = banner[0] || null;

    return ( 
        <>
            <div className="rounded-xl mb-40 p-4">
                <Link href={topBanner?.fields?.link || '#'} className='cursor-pointer'>
                    <Image
                        className="rounded-xl"
                        src={topBanner ? `https:${topBanner.fields.banner.fields.file.url}` : TopBanner}
                        width={topBanner ? topBanner.fields.banner.fields.file.details.image.width : 300}
                        height={topBanner ? topBanner.fields.banner.fields.file.details.image.height : 300}
                        alt="Top Banner"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </Link>
            </div>
            <div className={`rounded-xl p-4 ${botBannerMargin}`}>
                <Link href={bottomBanner?.fields?.link || '#'} className='cursor-pointer'>
                    <Image
                        className="rounded-xl"
                        src={bottomBanner ? `https:${bottomBanner.fields.banner.fields.file.url}` : BottomBanner}
                        width={bottomBanner ? bottomBanner.fields.banner.fields.file.details.image.width : 300}
                        height={bottomBanner ? bottomBanner.fields.banner.fields.file.details.image.height : 300}
                        alt="Bottom Banner"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </Link>
            </div>
        </>
    )
}
