# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.1] - 2026-09-12

### Added

- Added `repository`, `bugs`, and `homepage` fields to `package.json` so the npm package page links back to this GitHub repository.
- Added an npm version badge to the README.

### Fixed

- Restored a lint override that was dropped in the `2.0.0` merge, documenting why the Plausible iframe is intentionally left unsandboxed (sandboxing breaks it with a CORS error).

## [2.0.0] - 2026-09-12

### Compatibility

This release targets current Sanity tooling. If you're still on Sanity Studio v3 or v4, stay on `sanity-plugin-plausible-analytics@1.x`.

| Requirement | Version                    |
| ----------- | -------------------------- |
| Sanity      | `^5.0.0 \|\| ^6.0.0`       |
| React       | `^19.2`                    |
| Node.js     | `>=20.19 <22 \|\| >=22.12` |

### Changed

- **Breaking:** raised the `sanity` peer dependency from `^3 \|\| ^4.0.0-0` to `^5 || ^6.0.0-0`, matching what `@sanity/dashboard` now requires internally.
- **Breaking:** raised the `react` peer dependency from `^18 || >=19.0.0-0` to `^19.2`, matching `@sanity/dashboard`'s own peer requirement.
- **Breaking:** the package is now ESM-only (`"type": "module"`), publishing a single `dist/index.js`. The old dual CJS/ESM (`legacyExports`) build was dropped.
- Upgraded `@sanity/dashboard` from `^3.1.6` to `^6.0.18` and `sanity` (dev) from `^3.99.0` to `^6.13.2`.
- Upgraded build tooling: `@sanity/plugin-kit` `^3.1.12` → `^10.0.9`, `@sanity/pkg-utils` `^3.3.8` → `^13.0.0`.
- Replaced `eslint`/`prettier` with `oxlint`/`oxfmt` (plugin-kit v8+ dropped the former entirely).
- Upgraded `typescript` to `^6.0.3`, `react`/`react-dom` to `^19.3.0`, `styled-components` to `^6.5.3`.

### Fixed

- The widget's default `title` ("Plausible Analytics") and `height` values stopped applying under React 19, which removed support for `defaultProps` on function components. Replaced with default parameter values.
- The published build shipped raw, untranspiled JSX (`tsconfig`'s `jsx: "preserve"`), which crashed strict JSX parsers such as Vite's `oxc` transform in consuming Studios. Build now compiles JSX to `react/jsx-runtime` calls.
- Added the `plausible-embed` attribute to the iframe, required by Plausible's `embed.host.js` script to correctly authenticate and render shared-link dashboards.
- Added a `title` attribute to the iframe for accessibility. The iframe is intentionally left unsandboxed (with a lint override): Plausible's embed script needs to make same-origin requests to `plausible.io` to fetch dashboard data, and sandboxing breaks that with a CORS error.

### Removed

- **Breaking:** dropped the Sanity Studio v2 compatibility shim (`sanity.json`, `v2-incompatible.js`, `@sanity/incompatible-plugin`). Studio v2 has been end-of-life for years.

### Security

- Patched transitive vulnerabilities pulled in via `sanity`'s CLI tooling (`js-yaml`, `smol-toml`, `adm-zip`, `uuid`) via pnpm overrides — none of these were shipped in the published plugin, only present in the local dev/build dependency tree.

## [1.1.0] and earlier

No changelog was kept prior to 2.0.0. See the [git history](https://github.com/stijnelskens/sanity-plugin-plausible-analytics/commits/main) for details.
