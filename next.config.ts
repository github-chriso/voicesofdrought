import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Produce a fully static site for hosting flexibility
  output: 'export',
  // Ensure clean static URLs that map to folder index.html on static hosts
  trailingSlash: true,

  // Strict validation for production readiness
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Image configuration for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'regionalcommunity.support',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Note: Security headers would be configured via hosting provider
  // since static export doesn't support Next.js headers function
};

export default nextConfig;
