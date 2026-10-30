// Gyral is a caret peer of the published libraries, never a dependency, so an application's
// one copy of each Gyral package is shared (D-07, Gyral's component-libraries guide).
import type { Manifest } from './packages.ts';

const VERSION = /^(\d+)\.(\d+)\.(\d+)$/;

/** Whether the caret range `^x.y.z` admits the exact `version` (0.y stays within 0.y, 0.0.z is exact). */
export const caretAllows = (range: string, version: string): boolean => {
  const floor = range.startsWith('^') ? VERSION.exec(range.slice(1)) : null;
  const exact = VERSION.exec(version);
  if (floor === null || exact === null) return false;
  const [major, minor, patch] = floor.slice(1).map(Number) as [number, number, number];
  const [m, n, p] = exact.slice(1).map(Number) as [number, number, number];
  if (m !== major) return false;
  if (major === 0 && n !== minor) return false;
  if (major === 0 && minor === 0) return p === patch;
  return n > minor || (n === minor && p >= patch);
};

/** What breaks the peer rule in a packed manifest: one message per Gyral package. */
export const gyralPeerProblems = (packed: Manifest): readonly string[] => [
  ...Object.keys(packed.dependencies ?? {})
    .filter((name) => name.startsWith('@gyral/'))
    .map((name) => `${name} is a dependency; list it in peerDependencies with a caret range`),
  ...Object.entries(packed.peerDependencies ?? {})
    .filter(([name]) => name.startsWith('@gyral/'))
    .flatMap(([name, range]) => {
      const tested = packed.devDependencies?.[name];
      return tested !== undefined && caretAllows(range, tested)
        ? []
        : [`peer ${name}@${range} must be a caret range that admits the tested ${name}@${tested ?? '(none)'}`];
    }),
];
