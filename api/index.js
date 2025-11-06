const INSTANCES = [
  'https://njump.me',
  'https://nostr.at',
  'https://nostr.eu',
  'https://nostr.ae'
];

export default async function handler(request) {
  const url = new URL(request.url);
  const path = url.pathname.substring(1); // Remove leading slash
  const query = url.search;
  
  // Randomly select instance
  const instance = INSTANCES[Math.floor(Math.random() * INSTANCES.length)];
  
  // Build target URL
  const targetUrl = path 
    ? `${instance}/${path}${query}`
    : `${instance}${query}`;
  
  return Response.redirect(targetUrl, 302);
}

