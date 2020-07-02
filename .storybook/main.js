import { resolve } from 'path';

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        require.resolve('ts-loader'),
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: resolve(__dirname, '../tsconfig.json'),
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  addons: ['@storybook/addon-a11y/register'],
};
