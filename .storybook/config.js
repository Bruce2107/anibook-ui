import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'pixel',
  },
});

addDecorator(withA11y);

configure(require.context('../src', true, /\.stories\.(tsx|mdx)$/), module);
