import TypedEntriesPage from '@/components/content-ui/TypedEntriesPage';
import { getTypedPageProps } from '@/components/strapi/typedPageData';

export async function getStaticProps({ locale }) {
  return getTypedPageProps({
    basePageURL: 'thi-truong',
    locale,
    page: 1,
  });
}

export default TypedEntriesPage;
