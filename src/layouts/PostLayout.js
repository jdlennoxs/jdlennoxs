import Comments from '@/components/comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import TOCInline from '@/components/TOCInline'
import siteMetadata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ toc, frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div>
          <header className="pt-6 xl:pb-6">
            <div className="py-10">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
            <div className="text-sm font-medium leading-5 flex justify-between">
              <div className="py-4 xl:py-8 ">
                <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  Last updated
                </h2>
                <dd className="text-base font-medium leading-6 text-gray-700 dark:text-gray-400">
                  <time dateTime={date} className="text-sm">
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                </dd>
              </div>
              {tags && (
                <div className="py-4 xl:py-8 ">
                  <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    Tags
                  </h2>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </header>
          <div className="p-4 xl:p-8 bg-gray-50 full-width">
            <div className="content-width">
              <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Table of contents
              </h2>
              <TOCInline toc={toc} />
            </div>
          </div>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-1 xl:gap-x-6"
            style={{ gridTemplateRows: '1fr' }}
          >
            <div className="max-w-lg mx-auto divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-1 xl:row-span-2 xl:row-start-1 row-start-2">
              <div className="pt-10 pb-8 prose dark:prose-dark">{children}</div>
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
        </div>
      </article>
    </SectionContainer>
  )
}
