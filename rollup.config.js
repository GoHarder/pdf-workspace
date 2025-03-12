import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

/** @type {import('rollup').RollupOptions} */
export default {
  input: {
    // 'master-material-list': 'src/master-material-list.js',
    'motor-pad': 'src/motor-pad.js',
  },
  output: {
    entryFileNames: '[name].js',
    dir: 'dist',
  },
  context: 'this',
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    terser({
      compress: {
        drop_console: true,
      },
      output: {
        comments: false,
      },
    }),
  ],
};
