import Comments from '@/components/comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import TOCInline from '@/components/TOCInline'
import siteMetadata from '@/data/siteMetadata'
import Draft from '@/components/Draft'
import TitleCard from '@/components/TitleCard'
import Image from 'next/image'

import { ArticleHero } from '../stories/article-hero/ArticleHero'
import { ArticleMeta } from '../stories/article-meta/ArticleMeta'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/posts/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/posts/${slug}`
  )}`

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ toc, frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, summary, date, title, tags, draft, coverImage, readingTime } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/posts/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        {/* <div className="full-width">
          <div className="header-width border-b">
            {coverImage ? (
              <div className="m-auto relative">
                <Image
                  alt={title}
                  src={coverImage}
                  layout="responsive"
                  width={920}
                  height={500}
                  className="object-cover object-center"
                />
              </div>
            ) : null}

            <TitleCard tags={tags} date={date}>
              {title}
            </TitleCard>
          </div>
        </div> */}
        <ArticleHero title={title} imgSrc={coverImage} summary={summary} />

        <div className="article-width divide-y divide-gray-200 dark:divide-gray-700">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="pb-8 prose max-w-none space-y-4">
              <ArticleMeta lastmod={date} readingTime={readingTime} authorDetails={authorDetails} />
              {children}
              {draft ? <Draft /> : null}
            </div>
            <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
              <Link href={discussUrl(slug)} rel="nofollow">
                {'Discuss on Twitter'}
              </Link>
              {` • `}
              <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
            </div>
            <Comments frontMatter={frontMatter} />
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
