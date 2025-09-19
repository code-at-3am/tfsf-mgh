import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      new URL('https://tfsf-mgh.s3.eu-west-1.amazonaws.com/**')
    ]
  }
};

export default nextConfig;
