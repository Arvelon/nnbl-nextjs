import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
   images: {
    unoptimized: true, // 👈 disables runtime optimization for static export
  },
};

export default nextConfig;
