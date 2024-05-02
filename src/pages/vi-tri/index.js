import Head from 'next/head';
import { useRouter } from 'next/router';

import BreadCrump from '@/components/layout/breadcrump';

import VideoComponent from '@/components/content-ui/VideoComponent';
import { LocationMapContent } from '@/constants/language-option';

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

export default function ViTri({isMobile, ...otherProps}) {

    const animation = isMobile ? 'fade-up' : 'fade-left';
    const duration = isMobile ? 300 : 600;
    const delay = isMobile ? 0 : 250;
    const router = useRouter();
    const locale = router.locale;

    const LocationMapContentLocale = LocationMapContent.find((item) => item.locale === locale);

    return (
        <>
            <Head>
                <title>
                    {locale === "en-US" ? "TOAN PHAT - Location" : "TOAN PHAT - Location"}
                </title>
                <meta name="keywords" content={ locale === "en-US" ? "toanphatgroup, toanphat group, toàn phát group, Cold storage rental service, Frozen storage rental service, Cold storage in Long An, Cold storage in Ben Luc, Frozen storage, Cold storage rental service in HCMC, Cold warehouse for rent in Phu An Thanh industrial park, Long Hau industrial park warehouse for rent, Cold storage price list, Cold storage rental price, Cold warehouse for rent, Cold storage for preserving agricultural products, Cold storage for fruit preservation" :
                                                                    "toanphatgroup, toanphat group, toàn phát group, Dịch vụ cho thuê kho lạnh, Cho thuê kho đông lạnh, Kho lạnh Long An, Kho lạnh Bến Lức, Kho đông lạnh, Cho thuê kho lạnh tại tphcm, Cho thuê kho kcn Phú An Thạnh, Cho thuê kho kcn long hậu, Bảng giá kho lạnh, Giá thuê kho lạnh, Cho thuê kho, Kho lạnh bảo quản nông sản, Kho lạnh bảo quản trái cây"} />
            </Head>
            <div className="flex flex-col max-w-7xl w-full items-center justify-center m-auto h-auto mt-4 p-2">
                {/* <div className='w-full left-0 items-start justify-start self-start italic px-4 py-2 bg-slate-100'>
                    <BreadCrump />
                </div> */}
                <h1 data-aos={animation} className="text-4xl font-bold w-full text-left mt-6 text-green-800">
                    {LocationMapContentLocale.title}
                </h1>
                <div data-aos={animation} data-aos-delay='50' className="w-full flex flex-col md:flex-row justify-between items-center mt-8">
                    {locale === "vi" ? (
                        <VideoComponent videoSrc='/videos/location_map_video_eng.mp4' />
                    ) : (
                        <VideoComponent videoSrc='/videos/location_map_video_eng.mp4' />
                    )}
                </div>
                <p data-aos={animation} className="text-md leading-loose w-full text-left mt-8 text-black">
                    {LocationMapContentLocale.desc}
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                    {LocationMapContentLocale.sub.map((item, index) => (
                        <div data-aos={animation} data-aos-delay={index*50} key={index} className="flex flex-col lg:flex-row">
                            <h1 className="text-8xl font-semiBold text-center text-gray-200 p-2">{index + 1}</h1>
                            <p className="text-md text-black text-left mt-2 p-2">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}