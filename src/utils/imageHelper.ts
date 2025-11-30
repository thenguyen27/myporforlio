export function cloudify(url: string, width?: number) {
  // If VITE_CDN_BASE is set, construct a fetch URL to proxy the image through the CDN
  // Example: VITE_CDN_BASE=https://res.cloudinary.com/demo/fetch
  // cloudify('https://images.unsplash.com/..', 800) => 'https://res.cloudinary.com/demo/fetch/w_800/https://images.unsplash.com/..'

  const base = import.meta.env.VITE_CDN_BASE
  if (!base) return url

  try {
    const encoded = encodeURIComponent(url)
    if (width) return `${base}/w_${width}/${url}`
    return `${base}/${url}`
  } catch (e) {
    return url
  }
}
