import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["md", "tsx", "ts", "jsx", "js", "md", "mdx"],
  swcMinify: true,
}

export default withContentlayer(nextConfig)
