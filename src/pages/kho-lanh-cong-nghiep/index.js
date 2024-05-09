import {
  useEffect,
  useState,
} from 'react';

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import BreadCrump from '@/components/layout/breadcrump';

import { getEntries } from '@/components/contentful/ContentfulService';
import SlickSlider from '@/components/layout/slick-slider-carousel';
import { coldStorageTopContent } from '@/constants/language-option';
import cold1 from '@assets/cold-storage/cold-1.png';
import cold2 from '@assets/cold-storage/cold-2.png';
import cold3 from '@assets/cold-storage/cold-3.png';
import cold4 from '@assets/cold-storage/cold-4.png';
import kholanh1 from '@assets/icons/kholanh-01.png';
import kholanh2 from '@assets/icons/kholanh-02.png';
import kholanh3 from '@assets/icons/kholanh-03.png';
import kholanh4 from '@assets/icons/kholanh-04.png';
import kholanh5 from '@assets/icons/kholanh-05.png';

export async function getServerSideProps({ req }) {
    const userAgent = req.headers['user-agent'];
    const isMobile = Boolean(userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ));
    return {
        props: {
            isMobile,
        }
    }
}

export default function KhoLanhCongNghiep({isMobile, ...otherProps}) {

    const animation = isMobile ? 'fade-up' : 'fade-left';
    const duration = isMobile ? 300 : 600;
    const delay = isMobile ? 0 : 50;

    const router = useRouter();
    const locale = router.locale;
    const coldStorageTopContentLocale = coldStorageTopContent.find(item => item.locale === locale);
    const kholanhIcons = [
        kholanh1, kholanh2, kholanh3, kholanh4, kholanh5
    ]

    const [bannerEntries, setBannerEntries] = useState([]);
    
    useEffect(() => {
        async function getBannerEntries() {
            const entries = await getEntries(
                "toanPhatMarketNews", 
                locale, 
                { 
                    order: "-sys.createdAt",
                    limit: 10,
                    "fields.promo": "true"
                });

            setBannerEntries(entries.items);
        }
        getBannerEntries();
    }, []);

    let heroEntries = bannerEntries.map((item, index) => {
        if (item.fields.promo) {
          return {
            url: item.fields.image.fields.file.url,
            alt: item.fields.title,
            slug: item.fields.slug,
            width: item.fields.image.fields.file.details.image.width,
            height: item.fields.image.fields.file.details.image.height,
            date: item.sys.createdAt,
          };
        }
    }).filter(Boolean);

    return (
        <>
        <Head>
            <title>
                {locale === "en-US" ? "TOAN PHAT - Industrial Storage" : "Kho Lạnh Toàn Phát (Long An) - Dịch vụ cho thuê kho lạnh"}
            </title>
            <meta name="keywords" content={ locale === "en-US" ? "toanphatgroup, toanphat group, toàn phát group, Cold storage rental service, Frozen storage rental service, Cold storage in Long An, Cold storage in Ben Luc, Frozen storage, Cold storage rental service in HCMC, Cold warehouse for rent in Phu An Thanh industrial park, Long Hau industrial park warehouse for rent, Cold storage price list, Cold storage rental price, Cold warehouse for rent, Cold storage for preserving agricultural products, Cold storage for fruit preservation" :
                                                                 "toanphatgroup, toanphat group, toàn phát group, Dịch vụ cho thuê kho lạnh, Cho thuê kho đông lạnh, Kho lạnh Long An, Kho lạnh Bến Lức, Kho đông lạnh, Cho thuê kho lạnh tại tphcm, Cho thuê kho kcn Phú An Thạnh, Cho thuê kho kcn long hậu, Bảng giá kho lạnh, Giá thuê kho lạnh, Cho thuê kho, Kho lạnh bảo quản nông sản, Kho lạnh bảo quản trái cây"} />
        </Head>
        <SlickSlider className='relative' entries={heroEntries}/>
        <div className="flex flex-col md:flex-col justify-center items-center max-w-7xl h-auto m-auto">
            {/* <div className='w-full left-0 items-start justify-start self-start italic px-4 py-2 bg-slate-100 mt-10'>
                <BreadCrump />
            </div> */}
            
            <div className="flex flex-row mt-4 justify-end items-end">
                <h1 data-aos={animation} data-aos-duration={duration} className="text-bold text-gray-400 text-5xl lg:text-7xl p-4">2</h1>
                <div>
                    <h1 data-aos={animation} data-aos-duration={duration} className="text-bold text-green-800 text-4xl lg:text-6xl p-4">
                        {coldStorageTopContentLocale.title}
                    </h1>
                    <div ></div>
                </div>
            </div>
            <div className="grid lg:flex lg:flex-row">
                {kholanhIcons.map((icon, index) => (
                    <div data-aos={animation} data-aos-duration={duration} data-aos-delay={index*delay} key={index} className="flex flex-col w-full p-4 items-center justify-start mt-8">
                        <Image key={index} src={icon} alt="kholanh-icon" className="w-12 h-auto" />
                        <h1 className="text-xl text-center leading-loose mt-4">
                            {coldStorageTopContentLocale.desc[index].descc}
                        </h1>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center justify-end mt-12">
                <h1 data-aos={animation} data-aos-duration={duration} className="text-5xl font-semiBold text-green-800">
                    {coldStorageTopContentLocale.midTitle}
                </h1>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-3 gap-8 mt-8 p-2">
                {coldStorageTopContentLocale.sub.map((item, index) => (
                    <div >
                        <h1 data-aos={animation} data-aos-duration={duration} data-aos-delay={index*delay} className="text-4xl lg:text-6xl text-slate-300">{index+1}</h1>
                        <h1 data-aos={animation} data-aos-duration={duration} data-aos-delay={index*delay*2} className="text-2xl lg:text-3xl text-green-800">{item.title}</h1>
                        <p data-aos={animation} data-aos-duration={duration} data-aos-delay={index*delay*3} className='leading-loose'>{item.desc}</p>
                    </div>

                ))}
            </div>
            <Image data-aos='fade-up' src={cold1} alt="cold-storage" className="w-full h-auto p-1" />
            <div  className="flex flex-row w-full mt-2">
                <Image data-aos={animation} data-aos-duration={duration} data-aos-delay={delay*0.5} src={cold2} alt="cold-storage" className="w-1/3 h-auto p-1" />
                <Image data-aos={animation} data-aos-duration={duration} data-aos-delay={delay} src={cold3} alt="cold-storage" className="w-1/3 h-auto p-1" />
                <Image data-aos={animation} data-aos-duration={duration} data-aos-delay={delay*1.5} src={cold4} alt="cold-storage" className="w-1/3 h-auto p-1" />
            </div>

        </div>
        </>
    )
}