const path = require('path');
const securityHeaders = [
  {
    key: 'Cache-Control',
    value: 'public, s-maxage=600, stale-while-revalidate=6000',
  },
];

module.exports = {

  reactStrictMode: false,
  basePath: "",
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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '**',
      },
    ],
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
