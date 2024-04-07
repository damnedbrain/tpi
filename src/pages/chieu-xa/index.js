import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

import product1 from "@/assets/chieu-xa/pro-1.png";
import product2 from "@/assets/chieu-xa/pro-2.png";
import product3 from "@/assets/chieu-xa/pro-3.png";
import product4 from "@/assets/chieu-xa/pro-4.png";
import product5 from "@/assets/chieu-xa/pro-5.png";
import product6 from "@/assets/chieu-xa/pro-6.png";
import product7 from "@/assets/chieu-xa/pro-7.png";
import product8 from "@/assets/chieu-xa/pro-8.png";
import product9 from "@/assets/chieu-xa/pro-9.png";
import product10 from "@/assets/chieu-xa/pro-10.png";
import product11 from "@/assets/chieu-xa/pro-11.png";
import product12 from "@/assets/chieu-xa/pro-12.png";

import { foodIrradiationSystem, productOfIrradiation, subMethodIrradiation } from "@/constants/language-option";

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
            <div className="flex flex-col md:flex-col justify-center items-center max-w-7xl h-auto m-auto mt-8">
                <div className="flex flex-col items-center justify-end mt-24">
                    <div className="flex flex-row ">
                        <h1 className="text-bold text-gray-400 text-6xl p-4">1</h1>
                        <h1 className="text-bold text-green-800 text-6xl p-4">
                            {foodIrradiationSystemLocale.title}
                        </h1>
                    </div>
                    <p className="text-xl whitespace-pre-line mt-16">
                        {foodIrradiationSystemLocale.desc}
                    </p>

                    {/*METHOD IRRADIATION*/}
                    <div className="bg-white shadow-md rounded my-6">
                        <div className="flex items-start">
                            <button
                                className={`p-4 w-1/3 py-4 ${currentTab === 'tab1' ? 'bg-green-800 text-white' : 'text-slate-800'}`}
                                onClick={() => setCurrentTab('tab1')}
                            >
                                {foodIrradiationSystemLocale.subDesc[0].title}
                            </button>
                            <button
                                className={`p-4 w-1/3 py-4 ${currentTab === 'tab2' ? 'bg-green-800 text-white' : 'text-slate-800'}`}
                                onClick={() => setCurrentTab('tab2')}
                            >
                                {foodIrradiationSystemLocale.subDesc[1].title}
                            </button>
                            <button
                                className={`p-4 w-1/3 py-4 ${currentTab === 'tab3' ? 'bg-green-800 text-white' : 'text-slate-800'}`}
                                onClick={() => setCurrentTab('tab3')}
                            >
                                {foodIrradiationSystemLocale.subDesc[2].title}
                            </button>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            {currentTab === 'tab1' && (
                            <div className="p-4 items-center justify-center">
                                <div className="flex flex-col items-center justify-center p-4">
                                    <Image src={foodIrradiationSystemLocale.subDesc[0].imgSrc} alt="food-irradiation" width={500} height={500} className="justify-self-center" />
                                </div>
                                <p className="text-gray-600 text-base">
                                {foodIrradiationSystemLocale.subDesc[0].desc}
                                </p>
                                <h1 className="font-bold text-xl mt-8 text-green-800">
                                    {foodIrradiationSystemLocale.subDesc[0].title}
                                </h1>
                                <div className="grid grid-cols-2 grid-rows-2 gap-12 p-4 mt-8">
                                    {foodIrradiationSystemLocale.subDesc[0].desc2.map((item, index) => (
                                        <h1>{item.descc}</h1>
                                    ))}
                                </div>
                            </div>
                            )}
                            {currentTab === 'tab2' && (
                            <div className="p-4 items-center">
                                <div className="flex flex-col items-center justify-center p-4">
                                    <Image src={foodIrradiationSystemLocale.subDesc[1].imgSrc} alt="food-irradiation" width={500} height={500} className="justify-self-center" />
                                </div>
                                <p className="text-gray-600">
                                {foodIrradiationSystemLocale.subDesc[1].desc}
                                </p>
                                <h1 className="font-bold text-xl mt-8 text-green-800">
                                    {foodIrradiationSystemLocale.subDesc[1].title}
                                </h1>
                                <div className="grid grid-cols-2 grid-rows-2 gap-12 p-4 mt-8">
                                    {foodIrradiationSystemLocale.subDesc[1].desc2.map((item, index) => (
                                        <h1>{item.descc}</h1>
                                    ))}
                                </div>
                            </div>
                            )}
                            {currentTab === 'tab3' && (
                            <div className="p-4 items-center">
                                <div className="flex flex-col items-center justify-center p-4">
                                    <Image src={foodIrradiationSystemLocale.subDesc[2].imgSrc} alt="food-irradiation" width={500} height={500} className="justify-self-center" />
                                </div>
                                <p className="text-gray-600">
                                {foodIrradiationSystemLocale.subDesc[2].desc}
                                </p>
                                <h1 className="font-bold text-xl mt-8 text-green-800">
                                    {foodIrradiationSystemLocale.subDesc[2].title}
                                </h1>
                                <div className="grid grid-cols-2 grid-rows-2 gap-12 p-4 mt-8">
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
                        <h1 className="text-4xl font-extrabold col-span-3 row-span-1 mt-4 mb-2">
                            {productOfIrradiationLocale.title}
                        </h1>
                        <div className="bg-slate-200 w-1/3 h-1 ml-4 mr-4"></div>
                        <div className="grid grid-cols-4 w-full justify-center items-center mt-12">
                            {productImages.map((item, index) => (
                                <div className="flex flex-col items-center justify-center">
                                    <div className="m-4 w-max h-auto">
                                        <Image src={item} alt="product" width={80} height={80} className="rounded-full p-2 bg-green-100" />
                                    </div>
                                    <h1>
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
