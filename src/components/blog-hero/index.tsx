import Link from '@/components/Link'
import { Card } from '../card/Card'
import Tag from '@/components/Tag'
import { ResponsiveImage } from '../responsive-image/responsive-image'

interface ReadingTime {
  text: string
}

interface BlogHeroProps {
  title: string
  summary: string
  readingTime: ReadingTime
  href: string
  imgSrc: string
  tags: string[]
}

export const BlogHero = ({ title, summary, readingTime, href, imgSrc, tags }: BlogHeroProps) => {
  return (
    <Card dark>
      <div className="flex flex-col space-y-4 py-4">
        <div>
          {imgSrc ? <ResponsiveImage alt={title} src={imgSrc} /> : null}
          <blockquote className="sm:p-6 p-4">
            <span className="inline tracking-tight">
              <Tag text={tags[0] || ''} />
            </span>

            <Link href={href} aria-label={`Link to ${title}`}>
              <h4 className="mt-4 mb-4 font-bold text-2xl tracking-tight">{title}</h4>
            </Link>
            <p className=" mb-4">{summary}</p>
          </blockquote>
          {/* <p>{readingTime.text}</p> */}
        </div>
      </div>
    </Card>
  )
}
