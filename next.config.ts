import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
