import { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import BreadCrump from '@/components/layout/breadcrump';

import product1 from '@/assets/chieu-xa/pro-1.png';
import product10 from '@/assets/chieu-xa/pro-10.png';
import product11 from '@/assets/chieu-xa/pro-11.png';
import product12 from '@/assets/chieu-xa/pro-12.png';
import product2 from '@/assets/chieu-xa/pro-2.png';
import product3 from '@/assets/chieu-xa/pro-3.png';
import product4 from '@/assets/chieu-xa/pro-4.png';
import product5 from '@/assets/chieu-xa/pro-5.png';
import product6 from '@/assets/chieu-xa/pro-6.png';
import product7 from '@/assets/chieu-xa/pro-7.png';
import product8 from '@/assets/chieu-xa/pro-8.png';
import product9 from '@/assets/chieu-xa/pro-9.png';
import {
  foodIrradiationSystem,
  productOfIrradiation,
} from '@/constants/language-option';

export default function ChieuXa() {

    const productImages = [
        product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12,
    ]

    const router = useRouter();
    const locale = router.locale;
    const foodIrradiationSystemLocale = foodIrradiationSystem.find(item => item.locale === locale);
    const productOfIrradiationLocale = productOfIrradiation.find(item => item.locale === locale);

    const [currentTab, setCurrentTab] = useState('tab1');
    return (
        <>
            <Head>
            <title>
                {locale === "en-US" ? "TOANPHAT GROUP - Irradiation" : "TOANPHAT GROUP- Chiếu xạ"}
            </title>
            <meta name="keywords" content={locale === "en-US" ? "Irradiation, What's Irradiation, Toan Phat Irradiation Co ltd, Irradiation companies in Vietnam, Toan Phat Irradiation, Preserved by irradiation, Irradiation center, Irradiation centers in Vietnam, Food irradiation machine, Irradiation fruits for exported, What is gamma ray irradiation?, Gamma ray irradiation, Fruit irradiation machine, Irradiation and sterilization center, What is the use of fruit irradiation, Seed irradiation, Irradiation is a preservation method, Seed irradiation to improve plant varieties, Advantages of irradiation preservation method, Irradiation in agriculture, Irradiation to kill microorganisms, Irradiation method in agriculture, What is ebeam irradiation?, Ebeam irradiation, What is x-ray irradiation, X-ray irradiation" :
                                                             " Chieu xa, Chiếu xạ là gì, Công ty TNHH Chiếu xạ Toàn Phát, Các công ty chiếu xạ ở Việt Nam, Các cơ sở chiếu xạ sản ở Việt Nam, Công ty chiếu xạ, Nhà máy chiếu xạ Toàn Phát, Bảo quản bằng chiếu xa, Trung tâm chiếu xạ, Các trung tâm chiếu xạ sản ở Việt Nam, Máy chiếu xạ thực phẩm, Chiếu xạ trái cây xuất khẩu, Chiếu xạ tia gamma là gì, Chiếu xạ tia gamma, Máy chiếu xạ trái cây, Trung tâm chiếu xạ khử trùng, Chiếu xạ trái cây để làm gì, Chiếu xạ hạt giống, Chiếu xạ là phương pháp bảo quản, Chiếu xạ hạt giống để cải tạo giống cây trồng, Ưu điểm phương pháp bảo quản bằng chiếu xạ, Chiếu xạ trong nông nghiệp, Chiếu xạ để diệt vi sinh vật, Phương pháp chiếu xạ trong nông nghiệp, chiếu xạ ebeam là gì, chiếu xạ ebeam, chiếu xạ tia x là gì, chiếu xạ tia x"} />
            </Head>
            <div className="flex flex-col md:flex-col justify-center items-center max-w-7xl h-auto m-auto mt-4 p-2">
                {/* <div className='w-full left-0 items-start justify-start self-start italic px-4 py-2 bg-slate-100'>
                    <BreadCrump />
                </div> */}
                <div className="flex flex-col items-center justify-end mt-6">
                    <div className="flex flex-row ">
                        <h1 className="text-bold text-gray-400 text-6xl p-4">1</h1>
                        <h1 className="text-bold text-green-800 text-6xl p-4">
                            {foodIrradiationSystemLocale.title}
                        </h1>
                    </div>
                    <p className="flex text-sm whitespace-pre-line mt-16 leading-loose">
                        {foodIrradiationSystemLocale.desc}
                    </p>

                    {/*METHOD IRRADIATION*/}
                    <div className="bg-white shadow-md rounded my-6">
                        <div className="flex items-end">
                            <button
                                className={`rounded-t-xl p-4  w-1/3 py-4 ${currentTab === 'tab1' ? 'bg-green-800 text-white border-t-2 border-l-2 border-r-2 border-green-800' : 'text-slate-800'}`}
                                onClick={() => setCurrentTab('tab1')}
                            >
                                {foodIrradiationSystemLocale.subDesc[0].title}
                            </button>
                            <button
                                className={`rounded-t-xl p-4 w-1/3 py-4 ${currentTab === 'tab2' ? 'bg-green-800 text-white border-t-2 border-l-2 border-r-2 border-green-800' : 'text-slate-800'}`}
                                onClick={() => setCurrentTab('tab2')}
                            >
                                {foodIrradiationSystemLocale.subDesc[1].title}
                            </button>
                            <button
                                className={`rounded-t-xl p-4 w-1/3 py-4 ${currentTab === 'tab3' ? 'bg-green-800 text-white border-t-2 border-l-2 border-r-2 border-green-800' : 'text-slate-800'}`}
                                onClick={() => setCurrentTab('tab3')}
                            >
                                {foodIrradiationSystemLocale.subDesc[2].title}
                            </button>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            {currentTab === 'tab1' && (
                            <div className="p-4 items-center justify-center border-t-2 border-green-800">
                                <div className="flex flex-col items-center justify-center p-4">
                                    <Image src={foodIrradiationSystemLocale.subDesc[0].imgSrc} alt="food-irradiation" width={500} height={500} className="justify-self-center" />
                                </div>
                                <p className="text-black text-sm leading-loose">
                                {foodIrradiationSystemLocale.subDesc[0].desc}
                                </p>
                                <h1 className="font-bold text-xl text-center mt-8 text-green-800">
                                    {foodIrradiationSystemLocale.subDesc[0].midTitle}
                                </h1>
                                <div className="grid grid-cols-2 grid-rows-2 gap-12 p-4 mt-8 leading-loose">
                                    {foodIrradiationSystemLocale.subDesc[0].desc2.map((item, index) => (
                                        <h1>{item.descc}</h1>
                                    ))}
                                </div>
                            </div>
                            )}
                            {currentTab === 'tab2' && (
                            <div className="p-4 items-center border-t-2 border-green-800">
                                <div className="flex flex-col items-center justify-center p-4">
                                    <Image src={foodIrradiationSystemLocale.subDesc[1].imgSrc} alt="food-irradiation" width={500} height={500} className="justify-self-center" />
                                </div>
                                <p className="text-black text-sm leading-loose">
                                {foodIrradiationSystemLocale.subDesc[1].desc}
                                </p>
                                <h1 className="font-bold text-xl text-center mt-8 text-green-800">
                                    {foodIrradiationSystemLocale.subDesc[1].midTitle}
                                </h1>
                                <div className="grid grid-cols-2 grid-rows-2 gap-12 p-4 mt-8 leading-loose">
                                    {foodIrradiationSystemLocale.subDesc[1].desc2.map((item, index) => (
                                        <h1>{item.descc}</h1>
                                    ))}
                                </div>
                            </div>
                            )}
                            {currentTab === 'tab3' && (
                            <div className="p-4 items-center border-t-2 border-green-800">
                                <div className="flex flex-col items-center justify-center p-4">
                                    <Image src={foodIrradiationSystemLocale.subDesc[2].imgSrc} alt="food-irradiation" width={500} height={500} className="justify-self-center" />
                                </div>
                                <p className="text-black text-sm leading-loose">
                                {foodIrradiationSystemLocale.subDesc[2].desc}
                                </p>
                                <h1 className="font-bold text-xl text-center mt-8 text-green-800">
                                    {foodIrradiationSystemLocale.subDesc[2].midTitle}
                                </h1>
                                <div className="grid grid-cols-2 grid-rows-2 gap-12 p-4 mt-8 leading-loose">
                                    {foodIrradiationSystemLocale.subDesc[2].desc2.map((item, index) => (
                                        <h1>{item.descc}</h1>
                                    ))}
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                    {/*METHOD IRRADIATION END*/}

                    {/*PRODUCT OF IRRADIATION*/}
                    <div className="flex flex-col w-full items-center justify-center mt-12">
                        <h1 className="text-4xl text-green-800 font-extrabold col-span-3 row-span-1 mt-4 mb-2">
                            {productOfIrradiationLocale.title}
                        </h1>
                        <div className="bg-slate-200 w-1/3 h-1 ml-4 mr-4"></div>
                        <div className="grid grid-cols-4 w-full justify-center items-start mt-12">
                            {productImages.map((item, index) => (
                                <div className="flex flex-col items-center justify-center p-2">
                                    <div className="m-4 w-max h-auto">
                                        <Image src={item} alt="product" width={72} height={72} className="rounded-full p-2 bg-green-100" />
                                    </div>
                                    <h1 className='text-center'>
                                        {productOfIrradiationLocale.subDesc[index].desc}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*PRODUCT OF IRRADIATION END*/}
      
                </div>
            </div>

        </>
    )
}
