# Changelog

## 0.3.1

### Patch Changes

- 5535358: Depend on zod 4.6.7 instead of 4.6.5. Zod before 4.6.6 can exhaust memory while validating
  oversized constrained collections (GHSA-mrhx-c7xc-m3w5, high), and these libraries parse
  network, storage and configuration input with zod. Applications then get the fix without
  overriding the libraries' zod version.
- @joystyk/session@0.3.1
  - @joystyk/contracts@0.3.1
  - @joystyk/kit@0.3.1

## 0.3.0

### Minor Changes

- 8275413: Take Gyral as a peer dependency, `^0.3.8`, instead of depending on one exact version, and build
  and test against Gyral 0.3.8. The application now installs `@gyral/core` itself (and, for the
  catalog, `@gyral/http`, `@gyral/router` and `@gyral/ssr`, all at one Gyral version), and every
  library uses that one copy: no override is needed to keep a single core. Gyral 0.3.7 and older no
  longer satisfy the peer, so an application upgrades Gyral to 0.3.8 or a later 0.3 release with
  these libraries.

  Inside, the components use Gyral 0.3.8's built-ins: driver lists with `token.provide()` and
  `subscription(token, …)`, `on()` parsers typed by their event in the card table, hand and
  solitaire board, and `subscription` `equals` and `select` in place of the arcade HUD's hand-written
  deduplication. `createControlDrivers` keeps its record of drivers under the caller's names.

### Patch Changes

- @joystyk/contracts@0.3.0
  - @joystyk/kit@0.3.0
  - @joystyk/session@0.3.0

## 0.2.1

### Patch Changes

- 6226ce5: Hide empty graphics notices so healthy game boards have no blank overlay bar.
  Keep nonempty failure and recovery messages visible.
- 4f50412: Depend on Gyral 0.3.7 instead of 0.3.1, and build and test the libraries against it.
  Applications on Gyral 0.3.7 can then share one `@gyral/core` with these libraries
  without overriding the libraries' Gyral versions.
- @joystyk/contracts@0.2.1
  - @joystyk/kit@0.2.1
  - @joystyk/session@0.2.1

## 0.2.0

### Minor Changes

- bb095c7: Add shared real-time input, pause, pace records and ghost races, plus a WebGL 2 renderer
  lifecycle with context recovery and adaptive quality. Launch daily fixed-step simulations
  from published configs and retain their puzzle identity through saved games.

### Patch Changes

- Updated dependencies [bb095c7]
- Updated dependencies [bb095c7]
  - @joystyk/contracts@0.2.0
  - @joystyk/session@0.2.0
  - @joystyk/kit@0.2.0

## 0.1.0

Initial shared arcade kit (host policy).
