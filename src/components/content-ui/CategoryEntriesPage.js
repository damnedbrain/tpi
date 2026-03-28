import Head from 'next/head';

import EntriesWithPagination from '@/components/content-ui/EntriesPreviewWithPagination';
import Pagination from '@/components/content-ui/Pagination';
import SideBanner from '@/components/content-ui/SideBanner';

export const CATEGORY_PAGE_SIZE = 15;

export const CATEGORY_PAGE_CONFIG = {
  'nong-san': {
    titleEn: 'Agricultural',
    titleVi: 'Nông sản',
    metaTitle: 'TOAN PHAT - Agricultural News',
    tag: 'Nông Sản',
  },
  'thuy-san': {
    titleEn: 'Seafood',
    titleVi: 'Thủy sản',
    metaTitle: 'TOAN PHAT - Seafood News',
    tag: 'Thuỷ Sản',
  },
  'chieu-xa': {
    titleEn: 'Irradiation',
    titleVi: 'Chiếu Xạ',
    metaTitle: 'TOAN PHAT - Irradiation News',
    tag: 'Chiếu Xạ',
  },
  'kho-lanh': {
    titleEn: 'Cold Storage',
    titleVi: 'Kho lạnh công nghiệp',
    metaTitle: 'TOAN PHAT - Industrial Cold Storage News',
    tag: 'Kho Lạnh',
  },
  'xuat-nhap-khau': {
    titleEn: 'Logistics',
    titleVi: 'Xuất Nhập Khẩu',
    metaTitle: 'TOAN PHAT - Logistics News',
    tag: 'Xuất Nhập Khẩu',
  },
};

export function shortenEntries(entries = []) {
  return entries
    .map((item) => {
      const image = item.fields.image?.fields?.file;
      const thumbImage = item.fields.thumbImage?.fields?.file;

      if (!item.fields.slug || !item.fields.title || !image || !thumbImage) {
        return null;
      }

      return {
        id: item.sys.id,
        title: item.fields.title,
        slug: item.fields.slug,
        description: item.fields.desc || item.fields.content,
        url: image.url,
        alt: `Image ${item.fields.title}`,
        width: image.details?.image?.width || 0,
        height: image.details?.image?.height || 0,
        thumbImage: thumbImage.url,
        thumbImageAlt: `Thumb Image ${item.fields.thumbImage?.fields?.title || item.fields.title}`,
        thumbImageWidth: thumbImage.details?.image?.width || 0,
        thumbImageHeight: thumbImage.details?.image?.height || 0,
        postTime: item.sys.createdAt,
        type: item.fields.type,
        tags: item.fields.tags,
      };
    })
    .filter(Boolean);
}

export default function CategoryEntriesPage({
  basePageURL,
  currentPage,
  entries,
  locale,
  metaTitle,
  pageCount,
  titleEn,
  titleVi,
}) {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaTitle} />
        <meta itemProp="name" content={metaTitle} />
        <meta itemProp="description" content={metaTitle} />
        <meta property="og:url" content={`toanphatgroup.com/thi-truong/${basePageURL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaTitle} />
        <meta
          name="keywords"
          content={
            locale === 'en-US'
              ? 'toanphatgroup, toanphat group, toàn phát group, Cold storage rental service, Frozen storage rental service, Cold storage in Long An, Cold storage in Ben Luc, Frozen storage, Cold storage rental service in HCMC, Cold warehouse for rent in Phu An Thanh industrial park, Long Hau industrial park warehouse for rent, Cold storage price list, Cold storage rental price, Cold warehouse for rent, Cold storage for preserving agricultural products, Cold storage for fruit preservation, Irradiation, What\'s Irradiation, Toan Phat Irradiation Co ltd, Irradiation companies in Vietnam, Toan Phat Irradiation, Preserved by irradiation, Irradiation center, Irradiation centers in Vietnam, Food irradiation machine, Irradiation fruits for exported, What is gamma ray irradiation?, Gamma ray irradiation, Fruit irradiation machine, Irradiation and sterilization center, What is the use of fruit irradiation, Seed irradiation, Irradiation is a preservation method, Seed irradiation to improve plant varieties, Advantages of irradiation preservation method, Irradiation in agriculture, Irradiation to kill microorganisms, Irradiation method in agriculture, What is ebeam irradiation?, Ebeam irradiation, What is x-ray irradiation, X-ray irradiation'
              : 'toanphatgroup, toanphat group, toàn phát group, Dịch vụ cho thuê kho lạnh, Cho thuê kho đông lạnh, Kho lạnh Long An, Kho lạnh Bến Lức, Kho đông lạnh, Cho thuê kho lạnh tại tphcm, Cho thuê kho kcn Phú An Thạnh, Cho thuê kho kcn long hậu, Bảng giá kho lạnh, Giá thuê kho lạnh, Cho thuê kho, Kho lạnh bảo quản nông sản, Kho lạnh bảo quản trái cây, Chieu xa, Chiếu xạ là gì, Công ty TNHH Chiếu xạ Toàn Phát, Các công ty chiếu xạ ở Việt Nam, Các cơ sở chiếu xạ sản ở Việt Nam, Công ty chiếu xạ, Nhà máy chiếu xạ Toàn Phát, Bảo quản bằng chiếu xa, Trung tâm chiếu xạ, Các trung tâm chiếu xạ sản ở Việt Nam, Máy chiếu xạ thực phẩm, Chiếu xạ trái cây xuất khẩu, Chiếu xạ tia gamma là gì, Chiếu xạ tia gamma, Máy chiếu xạ trái cây, Trung tâm chiếu xạ khử trùng, Chiếu xạ trái cây để làm gì, Chiếu xạ hạt giống, Chiếu xạ là phương pháp bảo quản, Chiếu xạ hạt giống để cải tạo giống cây trồng, Ưu điểm phương pháp bảo quản bằng chiếu xạ, Chiếu xạ trong nông nghiệp, Chiếu xạ để diệt vi sinh vật, Phương pháp chiếu xạ trong nông nghiệp, chiếu xạ ebeam là gì, chiếu xạ ebeam, chiếu xạ tia x là gì, chiếu xạ tia x'
          }
        />
      </Head>
      <div className="flex flex-col max-w-7xl h-auto m-auto p-1 items-center justify-center">
        <h1 className="text-4xl font-extrabold col-span-3 row-span-1 mt-4 mb-2">
          {locale === 'en-US' ? titleEn : titleVi}
        </h1>
        <div className="bg-slate-200 w-1/3 h-1 ml-4 mr-4"></div>
        <div className="flex flex-row">
          <div className="flex flex-col lg:w-4/5 items-center justify-start mt-8">
            <div className="flex flex-col m-0">
              <EntriesWithPagination entries={entries} />
              <Pagination currentPage={currentPage} pageCount={pageCount} basePageURL={basePageURL} />
            </div>
          </div>
          <div className="hidden lg:flex flex-col w-1/5 mt-8">
            <SideBanner />
          </div>
        </div>
      </div>
    </>
  );
}
