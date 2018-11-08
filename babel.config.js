module.exports = function (api) {
  api.cache(true);
  const presets = [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        development: process.argv.slice(-1)[0] === 'development',
      },
    ],
    '@babel/preset-typescript',
  ];
  const plugins = [
    'react-hot-loader/babel',
    '@babel/plugin-transform-runtime',
    ['import', { libraryName: 'antd-mobile', libraryDirectory: 'lib', style: true }, 'antd-mobile'],
  ];

  return {
    presets,
    plugins,
  };
};