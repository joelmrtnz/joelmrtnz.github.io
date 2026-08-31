/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Emits out/es/index.html instead of out/es.html, which every static host serves at /es/.
  trailingSlash: true,
  transpilePackages: ['three'],
  images: { unoptimized: true },
};

export default nextConfig;
