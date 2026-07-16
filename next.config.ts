import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/genesisauto" : undefined,
  assetPrefix: isGitHubPages ? "/genesisauto/" : undefined,
  trailingSlash: isGitHubPages,
  typescript: {
    ignoreBuildErrors: isGitHubPages,
  },
};

export default nextConfig;
