import NextLink from "next/link";
import type { ComponentProps } from "react";

/**
 * next/link with prefetch OFF by default.
 * Every visible Link otherwise fires a background RSC request for its page:
 * 30-70 extra Vercel CDN requests per page view, plus an ISR Read and Fast
 * Origin Transfer on each regional cache miss. Pass prefetch={true} to opt in.
 */
export default function Link({ prefetch = false, ...props }: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={prefetch} {...props} />;
}
