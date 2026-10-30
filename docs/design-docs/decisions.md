# Decisions

| ID | Decision | Evidence |
| --- | --- | --- |
| D-01 | Original code in all 17 libraries uses MIT; third-party terms remain separate. | [License](../../packages/LICENSE), [notice](../../NOTICE) |
| D-02 | Public source is joystyk-games/game-libraries; host applications and games remain separate. | [Architecture](../../ARCHITECTURE.md) |
| D-03 | Beads is the only work tracker; the public project starts with independent history. | [Plans](../PLANS.md) |
| D-04 | Hosted checks validate untrusted contributions; protected hosted OIDC stages reviewed releases. | [Releasing](../RELEASING.md) |
| D-05 | Follow harness engineering: short maps, indexed knowledge, enforced invariants and observable verification. | [Reference](../references/harness-engineering.md) |
| D-06 | Follow Gyral's manual GitHub release flow: one-time placeholders, stage-only OIDC from release.yml, then owner approval on npm with 2FA. | [Releasing](../RELEASING.md) |
| D-07 | Libraries that import Gyral take each `@gyral/*` package as a caret peer (`^0.3.8`, the `peers` catalog) and the tested version as a dev dependency, never as a dependency, and import only Gyral's public entry points, so an app keeps one core. `check:release` enforces the ranges and one installed copy (Gyral ADR 0033, 2026-10-29). | [Peer check](../../scripts/release/peers.ts) |
