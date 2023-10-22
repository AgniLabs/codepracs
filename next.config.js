// Import using require
const { withContentlayer } = require("next-contentlayer")

// Dynamically import the env module
import("./env.mjs").catch((err) => {
  console.error("Failed to import env.mjs:", err)
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["md", "tsx", "ts", "jsx", "js", "mdx"], 
  swcMinify: true,
}

// Export using module.exports
module.exports = withContentlayer(nextConfig)
