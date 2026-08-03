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
      {
        // Test detail pages moved to the live nested pattern /test-library/<slug>.
        source: "/test-library-detail",
        destination: "/test-library/attention-to-detail-visual",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
