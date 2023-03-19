/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: true
  },
  transpilePackages: ['@acme/ui', 'lodash-es']
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
