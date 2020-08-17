import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// or global addParameters
export const parameters = {
  docs: {
    theme: themes.dark,
  },
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  controls: {
    expanded: true,
  }
};
