// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "randomuser.me"],
  },
  experimental: {
    reactRoot: true,
    suppressHydrationWarning: true,
  },
  exportPathMap: async function () {
    return {
      "/courses": { page: "/courses" },
      // Add other paths as needed
    };
  },
};
module.exports = nextConfig;
