# Quality record

Status: initial source candidate. Verification must be recorded in Beads after the standalone
checkout passes its gates; this file does not imply publication or external publisher setup.

| Area | Enforced evidence | Limit |
| --- | --- | --- |
| Package graph | `pnpm check:arch` | Static imports and declared exceptions |
| Knowledge | `pnpm check:docs` | Links, indexes and IDs; prose still needs review |
| Source scope | `pnpm check:source` | Approved packages and required harness files |
| Models and adapters | Types, ESLint, unit and Chromium tests | No private host E2E suite here |
| Distribution | `pnpm check:release` | Exact tarballs, declarations and fresh consumers |
| Release authorization | Protected environment and trusted-publisher review | Requires actual external setup |

Keep acceptance evidence in the owning bead. Add a regression for a new failure mode and
promote recurring review feedback into a guard or owning document. Do not label an unverified
area complete merely because adjacent tests pass.

## Gyral 0.3.7 (2026-10-28)

The catalog pins the five Gyral packages the libraries use (core, http, router, ssr and
testing) to 0.3.7 instead of 0.3.1, and one core is installed. Refreshing the lockfile
also dropped entries no workspace package uses, left from the repository split. The
browser project no longer lists `@gyral/core` in `optimize`: Gyral 0.3.7's preset
pre-bundles its own packages.

Gyral 0.3.2–0.3.7 needed no source or test change. ESLint finds no template rule 16
sites and the type check finds no reserved prop names. The light-DOM and
init-after-render changes break no Chromium test. The full `pnpm check` passes: 100 unit
files with 1,274 tests and 15 skips, 29 browser files with 183 tests, all package builds,
and the installed consumer for all 17 tarballs, including Gyral SSR hydration and the
PWA build. A patch Changeset is prepared for the five libraries that depend on Gyral.
Library versions are unchanged at 0.2.0, and nothing is published.

## Arcade graphics notices (2026-10-19)

The arcade viewport suppresses empty renderer-status paragraphs. Previously its positioned,
padded notice style painted a blank light/dark bar over healthy graphics. Nonempty failure
and recovery messages retain their existing presentation. The new Chromium regression was
observed failing before the fix; the complete browser suite passes 183 tests across 29 files.
Arcade types, ESLint, formatting and package build, plus source/architecture/docs gates,
pass. The host's installed patch matches the rebuilt stylesheet and its real-3D recovery
regression passes. A patch Changeset is prepared; this source change is not yet published.

## Daily indexes with companion packs (2026-10-19)

Daily index rebuilding now selects only canonical game-and-date puzzle identities from
the shared store. Companion packs retain their separate catalog. The mixed-store regression
failed with a duplicate-date schema error before the fix and now passes, preserving the
pack record, file and catalog. All 74 content unit tests, package types, ESLint, formatting
and build pass, along with source/architecture/docs gates.

The installed host patch matches the rebuilt pipeline module byte for byte. Its real content
rerun repairs existing daily indexes without regenerating puzzles or calling a model;
browser checks load the affected daily game and its companion catalog successfully.
A patch Changeset is prepared; the source and installed host patch remain unpublished.
