import { useRouter } from "next/router"
import { getEntries } from "@/components/contentful/ContentfulService";
import { useEffect, useState } from "react";

import SlickSlider from "@/components/layout/slick-slider-carousel";

import { bestServices, LocationMapContent } from "@/constants/language-option";

import NumberTitleDescWithLink from "@/components/content-ui/NumberTitleDescWithLink";
import VideoComponent from "@/components/content-ui/VideoComponent";


export default function Home() {
    const locale = useRouter().locale;

    const bestServicesLocale = bestServices.find(item => item.locale === locale);
    const locationMapLocale = LocationMapContent.find(item => item.locale === locale);

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

    let heroEntries = entries.map((item, index) => {
        if (item.fields.promo) {
          return {
            url: item.fields.image.fields.file.url,
            alt: item.fields.title,
            width: item.fields.image.fields.file.details.image.width,
            height: item.fields.image.fields.file.details.image.height
          };
        }
    }).filter(Boolean);

    let homepageEntries = entries.map((item, index) => {
        if (!item.fields.promo) {
          return {
            url: item.fields.image.fields.file.url,
            alt: item.fields.title,
            width: item.fields.image.fields.file.details.image.width,
            height: item.fields.image.fields.file.details.image.height,
            desc: item.fields.desc,
          };
        }
      }).filter(Boolean);

    return(
        <>
            {/* {console.log(entries)} */}
            <SlickSlider entries={heroEntries}/>
            {/* Best Services section*/}
            <div className="flex flex-col md:flex-row max-w-7xl h-auto m-auto mt-8"> 
                {bestServicesLocale.sub.map((item, index) => (
                    <div className="animate-fadeInSlideIn w-full md:w-1/3">
                    <NumberTitleDescWithLink 
                        icon={item.icon} 
                        number={index+1} 
                        title={item.title} 
                        desc={item.desc} 
                        link={item.link} 
                        btnText={item.btnText} 
                        key={index}
                    />
                    </div>
                )
                )} 
            </div>
            {/*End Best Services section*/}
           
            {/*Video Location section*/}
            <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-8">
                <div className="w-4/5 md:w-1/2">
                    <h2 className="text-3xl text-center font-bold text-green-700 animate-fadeInSlideIn">
                        {locationMapLocale.title}
                    </h2>
                    <p className="text-center text-base text-gray-600 m-4 animate-fadeIn">
                        {locationMapLocale.desc}
                    </p>
                </div>
                <div className="w-4/5 md:w-1/2">
                    {locale === "en" ? 
                        <VideoComponent videoSrc="/videos/location_map_video_eng.mp4" /> :
                        <VideoComponent videoSrc="/videos/location_map_video.mp4" />
                    }
                </div>
            </div>
            {/* End Video Location section*/}

            {/*News Homepage section*/}
            <div className="flex flex-row md:flex-row max-w-7xl h-auto m-auto mt-8"> 
                <h2 className="text-3xl text-center font-bold text-green-700">
                    {locale === "en" ? "Latest News" : "Thị trường"}
                </h2>
                {homepageEntries.map((item, index) => (
                    <div className="animate-fadeInSlideIn w-full md:w-1/3">
                        <img src={item.url} alt={item.alt} width={item.width} height={item.height} />
                    </div>
                )
                )}
            </div>
        </>
    )
}
