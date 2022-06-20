import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BlogHero } from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Blog/Hero',
  component: BlogHero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof BlogHero>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlogHero> = (args) => <BlogHero {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'This is a title, which could span multiple lines',
  summary: 'This is the summary text for an article',
  readingTime: { text: '5 minutes' },
  imgSrc: '/assets/images/canada/maple.jpg',
  tags: ['tag'],
}
