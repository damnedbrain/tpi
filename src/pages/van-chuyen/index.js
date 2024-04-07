import Image from 'next/image';
import ComingSoonBG from '@assets/van-chuyen/coming_soon_bg.png';

export default function VanChuyen() {
    return (
        <div className="flex flex-col md:flex-col justify-center items-center max-w-7xl h-auto m-auto mt-36">
            <h1 className="text-6xl font-bold text-green-900">COMING SOON</h1>
            <Image src={ComingSoonBG} alt="coming-soon" className="w-full h-auto" />
        </div>
    )
}