import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginForm from './LoginForm';

export default {
  title: 'Organism/LoginForm',
  component: LoginForm,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => <LoginForm />;

export const Primary = Template.bind({});
