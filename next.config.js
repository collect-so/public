/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  distDir: "out",

  exportPathMap: async (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) => ({
    "/": { page: "/" },
  }),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
