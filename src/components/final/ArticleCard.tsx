import Image from 'next/image'
import Link from '@/components/Link'
import formatDate from '@/lib/utils/formatDate'
import CardWrapper from '@/components/final/CardWrapper'
import Tag from '@/components/Tag'

interface CardProps {
  title: any
  readingTime?: any
  lastmod?: any
  date?: any
  href: any
  imgSrc: any
  type?: any
  description?: any
}

const CoverImage = ({ href, title, imgSrc }) => (
  <div className="w-full border-b" style={{ fontSize: '0' }}>
    {href ? (
      <Image
        alt={title}
        src={imgSrc}
        // layout="responsive"
        width={360}
        height={180}
        className="object-cover object-center"
      />
    ) : (
      <Image
        alt={title}
        src={imgSrc}
        width={360}
        height={180}
        className="object-cover object-center"
      />
    )}
  </div>
)

const ArticleCard = ({ title, readingTime, href, imgSrc, type, summary }: CardProps) => {
  return (
    <div className="min-h-[80px]">
      <Link href={href} aria-label={`Link to ${title}`}>
        {imgSrc ? <CoverImage title={title} imgSrc={imgSrc} href={href} /> : null}
        <div>
          <blockquote className="p-4">
            <div className="flex flex-col">
              <Tag text="tags" />
              <span className="mt-2">
                <h4 className="inline text-lg text-dark">{title}</h4>
                {/* <p className="text-subtle"> {summary}</p> */}
              </span>

              <span className="text-subtle mt-4">{readingTime && readingTime.text}</span>
            </div>
          </blockquote>
        </div>
      </Link>
    </div>
  )
}

export default CardWrapper(ArticleCard)
