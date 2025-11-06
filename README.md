# njump.to

Fast, reliable redirect service that provides a single URL (`https://njump.to/`) that automatically forwards users to a random njump mirror instance. Deployed on Vercel Edge Functions for maximum speed and global distribution.

**Live at: [https://njump.to/](https://njump.to/)**

## How it works

The service provides a single, memorable URL (`https://njump.to/`) that automatically forwards to a random njump mirror, eliminating the need to remember or choose between multiple instances.

- Randomly selects from: njump.me, nostr.at, nostr.eu, nostr.ae, nostr.com
- Preserves all paths and query parameters
- Runs on Vercel's edge network for sub-10ms response times
- Zero dependencies, minimal code

## Mirror List

The service randomly forwards to one of the following njump mirror instances:

- [njump.me](https://njump.me)
- [nostr.at](https://nostr.at)
- [nostr.eu](https://nostr.eu)
- [nostr.ae](https://nostr.ae)
- [nostr.com](https://nostr.com)

## Development

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Run local development server
npm run dev
```

## Deployment

### Option 1: Vercel CLI

```bash
# Deploy to Vercel
npm run deploy
```

Follow the prompts to link your project.

### Option 2: GitHub Integration

1. Push this repository to GitHub
2. Import the project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel will automatically deploy on every push

## Domain Configuration

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add `njump.to` (and optionally `www.njump.to`)
4. Update your DNS records as instructed by Vercel:
   - Add the CNAME or A record provided by Vercel
   - Wait for DNS propagation (usually a few minutes)

## Examples

- `https://njump.to/` → redirects to random njump instance
- `https://njump.to/npub1abc...` → redirects to random instance with the npub
- `https://njump.to/nevent1xyz...` → redirects to random instance with the nevent
- `https://njump.to/nostr.com` → redirects to random instance with NIP-05 profile

## Architecture

- **Runtime**: Vercel Edge Runtime (runs at edge locations worldwide)
- **Function**: Single edge function at `api/index.js`
- **Instances**: 5 njump mirrors for redundancy
- **No dependencies**: Pure JavaScript using Web APIs
