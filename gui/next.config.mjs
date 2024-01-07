import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  compress: true,
  devIndicators: {
    buildActivity: false,
  },
  experimental: {
    appDir: true,
    gzipSize: true,
  },
};

if (!process.argv.includes("--turbo")) {
  if (typeof nextConfig.experimental === "undefined")
    nextConfig.experimental = {};
  // nextConfig.experimental.swcMinify = true;
  // nextConfig.experimental.typedRoutes = true;
  // nextConfig.experimental.serverMinification = true;
  // nextConfig.experimental.appDocumentPreloading = true;
}

export default million.next(nextConfig, {
  mode: "react",
  optimize: false,
  server: true,
});
