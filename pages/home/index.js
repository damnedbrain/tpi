import { Layout } from '@my-components';
import { Home } from '@pages/public/home';
import { createClient } from 'contentful';
import ErrorPage from 'next/error';
// import cloudinary from 'cloudinary';

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
      limit : 500
    });

    // cloudinary.v2.config({
    //   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    //   api_key: process.env.CLOUDINARY_API_KEY,
    //   api_secret: process.env.CLOUDINARY_API_SECRET,
    //   secure: true,
    // });

    // const resultsCloudinary = await cloudinary.v2.search
    //   .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    //   .sort_by('public_id', 'asc')
    //   .max_results(30)
    //   .execute();

    // let arrImage = [];
    // for (let result of resultsCloudinary.resources) {
    //   arrImage.push({
    //     src: result.url,
    //     width: result.width,
    //     height: result.height,
    //     public_id: result.public_id,
    //     format: result.format,
    //     caption: result.filename,
    //     thumbnailCaption: "",
    //   });
    // }

    if (!res) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        news: res.items,
        // images: arrImage,
      },
    };
  } catch (error) {
    // res.statusCode = 404;
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
