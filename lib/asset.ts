/**
 * Optional external CDN for files in /public (e.g. /images/*).
 * Unset = no change (files are served by Vercel as today). To offload images to
 * Cloudflare R2 / Cloudinary / Bunny, upload /public/images keeping the same paths,
 * set NEXT_PUBLIC_ASSET_CDN_URL=https://cdn.example.com in Vercel and redeploy.
 */
const CDN = (process.env.NEXT_PUBLIC_ASSET_CDN_URL || "").replace(/[/]+$/, "");

export function asset(path: string): string {
  if (!CDN || !path.startsWith("/") || path.startsWith("//")) return path;
  return CDN + path;
}
