import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RoundButton from './RoundButton';

export default {
  title: 'Atoms/RoundButton',
  component: RoundButton,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = args => <RoundButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'X',
  onClick: () => {
    alert('clicked button');
  },
};

export const ImageButton = Template.bind({});
ImageButton.args = {
  label: 'X',
  onClick: () => {
    alert('clicked button');
  },
  imageUrl: 'http://localhost:6060/favicon.ico',
};
