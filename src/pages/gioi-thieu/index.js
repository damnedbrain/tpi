import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

import { AboutTPGDesc,
         ThongDiepTPG,
         CoreValueTPG,
         FutureGoalTPG,
         sixWord,
         teamMember,
         CorpCulture
        } from "@/constants/language-option";

import AboutUsImage from "@/assets/gioi-thieu/About-Us-Image.png";
import MessageImage from "@/assets/gioi-thieu/About-Us-Image-message.png";
import MissionValueImage from "@assets/gioi-thieu/Mission-and-value.png";
import TeamMemberImage from "@assets/gioi-thieu/human-resource.png";
import TeamMemberExtraImages1 from "@assets/team-member/team-member-img-1.png";
import TeamMemberExtraImages2 from "@assets/team-member/team-member-img-2.png";

import VideoComponent from "@components/content-ui/VideoComponent";
import NumberTitleDescWithLink from "@/components/content-ui/NumberTitleDescWithLink";

const SixWordIcons = [];
for (let i = 0; i < 6; i++) {
    SixWordIcons.push({
        icon: require(`@assets/gioi-thieu/six-word-icons/icon${i+1}.png`),
        title: `six-word-icon-${i}`
    });
}

import FutureGoalImage1 from "@/assets/gioi-thieu/future-goal-1.png";
import FutureGoalImage2 from "@/assets/gioi-thieu/future-goal-2.png";

