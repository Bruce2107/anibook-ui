import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';

addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(centered);

configure(require.context('../src', true, /\.stories\.tsx$/), module);
