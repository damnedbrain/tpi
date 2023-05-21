import { Introduce } from './Introduce';
import { BestServices } from './BestServices';
import { TrustedBy } from './TrustedBy';
import { TeamMember } from './TeamMember';
import { LeaderIndustrial } from './LeaderIndustrial';
import { Testimonial } from './Testimonial';
import { OurProject } from './OurProject';
import { News } from './News';
import { Question } from './Question';
import { LocationVideo } from 'components/own/location-video';
import { Certificate } from './Certificate';
import { BannerPromo } from 'components/own/banner-promo';
import Head from 'next/head';

export default function Home({ news, images }) {
  return (
    <>
      <Head>
        <title>TOAN PHAT - Home</title>
      </Head>
      
      <BannerPromo news={news} />
      <BestServices />
      {/* <LocationVideo /> */}
      <News news={news} />
      <TeamMember />
      <Certificate />
      <LeaderIndustrial />
      <TrustedBy />
      {
        //<Testimonial />
      }
      {/* <OurProject images={images} /> */}
    </>
  );
}
