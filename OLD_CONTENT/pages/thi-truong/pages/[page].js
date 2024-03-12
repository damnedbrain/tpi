import { RouteAPI } from '@constants/Api.constants';
import { Layout } from '@my-components';
import { Market } from '@pages/public/market';
import { createClient } from 'contentful';
import ErrorPage from 'next/error';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  // environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'toanPhatMarketNews' });
  let paths = [];
  for (let page = 2; page <= 100; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params, locale }) {
  const res = await client.getEntries({
    content_type: 'toanPhatMarketNews',
    locale: locale,
    order: '-sys.createdAt',
    skip : (parseInt(params.page)-1)*10,
    limit : 10
  });

  const resF = await client.getEntries({
    content_type: 'toanPhatMarketNews',
    locale: locale,
    order: '-sys.createdAt',
  });

  if (!res) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { news: res.items, newsF: resF.items, locale, page: params.page },
    revalidate: 10,
  };
}

export default function News({ news, newsF, page }) {
  // if (!news) return <ErrorPage statusCode={statusCode} />;

  return (
    <Layout>
      <Market news={news} newsF={newsF} currentPage={page} />
    </Layout>
  );
}