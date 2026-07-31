import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/compare",
        destination: "/compare-plans",
        permanent: true,
      },
      {
        source: "/product-feature-anti-cheating-and-proctoring",
        destination: "/anti-cheating-and-proctoring",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
