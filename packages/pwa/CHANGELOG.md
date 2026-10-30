# @joystyk/pwa

## 0.3.1

### Patch Changes

- 5535358: Depend on zod 4.6.7 instead of 4.6.5. Zod before 4.6.6 can exhaust memory while validating
  oversized constrained collections (GHSA-mrhx-c7xc-m3w5, high), and these libraries parse
  network, storage and configuration input with zod. Applications then get the fix without
  overriding the libraries' zod version.
- Updated dependencies [5535358]
  - @joystyk/daily@0.3.1
  - @joystyk/storage@0.3.1
  - @joystyk/contracts@0.3.1

## 0.3.0

### Patch Changes

- @joystyk/contracts@0.3.0
  - @joystyk/daily@0.3.0
  - @joystyk/storage@0.3.0

## 0.2.1

### Patch Changes

- @joystyk/contracts@0.2.1
  - @joystyk/daily@0.2.1
  - @joystyk/storage@0.2.1

## 0.2.0

### Patch Changes

- Updated dependencies [bb095c7]
- Updated dependencies [bb095c7]
  - @joystyk/contracts@0.2.0
  - @joystyk/storage@0.2.0
  - @joystyk/daily@0.2.0

## 0.1.0

### Minor Changes

- Prepare the first compiled library release: ESM and API declarations for every public entry point, runtime assets, and checks against installed npm tarballs. Games and applications remain private.

### Patch Changes

- Updated dependencies
  - @joystyk/contracts@0.1.0
  - @joystyk/storage@0.1.0
  - @joystyk/daily@0.1.0
