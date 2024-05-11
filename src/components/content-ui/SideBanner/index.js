import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getEntries } from "@/components/contentful/ContentfulService";



export default function SideBanner() {
    const [banner, setBanner] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadBanner();
    }, [])
    
    const loadBanner  = async() => {
        setIsLoading(true);
        try {
            const res = await getEntries("toanPhatBanner");
            setBanner(res.items);

        } catch (error) {
            console.log(error);
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
            <div className="rounded-xl mb-40 p-4">
                <Link href="/kho-lanh-cong-nghiep" className='cursor-pointer'>
                    <Image
                        className="rounded-xl"
                        src={banner[0] ? `https:${banner[1].fields.banner.fields.file.url}` : TopBanner}
                        width={banner[0] ? banner[1].fields.banner.fields.file.details.image.width : 300}
                        height={banner[0] ? banner[1].fields.banner.fields.file.details.image.height : 300}
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
                        src={banner[0] ? `https:${banner[0].fields.banner.fields.file.url}` : BottomBanner}
                        width={banner[0] ? banner[0].fields.banner.fields.file.details.image.width : 300}
                        height={banner[0] ? banner[0].fields.banner.fields.file.details.image.height : 300}
                        alt="Top Banner"
                        style={{
                            maxWidth: "100%",
                            // height: "auto"
                        }} />
                </Link>
            </div>
        </>
    )
}