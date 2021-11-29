import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputButton from './InputButton';

export default {
  title: 'molecules/InputButton',
  component: InputButton,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof InputButton>;

const Template: ComponentStory<typeof InputButton> = args => <InputButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnLabel: 'button label',
  inputPlachodler: 'something input',
  onResult: (value: string) => {
    alert(`Clicked button: ${value}`);
  },
};
