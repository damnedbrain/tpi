import { useRouter } from "next/router"
import { getEntries } from "@/components/contentful/ContentfulService";
import { useEffect, useState } from "react";

import SlickSlider from "@/components/layout/slick-slider-carousel";

import { bestServices } from "@/constants/language-option";
import IconTitleContentBackgroundNumber from "@/components/content-ui/icon-title-content-background-number";

export default function Home() {
    const locale = useRouter().locale;

    const bestServicesLocale = bestServices.find(item => item.locale === locale);

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        async function getPageEntries() {
            const entries = await getEntries(
                "toanPhatMarketNews", 
                locale, 
                { 
                    order: "-sys.createdAt",
                    limit: 10,
                    "fields.homePage": "true"
                });

            setEntries(entries);
        }
        getPageEntries();
    }, []);

    return(
        <>
            {/* {console.log(entries)} */}
            <SlickSlider entries={entries} filterField='promo' />
            <div className="flex flex-col max-w-7xl h-auto">
                {bestServicesLocale.sub.map((item, index) => (
                    <IconTitleContentBackgroundNumber 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        content={item.content}
                        background={item.background}
                        number={item.number} />
                ))}
            </div>
        </>
    )
}
