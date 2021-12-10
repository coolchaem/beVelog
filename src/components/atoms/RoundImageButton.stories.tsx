import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RoundImageButton from './RoundImageButton';

export default {
  title: 'Atoms/RoundImageButton',
  component: RoundImageButton,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof RoundImageButton>;

const Template: ComponentStory<typeof RoundImageButton> = args => <RoundImageButton {...args} />;

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
