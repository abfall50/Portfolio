/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["humancoders-formations.s3.amazonaws.com", "cdn.sanity.io"]
  }
}

module.exports = nextConfig
