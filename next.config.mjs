/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
  },
};

export default nextConfig;
