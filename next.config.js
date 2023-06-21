/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ['https://store.storeimages.cdn-apple.com']
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'store.storeimages.cdn-apple.com',
        port: '',
        pathname: '/4982/as-images.apple.com/is/**',
      },
    ],
  },
};

module.exports = nextConfig;
