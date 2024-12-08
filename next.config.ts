import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.a1.art',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
