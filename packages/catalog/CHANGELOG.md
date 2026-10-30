# @joystyk/catalog

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

- Updated dependencies [8275413]
  - @joystyk/launcher@0.3.0
  - @joystyk/ui@0.3.0
  - @joystyk/contracts@0.3.0

## 0.2.1

### Patch Changes

- 4f50412: Depend on Gyral 0.3.7 instead of 0.3.1, and build and test the libraries against it.
  Applications on Gyral 0.3.7 can then share one `@gyral/core` with these libraries
  without overriding the libraries' Gyral versions.
- Updated dependencies [4f50412]
  - @joystyk/launcher@0.2.1
  - @joystyk/ui@0.2.1
  - @joystyk/contracts@0.2.1

## 0.2.0

### Patch Changes

- Updated dependencies [bb095c7]
- Updated dependencies [bb095c7]
  - @joystyk/contracts@0.2.0
  - @joystyk/launcher@0.2.0
  - @joystyk/ui@0.2.0

## 0.1.0

### Minor Changes

- Prepare the first compiled library release: ESM and API declarations for every public entry point, runtime assets, and checks against installed npm tarballs. Games and applications remain private.

### Patch Changes

- Updated dependencies
  - @joystyk/contracts@0.1.0
  - @joystyk/ui@0.1.0
  - @joystyk/launcher@0.1.0
