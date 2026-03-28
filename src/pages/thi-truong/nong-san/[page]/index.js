import CategoryEntriesPage from '@/components/content-ui/CategoryEntriesPage';
import { getCategoryPageProps } from '@/components/strapi/categoryPageData';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ locale, params }) {
  return getCategoryPageProps({
    basePageURL: 'nong-san',
    locale,
    page: params.page,
  });
}

export default CategoryEntriesPage;
