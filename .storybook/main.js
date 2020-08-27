module.exports = {
  stories: ['../src/**/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
  ],
};
