module.exports = {
  stories: [
    '../stories/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../stories/**/*.stories.mdx',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    })
    return config
  },
}
