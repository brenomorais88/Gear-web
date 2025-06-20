import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
  },
  experimental: { appDir: true },
  eslint: {
    // ignora erros de lint no build de produção
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;