import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/compare",
        destination: "/compare-plans",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
