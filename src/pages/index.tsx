import { BlogCard } from '@/components/blog-card'
import { BlogHero } from '@/components/blog-hero'
import LandingPage from '@/components/LandingPage'
import Link from '@/components/Link'
import NewsletterForm from '@/components/NewsletterForm'
import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'
import Starfield from '@/components/starfield'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps } from 'next'

const MAX_DISPLAY = 6

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('posts')

  return { props: { posts } }
}

const Home = ({ posts }: any) => {
  return (
    <div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <section className="h-screen ">
        <Starfield />
      </section>

      {/* <section className="py-6 ">
        <div className="flex flex-col space-y-10 py-10 content-width">
          <PageTitle>latest</PageTitle>
          <ul className="grid gap-y-2 gap-x-4 lg:grid-cols-5 md:grid-cols-4">
            {!posts.length && 'No posts found.'}
            <div className="md:col-span-2">
              <BlogHero
                title={posts[0].title}
                href={`/posts/${posts[0].slug}`}
                readingTime={posts[0].readingTime}
                summary={posts[0].summary}
                imgSrc={posts[0].coverImage}
                tags={posts[0].tags}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-y-2 gap-x-4 lg:col-span-3 md:col-span-2">
              {posts.slice(1, MAX_DISPLAY).map((frontMatter) => {
                const {
                  slug,
                  title,
                  summary,
                  readingTime,
                  lastmod,
                  date,
                  coverImage,
                  type,
                  tags,
                } = frontMatter
                return (
                  <li key={slug}>
                    <BlogCard
                      title={title}
                      readingTime={readingTime}
                      lastmod={lastmod}
                      date={date}
                      href={`/posts/${slug}`}
                      type={type}
                      summary={summary}
                      tags={tags}
                    />
                  </li>
                )
              })}
            </div>
          </ul>
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end text-base font-medium leading-6">
              <Link
                href="/posts"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="all posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
        </div>
      </section> */}
      {/* <section className="py-6">
        <div className="flex flex-col space-y-10 py-10 content-width">
          <PageTitle>projects</PageTitle>
          <ul className="grid gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
            {projectsData.map((project) => {
              const { title, imgSrc, href, summary } = project;
              return (
                <li key={title}>
                  <BlogCard
                    title={title}
                    summary={summary}
                    imgSrc={imgSrc}
                    href={href}
                  />
                </li>
              );
            })}
          </ul>
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end text-base font-medium leading-6">
              <Link
                href="/posts"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="all posts"
              >
                Projects &rarr;
              </Link>
            </div>
          )}
        </div>
      </section> */}

      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </div>
  )
}

export default Home
