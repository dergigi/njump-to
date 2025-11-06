# njump.to

[njump.to](https://njump.to) is a fast (and hopefully reliable) redirect service that provides a single URL to automatically forward users to a random njump mirror instance.

Don't know what njump is? Learn more at [njump.me/about](https://njump.me/about) or check out the source code at [fiatjaf/njump](https://github.com/fiatjaf/njump).

## How it works

The service provides a single, memorable URL (`njump.to`) that automatically forwards to a random njump mirror, eliminating the need to remember or choose between multiple instances.

- Randomly selects from: njump.me, nostr.at, nostr.eu, nostr.ae, nostr.com
- Preserves all paths and query parameters
- Zero dependencies, minimal code

## Examples

- [njump.to](https://njump.to) → redirects to random njump instance
- [njump.to/npub1derggg...xzpc](https://njump.to/npub1dergggklka99wwrs92yz8wdjs952h2ux2ha2ed598ngwu9w7a6fsh9xzpc) → redirects to random instance with the npub
- [njump.to/nevent1qqs...476g](https://njump.to/nevent1qqsqm2lz4ru6wlydzpulgs8m60ylp4vufwsg55whlqgua6a93vp2y4gpzamhxue69uhhyetvv9ujuer9wfnkjemf9e3k7mgzyphydppzm7m554ecwq4gsgaek2qk32atse2l4t9ks57dpms4mmhfxjc476g) → redirects to random instance with the nevent
- [njump.to/dergigi.com](https://njump.to/dergigi.com) → redirects to random instance with NIP-05 identifier
- [njump.to/fiatjaf.com](https://njump.to/fiatjaf.com) → same as above
- [njump.to/lyn@primal.net](https://njump.to/lyn@primal.net) → same

## Mirror List

The service randomly forwards to one of the following njump mirror instances:

- [njump.me](https://njump.me)
- [nostr.at](https://nostr.at)
- [nostr.eu](https://nostr.eu)
- [nostr.ae](https://nostr.ae)
- [nostr.com](https://nostr.com)

Want to add a mirror? Please open a PR!

## Known Issues

`nostr.com` doesn't seem to resolve root-level NIP-05 identifiers correctly, for example:

- [nostr.com/dergigi.com](https://nostr.com/dergigi.com) → fails, redirects to nostr.com
- [nostr.com/@dergigi.com](https://nostr.com/@dergigi.com) → fails (can't decode profile)
- [nostr.com/_@dergigi.com](https://nostr.com/_@dergigi.com) → succeeds

However, all three of these identifiers should be treated the same as per [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md#showing-just-the-domain-as-an-identifier).

Note that [njump.me/dergigi.com](https://njump.me/dergigi.com) resolves just fine on njump.me and the other mirrors, so this seems to be a nostr.com issue.

## Contributors

<a align="center" href="https://github.com/dergigi/njump-to/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dergigi/njump-to" />
</a>
