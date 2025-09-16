import type { NextConfig } from "next";

const repoName = "myporforlio"; 
const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: "export",
  // Chỉ apply basePath khi build cho GitHub Pages
  basePath: (isProd && isGitHubPages) ? `/${repoName}` : "",
  assetPrefix: (isProd && isGitHubPages) ? `/${repoName}/` : "",
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