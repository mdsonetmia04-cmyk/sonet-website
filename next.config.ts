import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/prompt-ex",
        destination: "/projects/promptex",
        permanent: true,
      },
      {
        source: "/projects/skillverse",
        destination: "/projects/skillverse-by-sonet",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
