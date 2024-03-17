import { useRouter } from "next/router";

import { LocationMapContent } from "@/constants/language-option";

import VideoComponent from "@/components/content-ui/VideoComponent";

export default function ViTri() {
  const router = useRouter();
  const locale = router.locale;

  const LocationMapContentLocale = LocationMapContent.find((item) => item.locale === locale);

  return (
    <>
        <div className="flex flex-col max-w-7xl w-full items-center justify-center m-auto h-auto mt-8">
            <h1 className="text-4xl font-bold w-full text-left mt-24 text-green-800">
                {LocationMapContentLocale.title}
            </h1>
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8">
                {locale === "vi" ? (
                    <VideoComponent videoSrc='/videos/location_map_video.mp4' />
                ) : (
                    <VideoComponent videoSrc='/videos/location_map_video_eng.mp4' />
                )}
            </div>
            <p className="text-xl w-full text-left mt-8 text-gray-600">
                {LocationMapContentLocale.desc}
            </p>
            <div className="grid grid-cols-3 gap-4 mt-12">
                {LocationMapContentLocale.sub.map((item, index) => (
                    <div key={index} className="flex flex-row">
                        <h1 className="text-8xl font-semiBold text-center text-gray-400 p-6">{index + 1}</h1>
                        <p className="text-2xl text-left mt-2 p-6">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
}