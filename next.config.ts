import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    // Optimize CSS loading
    optimizeCss: true,
    // Enable turbo mode for faster builds
    turbo: {
      resolveAlias: {
        '@/*': ['./src/*'],
      },
    },
  },

  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [], // Add external image domains here if needed
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable strict mode for better performance
  reactStrictMode: true,

  // PoweredByHeader
  poweredByHeader: false,

  // Compress responses
  compress: true,

  // Generate source maps in development only
  productionBrowserSourceMaps: false,

  // Webpack configuration for better optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundles
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      };
    }

    return config;
  },

  // Type checking
  typescript: {
    // Only run type checking in CI/production
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
