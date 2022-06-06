/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n: { // not compatible with next export
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
  images: {
    domains: ["web-dev.imgix.net"],
  },
};

module.exports = nextConfig;
