import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Timeline } from './Timeline'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/About/Timeline',
  component: Timeline,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Timeline>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Timeline> = (args) => <Timeline {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  history: [
    {
      date: '2022 - present',
      role: 'Software Team Lead - Moneyhub',
      description: 'At Moneyhub I lead the feature development team.',
    },
  ],
}
