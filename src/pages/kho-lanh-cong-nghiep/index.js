import { useRouter } from "next/router";
import Image from "next/image";

import { coldStorageTopContent } from "@/constants/language-option";

import kholanh1 from "@assets/icons/kholanh-01.png";
import kholanh2 from "@assets/icons/kholanh-02.png";
import kholanh3 from "@assets/icons/kholanh-03.png";
import kholanh4 from "@assets/icons/kholanh-04.png";
import kholanh5 from "@assets/icons/kholanh-05.png";

export default function KhoLanhCongNghiep() {
    const router = useRouter();
    const locale = router.locale;
    const coldStorageTopContentLocale = coldStorageTopContent.find(item => item.locale === locale);
    const kholanhIcons = [
        kholanh1, kholanh2, kholanh3, kholanh4, kholanh5
    ]

    return (
        <div className="flex flex-col md:flex-col justify-center items-center max-w-7xl h-auto m-auto mt-8">
            <div className="flex flex-row ">
                <h1 className="text-bold text-gray-400 text-6xl p-4">2</h1>
                <h1 className="text-bold text-green-800 text-6xl p-4">
                    {coldStorageTopContentLocale.title}
                </h1>
            </div>
            <div className="flex flex-row">
                {kholanhIcons.map((icon, index) => (
                    <div className="flex flex-col w-full p-4 items-center justify-start mt-8">
                        <Image key={index} src={icon} alt="kholanh-icon" className="w-16 h-auto" />
                        <h1 className="text-xl text-center mt-4">
                            {coldStorageTopContentLocale.desc[index].descc}
                        </h1>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center justify-end mt-24">
                <h1 className="text-5xl font-semiBold text-green-700">
                    {coldStorageTopContentLocale.midTitle}
                </h1>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-8 mt-8">
                {coldStorageTopContentLocale.sub.map((item, index) => (
                    <div>
                        <h1 className="text-6xl text-slate-300">{index+1}</h1>
                        <h1 className="text-3xl text-green-800">{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>

                ))}

            </div>

        </div>
    )
}