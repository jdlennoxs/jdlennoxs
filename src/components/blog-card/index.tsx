import Link from '@/components/Link'
import { Card } from '../card/Card'
import Tag from '@/components/Tag'
import { ResponsiveImage } from '../responsive-image/responsive-image'

interface ReadingTime {
  text: string
}

interface BlogCardProps {
  title: string
  summary?: string
  readingTime?: ReadingTime
  href: string
  imgSrc?: string
  tags?: string[]
  lastmod?: Date
  date?: Date
  type?: string
}

export const BlogCard = ({ title, summary, href, imgSrc, tags }: BlogCardProps) => {
  return (
    <Card>
      <>
        {imgSrc ? <ResponsiveImage alt={title} src={imgSrc} /> : null}
        <div className=" sm:px-6 px-4 flex flex-col space-y-3 divide-y">
          <blockquote className="lg:h-32 grow">
            <span className="inline tracking-tight text-xs">
              <Tag text={tags ? tags[0] : ''} />
            </span>

            <Link href={href} aria-label={`Link to ${title}`}>
              <h4 className="mt-2 mb-2 font-bold text-xl tracking-tight text-dark">{title}</h4>
            </Link>
            <p className=" mt-2 leading-5">{summary}</p>
          </blockquote>
        </div>
      </>
    </Card>
  )
}
