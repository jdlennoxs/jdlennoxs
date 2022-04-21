import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function PageTitle({ date, tags, children }) {
  return (
    <div className="relative p-4 bg-white max-w-xl flex flex-col mt-0">
      {/* md:-mt-14 */}
      <h1
        className="text-xl md:text-2xl
        font-bold
      tracking-wide leading-7 md:leading-7
      text-gray-800 dark:text-gray-100
      font-serif"
      >
        {children}
      </h1>
      <h2
        className="
      tracking-wide leading-7  md:leading-7
      text-gray-700 dark:text-gray-100"
      >
        Subtitle underneath
      </h2>
      <div className="mt-4">
        <div className="mb-4">
          <Tag key={tags[0]} text={tags[0]} />
        </div>
        <dd className="text-base text-gray-700 dark:text-gray-400">
          <time dateTime={date} className="text-xs">
            Last updated -{' '}
            {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
          </time>
        </dd>
      </div>
    </div>
  )
}
