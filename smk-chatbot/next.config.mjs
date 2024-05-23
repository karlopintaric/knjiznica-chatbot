/** @type {import('next').NextConfig} */
import fs from "fs";
import webpack from "./webpack.config.mjs";

const nextConfig = JSON.parse(fs.readFileSync("./next.config.json", "utf-8"));
nextConfig.webpack = webpack;

module.exports = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }

export default nextConfig;
