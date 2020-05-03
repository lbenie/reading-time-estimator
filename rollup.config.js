import typescript from 'rollup-plugin-typescript2'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

const input = 'lib/index.ts'
const name = 'readingTimeEstimator'

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
    typescript({ useTsconfigDeclarationDir: true }),
    nodeResolve({
      mainFields: ['jsnest', 'main', 'module'],
    }),
    commonjs(),
  ],
}
