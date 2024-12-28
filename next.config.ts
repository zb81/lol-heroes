import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "game.gtimg.cn",
      }
    ]
  }
};

export default nextConfig;
