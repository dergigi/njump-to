import { LRUCache } from './lru.js';

export const config = {
  runtime: 'edge',
};

const INSTANCES = [
  'https://njump.me',
  'https://nostr.at',
  'https://nostr.eu',
  'https://nostr.ae',
  'https://nostr.com'
];

const cache = new LRUCache();

// Helper to get header value (works with both Headers object and plain object)
function getHeader(headers, name) {
  if (!headers) return null;
  if (typeof headers.get === 'function') {
    return headers.get(name) || headers.get(name.toLowerCase());
  }
  return headers[name] || headers[name.toLowerCase()] || null;
}

function getTargetUrl(path, query) {
  let instance = cache.get(path);

  if (!instance) {
    instance = INSTANCES[Math.floor(Math.random() * INSTANCES.length)];
    cache.set(path, instance);
  }

  return path ? `${instance}/${path}${query}` : `${instance}${query}`;
}

export default async function handler(request) {
  const requestPath = request.url || '/';
  
  // Parse URL - construct full URL if needed
  let path = '';
  let query = '';
  
  try {
    const url = requestPath.startsWith('http')
      ? new URL(requestPath)
      : new URL(requestPath, `${getHeader(request.headers, 'x-forwarded-proto') || 'https'}://${getHeader(request.headers, 'host') || getHeader(request.headers, 'x-forwarded-host') || 'localhost'}`);
    path = url.pathname.substring(1);
    query = url.search;
  } catch {
    // Fallback: parse manually
    const [pathPart, queryPart] = requestPath.split('?');
    path = pathPart.substring(1);
    query = queryPart ? `?${queryPart}` : '';
  }
  
  return Response.redirect(getTargetUrl(path, query), 302);
}
