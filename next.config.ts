import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      @use "@/shared/styles/colors.scss" as *;
      @use "@/shared/styles/fonts.scss" as *;
    `,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/product-images/**',
      },
    ],
  },
};

export default nextConfig;
