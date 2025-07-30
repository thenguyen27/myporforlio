import type { NextConfig } from "next";

const repoName = "myporforlio"; // ✨ thay bằng tên repo của bạn
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/myporforlio" : "",
  assetPrefix: isProd ? "/myporforlio/" : "",
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
