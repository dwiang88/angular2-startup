# Angular2 Startup

A simple lightweight project that runs Angular2 + TypeScript + Webpack.

Each tag in this project increments the complexity adding more features. So check the earlier tags for simple stuff.

# Run

```
npm install
npm run build
npm start
```

# Setup

To create this project I went through some steps:

- `npm init`
- npm installs
  - Dependencies (minimal Angular2 required)
    - `npm install -S angular2`
    - `npm install -S reflect-metadata`
    - `npm install -S rxjs`
    - `npm install -S zone.js`
  - DevDependencies
    - `npm install -D http-server`
    - `npm install -D opener`
    - `npm install -D ts-loader`
    - `npm install -D typescript`
    - `npm install -D typings`
    - `npm install -D tslint`
    - `npm install -D webpack`
- tsc -init
  - tsconfig.json
    - `"experimentalDecorators": true,`
    - `"emitDecoratorMetadata": true,`
- typings
  - `typings install --save --global dt~node`
  - `typings install --save --global dt~es6-shim`
- `tslint --init`
  - tslint.json
    - quotemark: double => single
  - packages.json
    - `"lint": "tslint src/**/*.ts -e **/node_modules/**"`,

## Troubleshoot

### Cannot resolve module 'angular2/platform/browser'

- Resolve `.js` extensions on webpack
- extensions: `['', '.html', '.less', '.js', '.ts']`
- https://github.com/AngularClass/angular2-webpack-starter/issues/530

### Uncaught reflect-metadata shim is required when using class decorators

- `require('zone.js');`
- `import 'reflect-metadata';`
- https://github.com/AngularClass/angular2-webpack-starter/issues/353

### error TS2304: Cannot find name 'IPromise'.
### error TS2307: Cannot find module 'rxjs/Observable'

- `npm install -S rxjs`

### ERROR in angular2\src\core\linker\component_resolver.d.ts TS2304: Cannot find name 'Promise'.
### error TS2304: Cannot find name 'Map'

- `typings install --save --global dt~es6-shim`
