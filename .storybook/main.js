const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.md',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/nextjs',
  docs: {
    // Your docs configuration
    autodocs: 'tag',
  },
  staticDirs: ['../public'],

  webpackFinal: async (config, { configType }) => {
    // Locate the rules section of the webpack config
    const rules = config.module.rules

    // Add MDX loader
    rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [require('remark-prism')],
          },
        },
      ],
    })

    // Return the updated webpack config
    return config
  },
}
