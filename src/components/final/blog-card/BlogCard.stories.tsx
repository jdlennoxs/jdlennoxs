import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BlogCard } from './BlogCard'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Blog/Card',
  component: BlogCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof BlogCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlogCard> = (args) => <BlogCard {...args}></BlogCard>

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'This is a title',
  summary: 'This is the summary text for an article',
  readingTime: { text: '5 minutes' },
  imgSrc: '/assets/images/canada/maple.jpg',
  tags: ['tag'],
}
