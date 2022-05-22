import { ResponsiveImage } from '../responsive-image/responsive-image'

import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
interface ArticleMetaProps {
  lastmod: Date
  readingTime: any
  authorDetails: any
}

export const ArticleMeta = ({ lastmod, readingTime, authorDetails }: ArticleMetaProps) => {
  const author = authorDetails[0]
  return (
    <div className="md:p-4 flex items-center space-x-3" key={author.name}>
      {author.avatar && (
        <Image
          src={author.avatar}
          width="52px"
          height="52px"
          alt="avatar"
          className="rounded-full"
        />
      )}
      <div>
        <dd className="tracking-wide font-bold text-base">{author.name}</dd>
        <dd className="flex text-xs space-x-2 text-gray-700 dark:text-gray-400">
          <time>{formatDate(lastmod)}</time>
          <div>&middot;</div>
          <span>{readingTime && readingTime.text}</span>
        </dd>
      </div>
    </div>
  )
}
