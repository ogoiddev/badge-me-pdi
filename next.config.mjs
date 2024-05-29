import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
};

const pwaConfig = withPWA({
  dest: 'public'
});

export default pwaConfig(nextConfig);
