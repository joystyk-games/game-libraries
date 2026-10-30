# @joystyk/testing

## 0.3.1

### Patch Changes

- 5535358: Take Vitest 4.1.12 as the peer instead of 4.1.11. Vitest 4.1.12 fixes two development-only
  `@vitest/mocker` advisories (GHSA-qxg6-89mg-rqv8 and GHSA-xp26-3454-mjgp, moderate). The peer
  is exact, so until this ships, an application that moves to Vitest 4.1.12 sees an unmet peer
  for `@joystyk/testing`.
- @joystyk/session@0.3.1
  - @joystyk/contracts@0.3.1
  - @joystyk/kit@0.3.1

## 0.3.0

### Patch Changes

- @joystyk/contracts@0.3.0
  - @joystyk/kit@0.3.0
  - @joystyk/session@0.3.0

## 0.2.1

### Patch Changes

- @joystyk/contracts@0.2.1
  - @joystyk/kit@0.2.1
  - @joystyk/session@0.2.1

## 0.2.0

### Minor Changes

- bb095c7: Share canonical IPv4 and IPv6 /64 rate-limit keys across Node services. Keep room
  initialization diagnostics on the server behind a client-safe reference, and expire old
  message-rate strikes. Extend hidden-information conformance checks with transition-aware
  perturbations so private events remain testable when recipients gain cards.

### Patch Changes

- Updated dependencies [bb095c7]
- Updated dependencies [bb095c7]
  - @joystyk/contracts@0.2.0
  - @joystyk/session@0.2.0
  - @joystyk/kit@0.2.0

## 0.1.0

### Minor Changes

- Prepare the first compiled library release: ESM and API declarations for every public entry point, runtime assets, and checks against installed npm tarballs. Games and applications remain private.

### Patch Changes

- Updated dependencies
  - @joystyk/contracts@0.1.0
  - @joystyk/kit@0.1.0
  - @joystyk/session@0.1.0
