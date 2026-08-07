import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/privacy-policy", destination: "/legal/privacy", permanent: true },
      { source: "/privacy-policy/", destination: "/legal/privacy", permanent: true },
      { source: "/terms-and-condition", destination: "/legal/terms", permanent: true },
      { source: "/terms-and-condition/", destination: "/legal/terms", permanent: true },
      { source: "/terms-and-conditions", destination: "/legal/terms", permanent: true },
      { source: "/terms-and-conditions/", destination: "/legal/terms", permanent: true },
      { source: "/refund-and-return", destination: "/legal/refund", permanent: true },
      { source: "/refund-and-return/", destination: "/legal/refund", permanent: true },
      { source: "/demo", destination: "/", permanent: false },
      { source: "/demo/", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
