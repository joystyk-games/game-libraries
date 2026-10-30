# @joystyk/ops

## 0.3.1

### Patch Changes

- 5535358: Depend on zod 4.6.7 instead of 4.6.5. Zod before 4.6.6 can exhaust memory while validating
  oversized constrained collections (GHSA-mrhx-c7xc-m3w5, high), and these libraries parse
  network, storage and configuration input with zod. Applications then get the fix without
  overriding the libraries' zod version.

## 0.3.0

No changes in this release.

## 0.2.1

No changes in this release.

## 0.2.0

### Minor Changes

- bb095c7: Share canonical IPv4 and IPv6 /64 rate-limit keys across Node services. Keep room
  initialization diagnostics on the server behind a client-safe reference, and expire old
  message-rate strikes. Extend hidden-information conformance checks with transition-aware
  perturbations so private events remain testable when recipients gain cards.

## 0.1.0

### Minor Changes

- Prepare the first compiled library release: ESM and API declarations for every public entry point, runtime assets, and checks against installed npm tarballs. Games and applications remain private.
