import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const tags = await getAllTags('posts')

  return { props: { tags } }
}

export default function Tags({ tags }: { tags: { [key: string]: any } }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <PageTitle>Tags</PageTitle>
        </div>
        <div className="flex flex-wrap max-w-lg">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <Tag text={t} />
                <Link
                  href={`/tags/${kebabCase(t)}`}
                  className="-ml-2 text-xs font-semibold text-gray-600 uppercase dark:text-gray-300 superscript"
                >
                  {` ${tags[t]}`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
