export default function myImageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const url = src.startsWith('/') ? `${basePath}${src}` : src;
  return `${url}?w=${width}&q=${quality || 75}`;
}
