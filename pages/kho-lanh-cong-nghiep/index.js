import { Layout } from '@my-components';
import { ColdStorage } from '@pages/public/logistic-hub/cold-storage';
import { createClient } from 'contentful';

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
    // res.statusCode = 404;
    return { props: {} };
  }
}

export default function HomePage({news}) {
  return (
    <Layout>
      <ColdStorage news={news} />
    </Layout>
  );
};
