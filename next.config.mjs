/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: '',
  i18n: {
    locales: ['en-US', 'vi'],
    defaultLocale: 'vi',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '**',
      },
    ],
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      {
        source: "/thi-truong-v2/:path*",
        destination: "/thi-truong/:path*",
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
