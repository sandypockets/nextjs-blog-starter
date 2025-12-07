export default {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.md',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    '@storybook/addon-docs'
  ],

  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
}
