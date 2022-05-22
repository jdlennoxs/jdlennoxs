import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArticleMeta } from './ArticleMeta'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Article/Meta',
  component: ArticleMeta,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ArticleMeta>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleMeta> = (args) => <ArticleMeta {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  lastmod: new Date(),
  readingTime: { text: '5 minute read' },
  authorDetails: [
    {
      name: 'Jack Scott',
      avatar: '/assets/images/avatar.png',
    },
  ],
}
