# nodejs-dual-package-hazard-sample

This repository explains [Dual Package Hazard](https://nodejs.org/api/esm.html#esm_dual_package_hazard) in Node.js.

# Overview
If you try Dual Package Hazard, run `npm test`.
If you get some error, check Node.js version and use >= v13.2.

This repository has the below structure.
`./index.mjs` imports `package1`.
`package1` has ESModule file and CommonJS file.
If you imports via `require`, `package1/index.cjs` is used.
If you imports via `import`, `package1/index.mjs` is used.

```
.
├── index.mjs
├── node_modules
│   └── package1
│       ├── index.cjs
│       ├── index.mjs
│       ├── package.json
│       └── state.cjs
└── package.json
```

