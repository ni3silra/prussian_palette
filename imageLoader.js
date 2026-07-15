export default function myImageLoader({ src }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (src.startsWith('/')) {
    return `${basePath}${src}`;
  }
  return src;
}
