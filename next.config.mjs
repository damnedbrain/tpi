/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'vi'],
    defaultLocale: 'vi',
    localeDetection: false,
  }
};

export default nextConfig;
