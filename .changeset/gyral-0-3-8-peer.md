---
'@joystyk/arcade': minor
'@joystyk/cards-ui': minor
'@joystyk/catalog': minor
'@joystyk/launcher': minor
'@joystyk/ui': minor
---

Take Gyral as a peer dependency, `^0.3.8`, instead of depending on one exact version, and build
and test against Gyral 0.3.8. The application now installs `@gyral/core` itself (and, for the
catalog, `@gyral/http`, `@gyral/router` and `@gyral/ssr`, all at one Gyral version), and every
library uses that one copy: no override is needed to keep a single core. Gyral 0.3.7 and older no
longer satisfy the peer, so an application upgrades Gyral to 0.3.8 or a later 0.3 release with
these libraries.

Inside, the components use Gyral 0.3.8's built-ins: driver lists with `token.provide()` and
`subscription(token, …)`, `on()` parsers typed by their event in the card table, hand and
solitaire board, and `subscription` `equals` and `select` in place of the arcade HUD's hand-written
deduplication. `createControlDrivers` keeps its record of drivers under the caller's names.
