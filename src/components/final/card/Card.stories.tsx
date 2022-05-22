import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from './Card'

const Placeholder = () => <div className="p-4 bg-gray-50">Placeholder</div>

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Primitive/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <Placeholder />
  </Card>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  border: true,
  rounded: true,
}
