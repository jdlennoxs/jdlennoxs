import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'
import { GetStaticProps } from 'next'
import SectionContainer from '@/components/SectionContainer'
import ArticleCard from '@/components/ArticleCard'
import PageTitle from '@/components/PageTitle'
import projectsData from '@/data/projectsData'

const MAX_DISPLAY = 4

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

const Home = ({ posts }: any) => {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        {/* <div className="background-header full-width">
        <div className="space-y-2 md:space-y-5 p-8 min-h-3/4 full-width flex flex-col justify-center">
          <div className="content-width">
            <h1 className="page-title ">
              -skew-x-3
              Write. Code. Create.
            </h1>
            <div className="w-11 overflow-hidden inline-block">
              <div className=" h-16 bg-hot -rotate-45 transform origin-top-left"></div>
            </div>
            <p className="text-lg leading-7 text-gray-300 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
        </div> 
        </div> */}

        <section className="py-6 content-width">
          <div className="flex flex-col space-y-10">
            <PageTitle>latest</PageTitle>
            <ul className="grid gap-x-2 gap-y-4 xl:grid-cols-2">
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                const { slug, title, readingTime, lastmod, date, imgSrc } = frontMatter
                return (
                  <li key={slug}>
                    <ArticleCard
                      title={title}
                      readingTime={readingTime}
                      lastmod={lastmod}
                      date={date}
                      href={`/blog/${slug}`}
                      imgSrc={imgSrc}
                      type="article"
                    />
                  </li>
                )
              })}
            </ul>
            {posts.length > MAX_DISPLAY && (
              <div className="flex justify-end text-base font-medium leading-6">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="all posts"
                >
                  All Posts &rarr;
                </Link>
              </div>
            )}
          </div>
        </section>
        <section className="py-6 bg-gray-50">
          <div className="flex flex-col space-y-10 content-width">
            <PageTitle>projects</PageTitle>
            <div className="grid gap-x-4 gap-y-4 md:grid-cols-2 max-w-screen-md">
              {projectsData.map((d) => (
                <ArticleCard
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
            {posts.length > MAX_DISPLAY && (
              <div className="flex justify-end text-base font-medium leading-6">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="all posts"
                >
                  Projects &rarr;
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>

      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

export default Home
