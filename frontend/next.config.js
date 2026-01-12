/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Removed rewrites - frontend will call backend API directly via NEXT_PUBLIC_API_URL
};

module.exports = nextConfig;
