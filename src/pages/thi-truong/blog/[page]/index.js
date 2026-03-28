import TypedEntriesPage from '@/components/content-ui/TypedEntriesPage';
import { getTypedPageProps } from '@/components/strapi/typedPageData';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ locale, params }) {
  return getTypedPageProps({
    basePageURL: 'blog',
    locale,
    page: params.page,
  });
}

export default TypedEntriesPage;
