export default function myImageLoader({ src }) {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/prussian_palette' : '';
  if (src.startsWith('/')) {
    return `${basePath}${src}`;
  }
  return src;
}
