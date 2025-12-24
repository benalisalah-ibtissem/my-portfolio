/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignore les erreurs ESLint pendant le build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optionnel : ignore aussi les erreurs TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;