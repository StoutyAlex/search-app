
module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    });

    return config;
  },
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    'storybook-addon-react-docgen/register',
  ],
  stories: ['./components/**/*.stories.[tj]s'],
};