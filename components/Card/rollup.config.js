var babel = require('@rollup/plugin-babel')
var resolve = require('@rollup/plugin-node-resolve')
var url = require('@rollup/plugin-url')
var svgr = require('@svgr/rollup')
var external = require('rollup-plugin-peer-deps-external')
var postcss = require('rollup-plugin-postcss')
var rollupPluginTerser = require('rollup-plugin-terser')
var typescript = require('rollup-plugin-typescript2')
var bundleSize = require('rollup-plugin-bundle-size')
var json = require('@rollup/plugin-json')
var commonjs = require('@rollup/plugin-commonjs')

function getRollupConfig(config) {
    var rollupConfig = {}
  
    if (config && config.input) {
      rollupConfig.input = config.input
    } else {
      rollupConfig.input = 'src/index.ts'
    }
  
    if (config && config.output) {
      rollupConfig.output = config.output
    } else {
      rollupConfig.output = [
        {
          file: 'dist/index.js',
          format: 'cjs',
          exports: 'named',
          sourcemap: true,
          interop: 'compat',
        },
        {
          file: 'dist/index.es.js',
          format: 'es',
          exports: 'named',
          sourcemap: true,
          interop: 'compat',
        },
      ]
    }
    if (config && config.externalConfig) {
      rollupConfig.external = config.externalConfig
    }
  
    rollupConfig.plugins = []
    if (config && config.plugins) {
      rollupConfig.plugins = config.plugins
    }
  
    rollupConfig.plugins = rollupConfig.plugins.concat([
      external(),
      postcss({
        modules: true,
      }),
      url({
        include: ['**/*.otf', '**/*.woff', '**/*.woff2', '**/*.svg'],
        limit: Infinity,
      }),
      svgr({
        titleProp: true,
        svgoConfig: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
            {
              name: 'cleanupIDs',
              active: false,
            },
          ],
        },
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        compact: true,
      }),
      resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
      typescript({
        exclude: ['./**/*.test.tsx', './**/*.stories.tsx'],
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
      json(),
      commonjs({
        extensions: ['.js', '.ts'],
      }),
      rollupPluginTerser.terser({
        toplevel: false,
      }),
    ])
  
    if (!config || !config.noBundleSize) {
      rollupConfig.plugins.push(bundleSize())
    }
  
    return rollupConfig
}

const rollupConfig = getRollupConfig()

module.exports = rollupConfig