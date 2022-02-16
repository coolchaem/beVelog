import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import StickyComponent from './StickyComponent';

export default {
  title: 'Atoms/StickyComponent',
  component: StickyComponent,
  decorators: [
    Story => (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor eget pulvinar
          lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Nam ac dolor augue. Pellentesque mi mi, laoreet et dolor sit amet, ultrices varius
          risus. Nam vitae iaculis elit. Aliquam mollis interdum libero. Sed sodales placerat
          egestas. Vestibulum ut arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl
          mauris, aliquam sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
          aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id maximus erat
          aliquet. Sed sagittis porta libero sed condimentum. Aliquam finibus lectus nec ante congue
          rutrum. Curabitur quam quam, accumsan id ultrices ultrices, tempor et tellus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor eget pulvinar
          lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Nam ac dolor augue. Pellentesque mi mi, laoreet et dolor sit amet, ultrices varius
          risus. Nam vitae iaculis elit. Aliquam mollis interdum libero. Sed sodales placerat
          egestas. Vestibulum ut arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl
          mauris, aliquam sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
          aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id maximus erat
          aliquet. Sed sagittis porta libero sed condimentum. Aliquam finibus lectus nec ante congue
          rutrum. Curabitur quam quam, accumsan id ultrices ultrices, tempor et tellus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor eget pulvinar
          lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Nam ac dolor augue. Pellentesque mi mi, laoreet et dolor sit amet, ultrices varius
          risus. Nam vitae iaculis elit. Aliquam mollis interdum libero. Sed sodales placerat
          egestas. Vestibulum ut arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl
          mauris, aliquam sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
          aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id maximus erat
          aliquet. Sed sagittis porta libero sed condimentum. Aliquam finibus lectus nec ante congue
          rutrum. Curabitur quam quam, accumsan id ultrices ultrices, tempor et tellus.
        </p>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof StickyComponent>;

const Template: ComponentStory<typeof StickyComponent> = args => (
  <StickyComponent {...args}>
    <button>abc</button>
    <button>가나다</button>
    <button>123</button>
  </StickyComponent>
);

export const Primary = Template.bind({});
Primary.args = {
  top: 112,
  left: 30,
};
