import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import theme from './theme';

addParameters({
  options: {
    theme,
  },
});

addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(centered);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