export default function GioiThieu() {

    const router = useRouter();
    const locale = router.locale;

    const aboutTPGLocale = AboutTPGDesc.find((item) => item.locale === locale);

    const thongDiepTPGLocale = ThongDiepTPG.find((item) => item.locale === locale);

    const coreValueTPGLocale = CoreValueTPG.find((item) => item.locale === locale);

    const sixWordTPGLocale = sixWord.find((item) => item.locale === locale);

    const futureGoalTPGLocale = FutureGoalTPG.find((item) => item.locale === locale);

    const teamMemberTPGLocale = teamMember.find((item) => item.locale === locale);

    const corpCultureTPGLocale = CorpCulture.find((item) => item.locale === locale);


  return <>
        <Head>
            <title>
                {locale === "en" ? "TOAN PHAT GROUP - About Us" : "Tập đoàn Toàn Phát - Giới thiệu"}
            </title>
        </Head>
      <div className="flex flex-col max-w-7xl w-full items-center justify-center m-auto h-auto mt-8">

          {/* About TPG Section */}
          <div className="flex flex-col w-full items-start justify-center m-auto h-auto mt-24 ">
              <h1 className="text-5xl font-semiBold text-left text-green-800 animate-fadeInSlideIn">
                  {aboutTPGLocale.title}
              </h1>
              <p className="text-xl leading-8 tracking-normal text-black mt-4 whitespace-preline animate-fadeInSlideIn">
                  {aboutTPGLocale.desc}
              </p>
              <Image
                  src={AboutUsImage}
                  alt="About Us Image"
                  className="mt-4 w-full animate-fadeInSlideIn"
                  style={{
                      maxWidth: "100%",
                      height: "auto",
                      maxWidth: "100%",
                      height: "auto"
                  }} />
          </div>
          {/* About TPG Section END */}

          {/* History Video TPG Section */}
          <div className="flex flex-col w-full items-start justify-center m-auto h-auto mt-12">
              <h1 className="text-5xl font-semiBold text-left text-green-800 animate-fadeInSlideIn">
                  {locale === "vi" ? "Lịch sử phát triển TOANPHAT GROUP" : "Company Milestones and Achievement"}
              </h1>
              <div className="w-full m-auto">
                  {locale === "en" ? 
                      <VideoComponent videoSrc="/videos/TPG_timeline_ENG.mp4" /> :
                      <VideoComponent videoSrc="/videos/TPG_timeline.mp4" />
                  }
              </div>
          </div>
          {/* History Video TPG Section END */}

          {/* Thong Diep TPG Section */}
          <div className="flex flex-col w-full items-start justify-center m-auto h-auto mt-12">
              <h1 className="text-5xl font-semiBold text-left text-green-800 animate-fadeInSlideIn">
                  {thongDiepTPGLocale.title}
              </h1>
              <p className="text-xl leading-8 tracking-normal text-black mt-4 whitespace-pre-line animate-fadeInSlideIn">
                  {thongDiepTPGLocale.desc}
              </p>
          </div>
          {/* Thong Diep TPG Section END */}

          {/* Core Value TPG Section */}
          <div className="flex flex-row w-full items-start justify-center m-auto h-auto mt-12">
              <div className="w-2/5 pr-6">
                  <h1 className="text-5xl font-semiBold text-left text-green-800 animate-fadeInSlideIn mt-4">
                      {coreValueTPGLocale.title1}
                  </h1>
                  <h1 className="text-4xl font-semiBold text-left text-green-800 animate-fadeInSlideIn mt-4">
                      {coreValueTPGLocale.subTitle1}
                  </h1>
                  <p className="text-xl leading-8 tracking-normal text-black mt-4 whitespace-pre-line animate-fadeInSlideIn">
                      {coreValueTPGLocale.subDesc1}
                  </p>
                  <h1 className="text-4xl font-semiBold text-left text-green-800 animate-fadeInSlideIn mt-4">
                      {coreValueTPGLocale.subTitle2}
                  </h1>
                  <p className="text-xl leading-8 tracking-normal text-black mt-4 whitespace-pre-line animate-fadeInSlideIn">
                      {coreValueTPGLocale.subDesc2}
                  </p>
                  <div className="w-2/3 h-2 bg-green-800 mt-6 mb-6"></div>
                  <h1 className="text-5xl font-semiBold text-left text-green-800 animate-fadeInSlideIn mt-4">
                      {coreValueTPGLocale.title2}
                  </h1>
                  <p className="text-xl leading-8 tracking-normal text-black mt-4 whitespace-pre-line animate-fadeInSlideIn">
                      {coreValueTPGLocale.desc}
                  </p>
              </div>
              <div className="w-3/5 items-start justify-center">
                  <Image
                      src={MissionValueImage}
                      alt="Message Image"
                      className="mt-4 w-full animate-fadeInSlideIn"
                      style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxWidth: "100%",
                          height: "auto"
                      }} />
              </div>
          </div>
          {/* Core Value TPG Section END */}

          {/* Six Word TPG Section */}
          <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-12">
              <h1 className="text-5xl font-semiBold text-left text-green-800 animate-fadeInSlideIn">
                  {sixWordTPGLocale.title}
              </h1>
              <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-6 sm:grid-cols-3 sm:grid-rows-2  gap-4 w-full mt-6">
                  {sixWordTPGLocale.sub.map((item, index) => (
                      <NumberTitleDescWithLink icon={SixWordIcons[index].icon} number={index+1} title={item.title} desc={item.desc} key={index} />
                  ))}
              </div>
          </div>
          {/* Six Word TPG Section END */}

          {/* Future Goal TPG Section */}
          <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-12">
              <div className="flex flex-row w-full items-center justify-center">
                  <Image
                      src={FutureGoalImage1}
                      alt="Message Image"
                      className="mt-4 w-1/2 animate-fadeInSlideIn"
                      style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxWidth: "100%",
                          height: "auto"
                      }} />
                  <Image
                      src={FutureGoalImage2}
                      alt="Message Image"
                      className="mt-4 w-1/2 animate-fadeInSlideIn"
                      style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxWidth: "100%",
                          height: "auto"
                      }} />
              </div>
              <h1 className="text-5xl font-bold text-left text-green-800 animate-fadeInSlideIn mt-6">
                  {futureGoalTPGLocale.mainTitle}
              </h1>
              <div className="flex flex-row w-full items-start justify-center m-auto h-auto mt-6">
                  <div className="flex flex-col flex-1 p-4">
                      <h1 className="text-5xl font-semiBold text-left text-green-800 animate-fadeInSlideIn">
                          {futureGoalTPGLocale.title1}
                      </h1>
                      <p className="text-xl leading-8 tracking-normal text-black mt-4 whitespace-pre-line animate-fadeInSlideIn">
                          {futureGoalTPGLocale.desc1}
                      </p>
                  </div>
                  <div className="flex flex-col flex-1 p-4">
                      <h1 className="text-5xl font-semiBold text-left text-green-800 animate-fadeInSlideIn">
                          {futureGoalTPGLocale.title2}
                      </h1>
                      <p className="text-xl leading-8 tracking-normal text-black mt-4 whitespace-pre-line animate-fadeInSlideIn">
                          {futureGoalTPGLocale.desc2}
                      </p>
                  </div>
                  <div className="flex flex-col flex-1 p-4">
                      <h1 className="text-5xl font-semiBold text-left text-green-800 animate-fadeInSlideIn">
                          {futureGoalTPGLocale.title3}
                      </h1>
                      <p className="text-xl leading-8 tracking-normal text-black mt-4 whitespace-pre-line animate-fadeInSlideIn">
                          {futureGoalTPGLocale.desc3}
                      </p>
                  </div>
              </div>
          </div>
          {/* Future Goal TPG Section END */}

          {/* Team Member TPG Section */}
          <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-12">
              <div className="flex flex-row w-full">
                  <div className="flex flex-col w-1/2 items-start justify-center bg-violet-950 ">
                      <h1 className="text-5xl font-semiBold text-left text-green-600 animate-fadeInSlideIn p-8">
                          {teamMemberTPGLocale.titleMain}
                      </h1>
                      <p className="text-xl leading-8 tracking-normal text-white p-8 mt-4 whitespace-pre-line animate-fadeInSlideIn">
                          {teamMemberTPGLocale.desc}
                      </p>
                  </div>
                  <div className="flex flex-row w-1/2 items-center justify-center m-auto h-auto">
                      <Image
                          src={TeamMemberImage}
                          alt="Message Image"
                          className="w-full animate-fadeInSlideIn"
                          style={{
                              maxWidth: "100%",
                              height: "auto",
                              maxWidth: "100%",
                              height: "auto"
                          }} />
                  </div>
              </div>
              <div className="flex flex-row w-full items-center justify-center mt-8 h-auto">
                  <Image
                      src={TeamMemberExtraImages1}
                      alt="Message Image"
                      className="w-1/2 animate-fadeInSlideIn"
                      style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxWidth: "100%",
                          height: "auto"
                      }} />
                  <Image
                      src={TeamMemberExtraImages2}
                      alt="Message Image"
                      className="w-1/2 animate-fadeInSlideIn"
                      style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxWidth: "100%",
                          height: "auto"
                      }} />
              </div>
          </div>
          {/* Team Member TPG Section END */}

          {/* Corp Culture TPG Section */}
          <div id="corp-culture" className="flex flex-col w-full items-center justify-center m-auto h-auto mt-12">
              <h1 className="text-5xl font-bold text-left text-green-800 animate-fadeInSlideIn">
                  {corpCultureTPGLocale.mainTitle}
              </h1>
              <p className="text-xl leading-8 tracking-normal text-black mt-4 whitespace-pre-line animate-fadeInSlideIn">
                  {corpCultureTPGLocale.mainDesc}
              </p>
              <div className="flex flex-row">
                  <div className="flex flex-1 p-4">
                      <h1 className="text-4xl font-semiBold text-left text-green-800 animate-fadeInSlideIn mt-6">
                          {corpCultureTPGLocale.title1}
                      </h1>
                      <h1 className="text-8xl font-bold text-center text-gray-200 animate-fadeIn m-4">1</h1>
                      <p className="text-xl leading-8 tracking-normal text-black mt-4 whitespace-pre-line animate-fadeInSlideIn">
                          {corpCultureTPGLocale.desc1}
                      </p>
                  </div>
                  <div className="flex flex-1 p-4">
                      <h1 className="text-4xl font-semiBold text-left text-green-800 animate-fadeInSlideIn mt-6">
                          {corpCultureTPGLocale.title2}
                      </h1>
                      <h1 className="text-8xl font-bold text-center text-gray-200 animate-fadeIn m-4">2</h1>
                      <p className="text-xl leading-8 tracking-normal text-black mt-4 whitespace-pre-line animate-fadeInSlideIn">
                          {corpCultureTPGLocale.desc2}
                      </p>
                  </div>
                  <div className="flex flex-1 p-4">
                      <h1 className="text-4xl font-semiBold text-left text-green-800 animate-fadeInSlideIn mt-6">
                          {corpCultureTPGLocale.title3}
                      </h1>
                      <h1 className="text-8xl font-bold text-center text-gray-200 animate-fadeIn m-4">3</h1>
                      <p className="text-xl leading-8 tracking-normal text-black mt-4 whitespace-pre-line animate-fadeInSlideIn">
                          {corpCultureTPGLocale.desc3}
                      </p>
                  </div>
              </div>
          </div>
          {/* Corp Culture TPG Section END */}
          
      </div>
  </>;
}