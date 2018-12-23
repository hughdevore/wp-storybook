import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';

import { ColorIndicator } from '@wordpress/components';
import ColorIndicatorReadme from '@wordpress/components/src/color-indicator/README.md'

const ColorIndicatorStyles = {
  textAlign: 'center',
  marginTop: '10%'
};

const ColorIndicatorDecorator = (storyFn) => (
  <div style={ColorIndicatorStyles}>
    { storyFn() }
  </div>
);

storiesOf('ColorIndicator', module)
  .addDecorator(ColorIndicatorDecorator)
  .addDecorator(withReadme(ColorIndicatorReadme))
  .add('Basic', () => (
      <ColorIndicator colorValue="#f00" />
  ));