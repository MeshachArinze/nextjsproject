/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.pluralsight.com",
        port: "",
        pathname: "/id/**",
      },
    ],
  },
};

module.exports = nextConfig
