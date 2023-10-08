const path = require('path');
const { THITRUONG_V2_URL } = process.env;
const securityHeaders = [
  {
    key: 'Cache-Control',
    value: 'public, s-maxage=600, stale-while-revalidate=6000',
  },
];

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/thi-truong',
        destination: `${THITRUONG_V2_URL}/blog`,
      },
      {
        source: '/thi-truong/:path*',
        destination: `${THITRUONG_V2_URL}/blog/:path*`,
      },
    ]
  },
  reactStrictMode: false,
  trailingSlash: true,
  generateEtags: false,
  i18n: {
    // providing the locales supported by your application
    locales: ['vi', 'en-US'],
    //  default locale used when the non-locale paths are visited
    defaultLocale: 'vi',
    localeDetection: false,
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: ['pages', 'src'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    rootDomains: process.env.REACT_APP_ROOT_DOMAIN,
  },
  images: {
    domains: ['images.ctfassets.net', 'res.cloudinary.com'],
    formats: ['image/webp'],
  },

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
