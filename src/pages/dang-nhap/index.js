import Image from 'next/image';
import ComingSoonBG from '@assets/dang-nhap/bg.png';

export default function VanChuyen() {
    return (
        <>
            <Head>
                <title>
                    {locale === "en-US" ? "TOAN PHAT - Login" : "TOANPHAT GROUP - Đăng nhập"}
                </title>
            </Head>
            <div className="flex items-start justify-center relative min-h-screen">
                <Image 
                    src={ComingSoonBG} 
                    alt="coming-soon" 
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="fixed w-full h-full object-cover top-0 left-0 right-0 bottom-0" 
                />
            {/* Other content goes here */}
                <h1 className="absolute text-2xl lg:text-6xl font-bold text-green-800 mt-48 z-50">COMING SOON</h1>
            </div>
        </>
    )
}