import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages / static hosting
  output: "export",
  images: {
    // GitHub Pages doesn't support Next.js Image Optimization
    unoptimized: true,
  },
};

export default nextConfig;
