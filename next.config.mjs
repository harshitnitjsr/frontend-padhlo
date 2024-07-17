// next.config.mjs
/** @type {import('next').NextConfig} */
export const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "randomuser.me"],
  },
  experimental: {
    reactRoot: true,
    suppressHydrationWarning: true,
  },
};
