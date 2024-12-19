/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codewars.com",
      },
    ],
  },
};

module.exports = nextConfig;
