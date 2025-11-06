# njump.to

[njump.to](https://njump.to) is a fast (and hopefully reliable) redirect service that provides a single URL to automatically forward users to a random njump mirror instance. Deployed on Vercel Edge Functions for maximum speed and global distribution.

Don't know what njump is? Learn more at [njump.me/about](https://njump.me/about) or check out the source code at [github.com/fiatjaf/njump](https://github.com/fiatjaf/njump)

## How it works

The service provides a single, memorable URL (`njump.to`) that automatically forwards to a random njump mirror, eliminating the need to remember or choose between multiple instances.

- Randomly selects from: njump.me, nostr.at, nostr.eu, nostr.ae, nostr.com
- Preserves all paths and query parameters
- Zero dependencies, minimal code

### Examples

- [njump.to](https://njump.to) → redirects to random njump instance
- [njump.to/npub1derg...xzpc](https://njump.to/npub1dergggklka99wwrs92yz8wdjs952h2ux2ha2ed598ngwu9w7a6fsh9xzpc) → redirects to random instance with the npub
- [njump.to/nevent1qqs...476g](https://njump.to/nevent1qqsqm2lz4ru6wlydzpulgs8m60ylp4vufwsg55whlqgua6a93vp2y4gpzamhxue69uhhyetvv9ujuer9wfnkjemf9e3k7mgzyphydppzm7m554ecwq4gsgaek2qk32atse2l4t9ks57dpms4mmhfxjc476g) → redirects to random instance with the nevent
- [njump.to/dergigi.com](https://njump.to/dergigi.com) → redirects to random instance with NIP-05 profile

## Mirror List

The service randomly forwards to one of the following njump mirror instances:

- [njump.me](https://njump.me)
- [nostr.at](https://nostr.at)
- [nostr.eu](https://nostr.eu)
- [nostr.ae](https://nostr.ae)
- [nostr.com](https://nostr.com)

Want to add a mirror? Please open a PR!
