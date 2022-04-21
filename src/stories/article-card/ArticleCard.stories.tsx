import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleCard } from './ArticleCard'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ArticleCard',
  component: ArticleCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ArticleCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleCard> = (args) => <ArticleCard {...args}></ArticleCard>

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'This is a title',
  imgSrc: '/assets/images/canada/maple.jpg',
}
