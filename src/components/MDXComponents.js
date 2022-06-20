/* eslint-disable react/display-name */
import React, { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { Timeline } from '@/components/timeline'
import { BlogNewsletterForm } from './NewsletterForm'

const FullWidth = () => <div className="h-96 bg-gray-800 full-width full-bleed" />

export const MDXComponents = {
  FullWidth,
  Image,
  TOCInline,
  Timeline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ children, components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return (
      <Layout {...rest}>
        <div className="article-grid">{children}</div>
      </Layout>
    )
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
