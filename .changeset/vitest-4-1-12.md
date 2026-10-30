---
'@joystyk/testing': patch
---

Take Vitest 4.1.12 as the peer instead of 4.1.11. Vitest 4.1.12 fixes two development-only
`@vitest/mocker` advisories (GHSA-qxg6-89mg-rqv8 and GHSA-xp26-3454-mjgp, moderate). The peer
is exact, so until this ships, an application that moves to Vitest 4.1.12 sees an unmet peer
for `@joystyk/testing`.
