import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Solution detail pages moved from /solutions/<slug> to root /<slug>.
      // Keep any old nested URLs working (permanent).
      {
        source: "/solutions/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
