import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    domains: ['cdn.a1.art'],
  },
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
