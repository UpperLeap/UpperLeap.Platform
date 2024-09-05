import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/utils/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.gameboost.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blitz-cdn.blitz.gg",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "c.tenor.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
