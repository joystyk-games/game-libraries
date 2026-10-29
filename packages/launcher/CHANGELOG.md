# @joystyk/launcher

## 0.2.1

### Patch Changes

- 4f50412: Depend on Gyral 0.3.7 instead of 0.3.1, and build and test the libraries against it.
  Applications on Gyral 0.3.7 can then share one `@gyral/core` with these libraries
  without overriding the libraries' Gyral versions.
- Updated dependencies [4f50412]
  - @joystyk/ui@0.2.1
  - @joystyk/contracts@0.2.1
  - @joystyk/daily@0.2.1
  - @joystyk/identity@0.2.1
  - @joystyk/kit@0.2.1
  - @joystyk/session@0.2.1
  - @joystyk/storage@0.2.1

## 0.2.0

### Minor Changes

- bb095c7: Add shared real-time input, pause, pace records and ghost races, plus a WebGL 2 renderer
  lifecycle with context recovery and adaptive quality. Launch daily fixed-step simulations
  from published configs and retain their puzzle identity through saved games.

### Patch Changes

- Updated dependencies [bb095c7]
- Updated dependencies [bb095c7]
  - @joystyk/contracts@0.2.0
  - @joystyk/storage@0.2.0
  - @joystyk/session@0.2.0
  - @joystyk/daily@0.2.0
  - @joystyk/identity@0.2.0
  - @joystyk/kit@0.2.0
  - @joystyk/ui@0.2.0

## 0.1.0

### Minor Changes

- Prepare the first compiled library release: ESM and API declarations for every public entry point, runtime assets, and checks against installed npm tarballs. Games and applications remain private.

### Patch Changes

- Updated dependencies
  - @joystyk/contracts@0.1.0
  - @joystyk/kit@0.1.0
  - @joystyk/storage@0.1.0
  - @joystyk/identity@0.1.0
  - @joystyk/session@0.1.0
  - @joystyk/daily@0.1.0
  - @joystyk/ui@0.1.0
