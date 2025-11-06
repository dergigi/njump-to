const INSTANCES = [
  'https://njump.me',
  'https://nostr.at',
  'https://nostr.eu',
  'https://nostr.ae',
  'https://nostr.com'
];

// Helper to get header value (works with both Headers object and plain object)
function getHeader(headers, name) {
  if (!headers) return null;
  if (typeof headers.get === 'function') {
    return headers.get(name) || headers.get(name.toLowerCase());
  }
  // Plain object - check both original and lowercase
  return headers[name] || headers[name.toLowerCase()] || null;
}

export default async function handler(request) {
  // Get path and query from request URL
  let path = '';
  let query = '';
  
  try {
    let url;
    
    // Check if request.url is already a full URL
    if (request.url && request.url.startsWith('http')) {
      url = new URL(request.url);
    } else {
      // Construct full URL from headers
      const host = getHeader(request.headers, 'host') || 
                   getHeader(request.headers, 'x-forwarded-host') || 
                   'localhost';
      const protocol = getHeader(request.headers, 'x-forwarded-proto') || 'https';
      const requestPath = request.url || '/';
      url = new URL(requestPath, `${protocol}://${host}`);
    }
    
    path = url.pathname.substring(1); // Remove leading slash
    query = url.search;
  } catch (error) {
    // Fallback: parse manually if URL construction fails
    const requestPath = request.url || '/';
    const pathMatch = requestPath.match(/^([^?]*)/);
    const queryMatch = requestPath.match(/\?(.*)$/);
    path = pathMatch ? pathMatch[1].substring(1) : '';
    query = queryMatch ? `?${queryMatch[1]}` : '';
  }
  
  // Randomly select instance
  const instance = INSTANCES[Math.floor(Math.random() * INSTANCES.length)];
  
  // Build target URL
  const targetUrl = path 
    ? `${instance}/${path}${query}`
    : `${instance}${query}`;
  
  return Response.redirect(targetUrl, 302);
}

