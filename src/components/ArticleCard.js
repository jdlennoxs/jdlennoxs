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

const ArticleCard = ({ title, readingTime, lastmod, date, href, imgSrc, type }) => {
  const lastModified = lastmod || date
  console.log(type)
  return (
    <div className="group max-w-xs transition duration-600 min-h-[80px]">
      <Link href={href} aria-label={`Link to ${title}`}>
        {imgSrc ? <CoverImage title={title} imgSrc={imgSrc} href={href} /> : null}
        <div>
          <blockquote className="p-2">
            <h4 className="text-md font-semibold pb-1 group-hover:text-highlight ">{title}</h4>
            {type === 'article' ? (
              <div className="flex justify-between text-xs">
                <time>{formatDate(lastModified)}</time>
                <span>{readingTime && readingTime.text}</span>
              </div>
            ) : null}
          </blockquote>
        </div>
      </Link>
    </div>
  )
}

export default ArticleCard
