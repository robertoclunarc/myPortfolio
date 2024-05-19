const { override } = require('customize-cra');

const addCustomWebpackConfig = () => (config) => {
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  });

  return config;
};

module.exports = {
  webpack: override(addCustomWebpackConfig()),
};
