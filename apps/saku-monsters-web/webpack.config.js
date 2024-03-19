const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { join } = require('path');

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx({
    tsConfig: 'apps/saku-monsters-web/tsconfig.app.json',
    compiler: 'babel',
    main: 'apps/saku-monsters-web/src/main.tsx',
    index: 'apps/saku-monsters-web/src/index.html',
    baseHref: 'apps/saku-monsters/',
    outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
    optimization: process.env['NODE_ENV'] === 'production',
  }),
  withReact(),
  (config) => {
    config.output = {
      path: join(__dirname, '../../dist/apps/main-app'),
    };
    config.devServer = {
      port: 4200,
      historyApiFallback: true,
    };
    return config;
  }
);
