import Image from 'next/image';
import Head from 'next/head';
import ComingSoonBG from '@assets/van-chuyen/coming_soon_bg.png';
import { useRouter } from 'next/router';

export default function VanChuyen() {
    const router = useRouter();
    const locale = router.locale;
    return (
        <>
            <Head>
                <title>
                    {locale === "en-US" ? "TOANPHAT Group - Transport Service" : "TOANPHAT Group - Dịch vụ vận chuyển"}
                </title>
            </Head>
            <div className="flex items-start justify-center relative min-h-screen">
                <Image 
                    src={ComingSoonBG} 
                    alt="coming-soon" 
                    fill
                    quality={100}
                    className="fixed w-full h-full object-cover top-0 left-0 right-0 bottom-0" 
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            {/* Other content goes here */}
                <h1 className="absolute text-2xl lg:text-6xl font-bold text-green-800 mt-48 z-50">COMING SOON</h1>
            </div>
        </>
    )
}
