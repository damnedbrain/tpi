import TypedEntriesPage from '@/components/content-ui/TypedEntriesPage';
import { getTypedPageProps } from '@/components/strapi/typedPageData';

export async function getStaticProps({ locale }) {
  return getTypedPageProps({
    basePageURL: 'blog',
    locale,
    page: 1,
  });
}

export default TypedEntriesPage;
