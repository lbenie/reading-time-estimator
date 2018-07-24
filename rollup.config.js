import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';


const rollupPlugins = () => [
  nodeResolve({
    jsnext: true,
    main: true
  }),
  commonjs(),
  typescript()
];

const input = 'lib/index.ts';
const name = 'readingTimeEstimator';
const banner = `/*!
* Lucien Bénié https://github.com/lbenie/reading-time-estimator
*
* Copyright (c) 2018, Jon Schlinkert.
* Released under the MIT License.
*/`;

export default {
  input,
  output: [
    {
      file: pkg.main, format: 'iife', name, plugins: [terser({
        ecma: 6,
        output: {
          comments: true
        }
      })]
    },
    { file: 'dist/iife/index.js', format: 'iife', name },
    { file: 'dist/cjs/index.js', format: 'cjs', name },
    { file: pkg.module, format: 'es' }
  ],
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    typescript()
  ]
}

