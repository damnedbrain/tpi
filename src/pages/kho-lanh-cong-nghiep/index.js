import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

import { coldStorageTopContent } from "@/constants/language-option";

import kholanh1 from "@assets/icons/kholanh-01.png";
import kholanh2 from "@assets/icons/kholanh-02.png";
import kholanh3 from "@assets/icons/kholanh-03.png";
import kholanh4 from "@assets/icons/kholanh-04.png";
import kholanh5 from "@assets/icons/kholanh-05.png";

import cold1 from "@assets/cold-storage/cold-1.png";
import cold2 from "@assets/cold-storage/cold-2.png";
import cold3 from "@assets/cold-storage/cold-3.png";
import cold4 from "@assets/cold-storage/cold-4.png";


export default function KhoLanhCongNghiep() {
    const router = useRouter();
    const locale = router.locale;
    const coldStorageTopContentLocale = coldStorageTopContent.find(item => item.locale === locale);
    const kholanhIcons = [
        kholanh1, kholanh2, kholanh3, kholanh4, kholanh5
    ]

    return (
        <>
        <Head>
            <title>
                {locale === "en-US" ? "TOANPHAT GROUP - Cold storage" : "TOANPHAT GROUP- Kho lạnh công nghiệp"}
            </title>
            <meta name="keywords" content={ locale === "en-US" ? "toanphatgroup, toanphat group, toàn phát group, Cold storage rental service, Frozen storage rental service, Cold storage in Long An, Cold storage in Ben Luc, Frozen storage, Cold storage rental service in HCMC, Cold warehouse for rent in Phu An Thanh industrial park, Long Hau industrial park warehouse for rent, Cold storage price list, Cold storage rental price, Cold warehouse for rent, Cold storage for preserving agricultural products, Cold storage for fruit preservation" :
                                                                 "toanphatgroup, toanphat group, toàn phát group, Dịch vụ cho thuê kho lạnh, Cho thuê kho đông lạnh, Kho lạnh Long An, Kho lạnh Bến Lức, Kho đông lạnh, Cho thuê kho lạnh tại tphcm, Cho thuê kho kcn Phú An Thạnh, Cho thuê kho kcn long hậu, Bảng giá kho lạnh, Giá thuê kho lạnh, Cho thuê kho, Kho lạnh bảo quản nông sản, Kho lạnh bảo quản trái cây"} />
        </Head>
        <div className="flex flex-col md:flex-col justify-center items-center max-w-7xl h-auto m-auto mt-8">
            <Image src={cold1} alt="cold-storage" className="w-full h-auto" />
            <div className="flex flex-row mt-8">
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
                <h1 className="text-5xl font-semiBold text-green-800">
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
            <div className="flex flex-row w-full mt-8">
                <Image src={cold2} alt="cold-storage" className="w-1/3 h-auto p-2" />
                <Image src={cold3} alt="cold-storage" className="w-1/3 h-auto p-2" />
                <Image src={cold4} alt="cold-storage" className="w-1/3 h-auto p-2" />
            </div>

        </div>
        </>
    )
}