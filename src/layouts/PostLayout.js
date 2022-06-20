import Comments from '@/components/comments'
import Draft from '@/components/Draft'
import { ArticleHero } from '@/components/article-hero'
import { ArticleMeta } from '@/components/article-meta'
import Link from '@/components/Link'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/posts/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/posts/${slug}`
  )}`

export default function PostLayout({ toc, frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, summary, date, title, tags, draft, coverImage, readingTime } = frontMatter

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/posts/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <ArticleHero title={title} imgSrc={coverImage} tags={tags} lastmod={date} />

        <div className="article-container divide-y divide-gray-200 dark:divide-gray-700">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="pb-8 prose max-w-none space-y-4">
              <ArticleMeta summary={summary} readingTime={readingTime} />
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
    </>
  )
}
