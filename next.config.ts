import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
  },
  experimental: { appDir: true },
};

export default nextConfig;