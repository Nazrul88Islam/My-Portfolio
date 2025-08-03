/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable React DevTools in development
  reactDevOverlay: true,
  // Disable server component cache in development
  experimental: {
    serverComponentsExternalPackages: ["@radix-ui/react-avatar"],
  },
};

module.exports = nextConfig;
