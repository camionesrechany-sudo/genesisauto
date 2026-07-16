import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isStaticExport = isGitHubPages || process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath: isGitHubPages ? "/genesisauto" : undefined,
  assetPrefix: isGitHubPages ? "/genesisauto/" : undefined,
  trailingSlash: isGitHubPages,
  typescript: {
    ignoreBuildErrors: isStaticExport,
  },
};

export default nextConfig;
