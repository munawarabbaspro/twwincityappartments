import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

// Everything is crawlable. Search engines and AI assistants are explicitly welcome
// so the business can appear in Google, Bing, ChatGPT, Claude, Perplexity and Gemini answers.
const AI_AND_SEARCH_BOTS = [
  'Googlebot', 'Googlebot-Image', 'Google-Extended', 'Bingbot', 'msnbot', 'DuckDuckBot', 'YandexBot', 'Applebot', 'Applebot-Extended',
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User', 'CCBot', 'Meta-ExternalAgent', 'cohere-ai', 'Amazonbot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_AND_SEARCH_BOTS, allow: '/' },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
