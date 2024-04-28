import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import AboutUsImage from '@/assets/gioi-thieu/About-Us-Image.png';
import FutureGoalImage1 from '@/assets/gioi-thieu/future-goal-1.png';
import FutureGoalImage2 from '@/assets/gioi-thieu/future-goal-2.png';
import NumberTitleDescWithLink
  from '@/components/content-ui/NumberTitleDescWithLink';
import {
  AboutTPGDesc,
  CoreValueTPG,
  CorpCulture,
  FutureGoalTPG,
  sixWord,
  teamMember,
  ThongDiepTPG,
} from '@/constants/language-option';
import TeamMemberImage from '@assets/gioi-thieu/human-resource.png';
import MissionValueImage from '@assets/gioi-thieu/Mission-and-value.png';
import TeamMemberExtraImages1 from '@assets/team-member/team-member-img-1.png';
import TeamMemberExtraImages2 from '@assets/team-member/team-member-img-2.png';
import VideoComponent from '@components/content-ui/VideoComponent';
import BreadCrump from '@/components/layout/breadcrump';

const SixWordIcons = [];
for (let i = 0; i < 6; i++) {
    SixWordIcons.push({
        icon: require(`@assets/gioi-thieu/six-word-icons/icon${i+1}.png`),
        title: `six-word-icon-${i}`
    });
}

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
    const [animation, setAnimation] = useState('fade-left');
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setAnimation('fade-up');
          } else {
            setAnimation('fade-left');
          }
        };
    
        // Call the function once to set the initial state
        handleResize();
    
        // Attach the event listener
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return <>
        <Head>
            <title>
                {locale === "en-US" ? "TOANPHAT GROUP - About Us" : "TOANPHAT GROUP- Giới thiệu"}
            </title>
        </Head>
      <div className="flex flex-col max-w-7xl w-full items-center justify-center m-auto h-auto mt-4">
        {/* <div className='w-full left-0 items-start justify-start self-start italic px-4 py-2 bg-slate-100'>
            <BreadCrump />
        </div> */}
          {/* About TPG Section */}
          <div className="flex flex-col w-full items-start justify-center m-auto h-auto mt-6 p-2">
              <h1 data-aos={animation} className="text-4xl lg:text-5xl font-semiBold text-left text-green-800 ">
                  {aboutTPGLocale.title}
              </h1>
              <p className="text-sm leading-8 tracking-normal text-black mt-4 whitespace-pre-line ">
                  {aboutTPGLocale.desc}
              </p>
              <Image
                  data-aos={animation}
                  data-aos-delay='600'
                  src={AboutUsImage}
                  alt="About Us Image"
                  className="mt-4 w-full "
                  style={{
                      maxWidth: "100%",
                      height: "auto",
                      maxWidth: "100%",
                      height: "auto"
                  }} />
          </div>
          {/* About TPG Section END */}

          {/* History Video TPG Section */}
          <div className="flex flex-col w-full items-start justify-center m-auto h-auto mt-12 p-2">
              <h1 data-aos={animation} className="text-4xl lg:text-5xl font-semiBold text-left text-green-800 ">
                  {locale === "vi" ? "Lịch sử phát triển TOANPHAT GROUP" : "Company Milestones and Achievement"}
              </h1>
              <div className="w-full m-auto">
                  {locale === "en-US" ? 
                      <VideoComponent videoSrc="/videos/TPG_timeline_ENG.mp4" /> :
                      <VideoComponent videoSrc="/videos/TPG_timeline_ENG.mp4" />
                  }
              </div>
          </div>
          {/* History Video TPG Section END */}
          <div className='h-[2px] bg-slate-300 w-80-screen'></div>
          {/* Thong Diep TPG Section */}
          <div className="flex flex-col w-full items-start justify-center m-auto h-auto mt-12 p-2">
              <h1 data-aos={animation} className="text-3xl lg:text-5xl font-semiBold text-left text-green-800 ">
                  {thongDiepTPGLocale.title}
              </h1>
              <p className="text-sm leading-8 tracking-normal text-black mt-4 whitespace-pre-line ">
                  {thongDiepTPGLocale.desc}
              </p>
          </div>
          {/* Thong Diep TPG Section END */}
          <div className='h-[2px] bg-slate-300 w-80-screen mt-8'></div>
          {/* Core Value TPG Section */}
          <div className="flex flex-col lg:flex-row w-full items-start justify-center m-auto h-auto mt-12 p-2">
          
              <div className=" w-full lg:w-2/5 pr-6">
                
                  <h1 data-aos={animation} className="text-4xl lg:text-5xl font-semiBold text-left text-green-800  mt-8">
                      {coreValueTPGLocale.title1}
                  </h1>
                  <h1 className="{`text-2xl ${locale === 'en-US' ? 'lg:text-3xl' : 'text-4xl'} font-semiBold text-left text-green-800`}  mt-8">
                      {coreValueTPGLocale.subTitle1}
                  </h1>
                  <p className="text-sm leading-8 tracking-normal text-black mt-4 whitespace-pre-line ">
                      {coreValueTPGLocale.subDesc1}
                  </p>
                  <h1 className="{`text-2xl ${locale === 'en-US' ? 'lg:text-3xl' : 'text-4xl'} font-semiBold text-left text-green-800`}  mt-8">
                      {coreValueTPGLocale.subTitle2}
                  </h1>
                  <p className="text-sm leading-8 tracking-normal text-black mt-4 whitespace-pre-line ">
                      {coreValueTPGLocale.subDesc2}
                  </p>
                  <div className="w-2/3 h-2 bg-green-800 mt-8 mb-8"></div>
                  <h1 className="text-4xl lg:text-5xl font-semiBold text-left text-green-800  mt-12">
                      {coreValueTPGLocale.title2}
                  </h1>
                  <p className="text-sm leading-8 tracking-normal text-black mt-8 whitespace-pre-line ">
                      {coreValueTPGLocale.desc}
                  </p>
              </div>
              <div className="w-full lg:w-3/5 items-start justify-center">
                  <Image
                      data-aos={animation}
                      data-aos-delay='600'
                      src={MissionValueImage}
                      alt="Message Image"
                      className="mt-4 w-full "
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
              <h1  className="text-4xl lg:text-5xl font-semiBold text-left text-green-800 ">
                  {sixWordTPGLocale.title}
              </h1>
              <div className="flex flex-col lg:grid lg:grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 w-full mt-1 lg:mt-4">
                  {sixWordTPGLocale.sub.map((item, index) => (
                      <div key={index}>
                          <NumberTitleDescWithLink icon={SixWordIcons[index].icon} number={index+1} title={item.title} desc={item.desc} key={index} />
                      </div>
                  ))}
              </div>
          </div>
          {/* Six Word TPG Section END */}

          {/* Future Goal TPG Section */}
          <div className="flex flex-col w-full items-center justify-center m-auto h-auto mt-12 p-2">
              <div  className="flex flex-row w-full items-center justify-center">
                  <Image
                      data-aos={animation}                      
                      src={FutureGoalImage1}
                      alt="Message Image"
                      className="mt-4 w-1/2 "
                      style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxWidth: "100%",
                          height: "auto"
                      }} />
                  <Image
                      data-aos={animation}
                      data-aos-delay='300'
                      src={FutureGoalImage2}
                      alt="Message Image"
                      className="mt-4 w-1/2 "
                      style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxWidth: "100%",
                          height: "auto"
                      }} />
              </div>
              <h1  className="text-4xl lg:text-5xl font-semiBold text-left text-green-800  mt-6">
                  {futureGoalTPGLocale.mainTitle}
              </h1>
              <div className="flex flex-col lg:flex-row w-full items-start justify-center m-auto h-auto mt-6">
                  <div data-aos={animation} className="flex flex-col mt-4 px-5 lg:w-[350px]">
                      <h1 className={`text-2xl ${locale === 'en-US' ? 'lg:h-[72px] lg:text-3xl' : 'text-4xl'} font-semiBold text-left text-green-800`}>
                          {futureGoalTPGLocale.title1}
                      </h1>
                      <p className="text-sm leading-8 tracking-normal text-black mt-4 whitespace-pre-line ">
                          {futureGoalTPGLocale.desc1}
                      </p>
                  </div>
                  <div className="flex flex-col mt-4 px-5 lg:w-[350px]">
                      <h1 className={`text-2xl ${locale === 'en-US' ? 'lg:h-[72px] lg:text-3xl' : 'text-4xl'} font-semiBold text-left text-green-800`}>
                          {futureGoalTPGLocale.title2}
                      </h1>
                      <p className="text-sm leading-8 tracking-normal text-black mt-4 whitespace-pre-line ">
                          {futureGoalTPGLocale.desc2}
                      </p>
                  </div>
                  <div className="flex flex-col mt-4 px-5 lg:w-[350px]">
                      <h1 className={`text-2xl ${locale === 'en-US' ? 'lg:h-[72px] lg:text-3xl' : 'text-4xl'} font-semiBold text-left text-green-800`}>
                          {futureGoalTPGLocale.title3}
                      </h1>
                      <p className="text-sm leading-8 tracking-normal text-black mt-4 whitespace-pre-line ">
                          {futureGoalTPGLocale.desc3}
                      </p>
                  </div>
              </div>
          </div>
          {/* Future Goal TPG Section END */}

          {/* Team Member TPG Section */}
          <div  className="flex flex-col w-full items-center justify-center m-auto h-auto mt-12 p-1 lg:p-1">
              <div className="flex flex-col lg:flex-row w-full">
                  <div className="flex flex-col lg:w-1/2 items-start justify-center bg-violet-950 p-2 py-4">
                      <h1 className="text-4xl lg:text-5xl font-semiBold text-left text-green-800  px-8">
                          {teamMemberTPGLocale.titleMain}
                      </h1>
                      <p className="text-sm leading-8 tracking-normal text-white px-8 mt-4 whitespace-pre-line ">
                          {teamMemberTPGLocale.desc}
                      </p>
                  </div>
                  <div className="flex flex-row lg:w-1/2 items-center justify-center h-auto">
                      <Image
                          data-aos='fade-up'
                          data-aos-delay='300'
                          src={TeamMemberImage}
                          alt="Message Image"
                          className="w-full "
                          style={{
                              maxWidth: "100%",
                              height: "auto",
                          }} />
                  </div>
              </div>
              <div className="flex-row hidden lg:flex w-full items-center justify-center mt-8 p-0 h-auto">
                  <Image
                      data-aos='fade-up'
                      src={TeamMemberExtraImages1}
                      alt="Message Image"
                      className="w-1/2 "
                      style={{
                          maxWidth: "100%",
                          height: "auto",
                          maxWidth: "100%",
                          height: "auto"
                      }} />
                  <Image
                      data-aos={animation}
                      data-aos-delay='300'
                      src={TeamMemberExtraImages2}
                      alt="Message Image"
                      className="w-1/2 "
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
          <div id="corp-culture" className="flex flex-col w-full items-center justify-center m-auto h-auto mt-12 p-2">
              <h1 data-aos={animation} className="text-4xl lg:text-5xl font-semiBold text-left text-green-800 ">
                  {corpCultureTPGLocale.mainTitle}
              </h1>
              <p className="text-sm leading-8 tracking-normal text-black mt-4 whitespace-pre-line ">
                  {corpCultureTPGLocale.mainDesc}
              </p>
              <div className="flex flex-col lg:flex-row">
              {Array.from({ length: 3 }).map((_, index) => (
                    <div data-aos-delay={index * 300} key={index} className="flex flex-row p-1 lg:px-8">
                        <h1 className={`text-2xl ${locale === 'en-US' ? 'lg:text-md w-1/3' : 'lg:text-3xl w-1/6'} font-semiBold text-left text-green-800 whitespace-pre-wrap mt-6 `}>
                            {corpCultureTPGLocale[`title${index + 1}`]}
                        </h1>
                        <h1 data-aos-delay={index * 450} className="text-5xl lg:text-6xl w-1/6 p-1 font-bold text-center text-gray-200 animate-fadeIn m-4">{index + 1}</h1>
                        <p className="text-sm w-2/3 leading-8 tracking-normal text-black mt-4 whitespace-pre-line ">
                            {corpCultureTPGLocale[`desc${index + 1}`]}
                        </p>
                    </div>
                ))}                  
              </div>
          </div>
          {/* Corp Culture TPG Section END */}
          
      </div>
  </>;
}