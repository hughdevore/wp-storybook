import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from "@wordpress/components";
import "@wordpress/components/build-style/style.css";

const styles = {
    textAlign: 'center',
  };
  const CenterDecorator = (storyFn) => (
    <div style={styles}>
      { storyFn() }
    </div>
  );
addDecorator(CenterDecorator);

storiesOf('Button', module)
  .add('Basic', () => (<Button onClick={action('clicked')}>Click Me</Button>))
  .add('Href', () => <Button href="https://www.wordpress.org" onClick={action('clicked')}>Click Me</Button>)
  .add('Default', () => <Button isDefault onClick={action('clicked')}>Click Me</Button>)
  .add('Primary', () => <Button isPrimary onClick={action('clicked')}>Click Me</Button>)
  .add('Large', () => <Button isLarge onClick={action('clicked')}>Click Me</Button>)
  .add('Small', () => <Button isSmall onClick={action('clicked')}>Click Me</Button>)
  .add('Toggled', () => <Button isToggled onClick={action('clicked')}>Click Me</Button>)
  .add('Busy', () => <Button isBusy onClick={action('clicked')}>Click Me</Button>)
  .add('Link', () => <Button isLink onClick={action('clicked')}>Click Me</Button>)
  .add('Focus', () => <Button focus onClick={action('clicked')}>Click Me</Button>);
