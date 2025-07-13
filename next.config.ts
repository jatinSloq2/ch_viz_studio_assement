import type { NextConfig } from 'next';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.prod.website-files.com'],
  },
};

export default nextConfig;