import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  trailingSlash: false,
  images: {
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
};

export default nextConfig;
