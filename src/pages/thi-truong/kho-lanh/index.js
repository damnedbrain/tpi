import CategoryEntriesPage from '@/components/content-ui/CategoryEntriesPage';
import { getCategoryPageProps } from '@/components/strapi/categoryPageData';

export async function getStaticProps({ locale }) {
  return getCategoryPageProps({
    basePageURL: 'kho-lanh',
    locale,
    page: 1,
  });
}

export default CategoryEntriesPage;
