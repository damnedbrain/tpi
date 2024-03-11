import { Layout } from '@my-components';
import { Home } from '@pages/public/home';
import { createClient } from 'contentful';
import ErrorPage from 'next/error';

export async function getStaticProps({ locale }) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      // environment: 'master', // defaults to 'master' if not set
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({
      content_type: 'toanPhatMarketNews',
      locale: locale,
      order: '-sys.createdAt',
      //fields: ['hightLight' , 'homePage'],
      'fields.homePage' : true,
    });

    if (!res) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        news: res.items,
      },
    };
  } catch (error) {
    return { props: {} };
  }
}

export default function HomePage({ news }) {
  return (
    <Layout>
      <Home news={news} />
    </Layout>
  );
}
