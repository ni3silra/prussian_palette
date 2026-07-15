/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/prussian_palette' : '';

const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
  basePath: basePath,
  assetPrefix: basePath,
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
