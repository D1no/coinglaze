import { configure, addDecorator } from '@storybook/react';
import { configureViewport } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';

configureViewport({
  defaultViewport: 'iphone6'
});

addDecorator(withKnobs);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
