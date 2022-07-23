const typescript = require('@rollup/plugin-typescript');
import { terser } from "rollup-plugin-terser";

const pkg = require('../package.json');
const banner = require('./banner.js');

const prefix = 'lzString';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        banner,
        file: pkg.main,
        format: 'umd',
        name: prefix,
        sourcemap: true,
      },
      {
        banner,
        file: pkg.module,
        format: 'es',
        name: prefix,
        sourcemap: true,
      },
      {
        banner,
        file: `${pkg.main.replace('.js','')}.min.js`,
        format: 'umd',
        name: prefix,
        plugins: [terser()]
      },
      {
        banner,
        file: `${pkg.module.replace('.js','')}.min.js`,
        format: 'es',
        name: prefix,
        plugins: [terser()]
      }
    ],
    plugins: [
      typescript({
        declaration: true,
        declarationDir: 'types'
      })
    ]
  },
];
