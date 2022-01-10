import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TempThumbnail from '../../../assets/thumbnail.jpeg';
import RoundButton from './RoundButton';

export default {
  title: 'Atoms/RoundButton',
  component: RoundButton,
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = args => <RoundButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'RoundButton',
};

export const ColorTest = Template.bind({});
ColorTest.args = {
  text: 'BTN',
  color: 'hotpink',
  backgroundColor: 'white',
};

export const ChildrenTest = Template.bind({});
ChildrenTest.args = {
  text: 'BTN',
  children: <TempThumbnail />,
};
