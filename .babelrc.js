const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'dev' || NODE_ENV === 'development';
const isProd = NODE_ENV === 'prod' || NODE_ENV === 'production';
const isTest = NODE_ENV === 'test';

module.exports = {
  presets: [
    [
      'env',
      {
        target: {
          browsers: ['last 2 versions'],
        },
        modules: false,
        useBuiltins: true,
      },
    ],
    'react',
  ],
  plugins: [
    'transform-object-rest-spread',
    'transform-es2015-modules-commonjs',
    'transform-react-remove-prop-types',
    'transform-react-constant-elements',
    'transform-react-inline-elements',
    'transform-runtime',
    'transform-decorators-legacy',
    isTest && 'transform-es2015-modules-commonjs',
  ].filter(Boolean),
}
