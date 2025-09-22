export function assetUrl(id?: string, key?: string, params?: Record<string, string | number>) {
  if (!id) return "";
  const base = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${id}`;
  const q = new URLSearchParams({ ...(key ? { key } : {}), ...(params || {}) });
  return q.size ? `${base}?${q}` : base;
}
