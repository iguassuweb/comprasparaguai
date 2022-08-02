import("next").NextConfig;

const nextConfig = {
  images: {
    domains: [
      "loumarmedia.s3.amazonaws.com",
      "loumarmedia.s3.sa-east-1.amazonaws.com",
      "loumarturismo.com.br",
      "i.ytimg.com",
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
