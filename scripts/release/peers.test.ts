import { expect, it } from 'vitest';
import { caretAllows, gyralPeerProblems } from './peers.ts';

const manifest = (fields: object) => ({ name: '@joystyk/ui', version: '0.3.0', ...fields });

it('reads a 0.x caret range as npm does', () => {
  expect(caretAllows('^0.3.8', '0.3.8')).toBe(true);
  expect(caretAllows('^0.3.8', '0.3.12')).toBe(true);
  expect(caretAllows('^0.3.8', '0.3.7')).toBe(false);
  expect(caretAllows('^0.3.8', '0.4.0')).toBe(false);
  expect(caretAllows('^0.0.3', '0.0.4')).toBe(false);
  expect(caretAllows('^1.2.0', '1.9.0')).toBe(true);
  expect(caretAllows('0.3.8', '0.3.8')).toBe(false);
  expect(caretAllows('~0.3.8', '0.3.8')).toBe(false);
});

it('accepts Gyral as a caret peer that admits the tested version', () => {
  const packed = manifest({
    dependencies: { zod: '4.6.5' },
    peerDependencies: { '@gyral/core': '^0.3.8', vite: '8.3.3' },
    devDependencies: { '@gyral/core': '0.3.8' },
  });
  expect(gyralPeerProblems(packed)).toEqual([]);
});

it('rejects Gyral as a dependency, an exact peer, or a peer the tests never ran', () => {
  expect(gyralPeerProblems(manifest({ dependencies: { '@gyral/core': '0.3.8' } }))).toEqual([
    '@gyral/core is a dependency; list it in peerDependencies with a caret range',
  ]);
  expect(
    gyralPeerProblems(
      manifest({ peerDependencies: { '@gyral/core': '0.3.8' }, devDependencies: { '@gyral/core': '0.3.8' } }),
    ),
  ).toEqual(['peer @gyral/core@0.3.8 must be a caret range that admits the tested @gyral/core@0.3.8']);
  expect(
    gyralPeerProblems(
      manifest({ peerDependencies: { '@gyral/http': '^0.3.9' }, devDependencies: { '@gyral/http': '0.3.8' } }),
    ),
  ).toEqual(['peer @gyral/http@^0.3.9 must be a caret range that admits the tested @gyral/http@0.3.8']);
  expect(gyralPeerProblems(manifest({ peerDependencies: { '@gyral/core': '^0.3.8' } }))).toEqual([
    'peer @gyral/core@^0.3.8 must be a caret range that admits the tested @gyral/core@(none)',
  ]);
});
