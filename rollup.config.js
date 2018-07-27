import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const input = 'lib/index.ts';
const name = 'readingTimeEstimator';

export default {
  input,
  output: [
    {
      file: pkg.main,
      format: 'iife',
      name
    },
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
};
