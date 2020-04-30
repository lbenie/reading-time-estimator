import typescript from 'rollup-plugin-typescript2'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

const input = 'lib/index.ts'
const name = 'readingTimeEstimator'

const extensions = ['.js', '.ts']

export default {
  input,
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name,
    },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      tslib: require('tslib'),
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      extensions,
    }),
    commonjs({ jsnext: true, extensions }),
  ],
}
