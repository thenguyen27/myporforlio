import type { NextConfig } from "next";

const repoName = "myporforlio";

const nextConfig: NextConfig = {
  output: "export",

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`, // 👈 ép Next.js load assets từ /resources

  trailingSlash: false,

  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
