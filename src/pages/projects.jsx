import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { BlogCard } from '@/components/final/blog-card/BlogCard'
import { PageSEO } from '@/components/SEO'
import PageTitle from '@/components/PageTitle'

export default function Projects() {
  return (
    <div className="content-width">
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className=" divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <PageTitle>Projects</PageTitle>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your projects with a hero image (16 x 9)
          </p>
        </div>
        <div className="grid gap-x-4 gap-y-4 md:grid-cols-3">
          {projectsData.map((d) => (
            <BlogCard
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
