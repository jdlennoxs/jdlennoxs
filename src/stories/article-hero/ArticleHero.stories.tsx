import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleHero } from './ArticleHero'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ArticleHero',
  component: ArticleHero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ArticleHero>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleHero> = (args) => <ArticleHero {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'This is a title, which could span multiple lines',
  imgSrc: '/assets/images/canada/maple.jpg',
  summary: 'This is some summary text',
}
