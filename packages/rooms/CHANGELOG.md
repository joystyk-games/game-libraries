# @joystyk/rooms

## 0.3.1

### Patch Changes

- 5535358: Depend on zod 4.6.7 instead of 4.6.5. Zod before 4.6.6 can exhaust memory while validating
  oversized constrained collections (GHSA-mrhx-c7xc-m3w5, high), and these libraries parse
  network, storage and configuration input with zod. Applications then get the fix without
  overriding the libraries' zod version.
- Updated dependencies [5535358]
  - @joystyk/identity@0.3.1
  - @joystyk/ops@0.3.1
  - @joystyk/contracts@0.3.1
  - @joystyk/kit@0.3.1

## 0.3.0

### Patch Changes

- @joystyk/contracts@0.3.0
  - @joystyk/identity@0.3.0
  - @joystyk/kit@0.3.0
  - @joystyk/ops@0.3.0

## 0.2.1

### Patch Changes

- @joystyk/contracts@0.2.1
  - @joystyk/identity@0.2.1
  - @joystyk/kit@0.2.1
  - @joystyk/ops@0.2.1

## 0.2.0

### Minor Changes

- bb095c7: A heavy AI the job pool couldn't answer is asked again with backoff instead of playing the
  timeout move. `ai-chosen` without a command now carries the pool's `failure`, `LiveRoom` gains
  `aiRetry`, and `CoreLimits` gains `aiRetryMs`, `aiRetryMaxMs` and `aiAttempts`. The worker pool
  runs each worker's jobs one at a time, counts a job's timeout from when it starts, and reports
  `busy`, `lost` and `crashed` separately (`PoolOutcome`).

### Patch Changes

- bb095c7: Share canonical IPv4 and IPv6 /64 rate-limit keys across Node services. Keep room
  initialization diagnostics on the server behind a client-safe reference, and expire old
  message-rate strikes. Extend hidden-information conformance checks with transition-aware
  perturbations so private events remain testable when recipients gain cards.
- Updated dependencies [bb095c7]
- Updated dependencies [bb095c7]
- Updated dependencies [bb095c7]
  - @joystyk/contracts@0.2.0
  - @joystyk/ops@0.2.0
  - @joystyk/identity@0.2.0
  - @joystyk/kit@0.2.0

## 0.1.0

### Minor Changes

- Prepare the first compiled library release: ESM and API declarations for every public entry point, runtime assets, and checks against installed npm tarballs. Games and applications remain private.

### Patch Changes

- Updated dependencies
  - @joystyk/contracts@0.1.0
  - @joystyk/kit@0.1.0
  - @joystyk/identity@0.1.0
