import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { PanelRow, Button} from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
  margin: 'auto',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

//addDecorator(CenterDecorator);

storiesOf('PanelRow', module)
  .add('Basic', () => (
    <React.Fragment>
      <PanelRow>
        <Button isDefault onClick={action('clicked')}>Default</Button>
        <Button isLarge onClick={action('clicked')}>Large</Button>
        <Button isLarge isBusy onClick={action('clicked')}>Large & Busy</Button>
        <Button isSmall onClick={action('clicked')}>Small</Button>
        <Button isPrimary onClick={action('clicked')}>Primary</Button>
        <Button isPrimary isBusy onClick={action('clicked')}>Primary & Busy</Button>
      </PanelRow>
    </React.Fragment>
  ));
