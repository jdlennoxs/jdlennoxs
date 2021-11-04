import Image from 'next/image'
import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'

const CoverImage = ({ href, title, imgSrc }) => (
  <div className="w-full" style={{ fontSize: '0' }}>
    {href ? (
      <Image
        alt={title}
        src={imgSrc}
        layout="responsive"
        width={360}
        height={360}
        className="object-cover object-center"
      />
    ) : (
      <Image
        alt={title}
        src={imgSrc}
        width={360}
        height={360}
        className="object-cover object-center"
      />
    )}
  </div>
)

const ArticleCard = ({ title, readingTime, lastmod, date, href, imgSrc }) => (
  <div className="max-w-xs hover:scale-105 hover:transform hover:border-t-2 border-t-0 border-highlight transition duration-600 min-h-[124px]">
    <Link href={href} aria-label={`Link to ${title}`}>
      {imgSrc ? <CoverImage title={title} imgSrc={imgSrc} href={href} /> : null}
      <div>
        <blockquote className="p-2">
          <h4 className="text-md font-semibold pb-1">{title}</h4>
          <div className="flex justify-between text-xs">
            <time>{lastmod ? formatDate(lastmod) : formatDate(date)}</time>
            <span>{readingTime && readingTime.text}</span>
          </div>
        </blockquote>
      </div>
    </Link>
  </div>
)

export default ArticleCard
